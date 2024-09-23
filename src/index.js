const ip = require("ip");

const EXAMPLE_ROUTE_INPUT = `以下为示例路由表:
IPv4 路由表
===========================================================================
活动路由:
网络目标        网络掩码          网关       接口   跃点数
          0.0.0.0          0.0.0.0     192.168.11.1    192.168.11.16     25
    18.140.187.83  255.255.255.255      172.19.83.1    172.19.83.237    100
      18.180.48.0    255.255.255.0      172.19.83.1    172.19.83.237    100
     18.180.73.21  255.255.255.255      172.19.83.1    172.19.83.237    100
     144.202.32.0    255.255.240.0      172.19.83.1    172.19.83.237    100
     192.168.11.0    255.255.255.0            在链路上     192.168.11.16    281
   192.168.11.255  255.255.255.255            在链路上     192.168.11.16    281
        224.0.0.0        240.0.0.0            在链路上         127.0.0.1    331
  255.255.255.255  255.255.255.255            在链路上         127.0.0.1    331
===========================================================================
`;

const EXCLUDED_CIDR = [
  "0.0.0.0/0",
  "0.0.0.0/8",
  "10.0.0.0/8",
  "100.64.0.0/10",
  "127.0.0.0/8",
  "169.254.0.0/16",
  "172.16.0.0/12",
  "192.0.0.0/24",
  "192.0.2.0/24",
  "192.168.0.0/16",
  "192.88.99.0/24",
  "198.18.0.0/15",
  "198.51.100.0/24",
  "203.0.113.0/24",
  "233.252.0.0/24",
  "224.0.0.0/4",
  "240.0.0.0/4",
  "255.255.255.255/32",
];

function routeToCIDR(routeRawStr) {
  const WHOLE_LISTS = [];
  let cidrAddressList = [];

  routeRawStr.split("\n").forEach((line) => {
    // 以空格分割每一行的内容
    const LINE_SPLIT = line.trim().split(/\s+/);
    if (LINE_SPLIT.length == 5) {
      WHOLE_LISTS.push(LINE_SPLIT);
    }
  });

  // 对列表中的有效内容转换为CIDR地址
  WHOLE_LISTS.forEach((ipAddress) => {
    try {
      if (!ip.isV4Format(ipAddress[0])) return;

      const SUBNET_INFO = ip.subnet(ipAddress[0], ipAddress[1]);
      const CIDR_ADDRESS = `${SUBNET_INFO.networkAddress}/${SUBNET_INFO.subnetMaskLength}`;

      if (
        ip.isPublic(SUBNET_INFO.networkAddress) &&
        !ip.isLoopback(SUBNET_INFO.networkAddress) &&
        !ip.isPrivate(SUBNET_INFO.networkAddress) &&
        !EXCLUDED_CIDR.includes(CIDR_ADDRESS)
      ) {
        cidrAddressList.push(SUBNET_INFO);
      }
    } catch (error) {
      // 忽略错误
      console.error("Error converting IP to CIDR:", error);
    }
  });

  // 剔除在CIDR超网中包含的所有子网
  cidrAddressList = cidrAddressList.filter((subnet, index, self) => {
    return !self.some(
      (other) =>
        ip
          .cidrSubnet(other.networkAddress + "/" + other.subnetMaskLength)
          .contains(subnet.networkAddress) && other !== subnet,
    );
  });

  // cidrAddressList.forEach((network) => {
  //   console.log(`${network.networkAddress}/${network.subnetMaskLength}`);
  // });

  return cidrAddressList; // 返回CIDR列表
}

function convertCIDRListToStr(cidrAddressList, formatFn, header = "") {
  if (!Array.isArray(cidrAddressList)) {
    throw new Error("convertCIDRListToString: Invalid input cidrAddressList");
  }

  if (cidrAddressList.length === 0) {
    return "";
  }

  let result = header ? header + "\n" : "";
  result += cidrAddressList.map(formatFn).join("\n");

  return result.trim();
}

function convertCIDRListToNetchStr(cidrAddressList) {
  return convertCIDRListToStr(
    cidrAddressList,
    (network) => `${network.networkAddress}/${network.subnetMaskLength}`,
  );
}

function convertCIDRListToClashStr(cidrAddressList) {
  return convertCIDRListToStr(
    cidrAddressList,
    (network) => `  - ${network.networkAddress}/${network.subnetMaskLength}`,
    "payload:",
  );
}

function convertCIDRListToSSTapStr(cidrAddressList, ruleHeader) {
  return convertCIDRListToStr(
    cidrAddressList,
    (network) => `${network.networkAddress}/${network.subnetMaskLength}`,
    ruleHeader,
  );
}

// 获取HTML元素并添加事件监听器
document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("input");
  const outputElement = document.getElementById("output");
  const configContainer = document.getElementById("config-container");
  const sstapHeaderElement = document.getElementById("sstapHeader");

  const buttonToClash = document.getElementById("buttonToClash");
  const buttonToSSTap = document.getElementById("buttonToSSTap");
  const buttonToNetch = document.getElementById("buttonToNetch");

  const copyButton = document.getElementById("copyButton");
  const downloadButton = document.getElementById("downloadButton");

  inputElement.placeholder = EXAMPLE_ROUTE_INPUT;
  configContainer.style.display = "none";

  // 切换显示/隐藏额外设置
  function toggleConfigContainer(show) {
    configContainer.style.display = show ? "block" : "none";
  }

  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("opacity-0"); // 显示通知
    notification.classList.add("opacity-100");

    // 3秒后隐藏通知
    setTimeout(() => {
      notification.classList.add("opacity-0");
      notification.classList.remove("opacity-100");
    }, 3000);
  }

  // 定义转换按钮点击事件通用处理函数
  function handleButtonClick(convertFunction, extraParam = null) {
    showNotification("正在转换路由表至CIDR~ 转换速度取决于路由表长度");

    const routeInput = inputElement.value.trim() === "" ? EXAMPLE_ROUTE_INPUT : inputElement.value;
    const cidrAddressList = routeToCIDR(routeInput);
    const result = extraParam
      ? convertFunction(cidrAddressList, extraParam)
      : convertFunction(cidrAddressList);
    outputElement.textContent = result;

    showNotification("转换完成！");
  }

  // 添加事件监听器
  buttonToClash.addEventListener("click", () => {
    handleButtonClick(convertCIDRListToClashStr);
    toggleConfigContainer(false);
  });
  buttonToSSTap.addEventListener("click", () => {
    handleButtonClick(convertCIDRListToSSTapStr, sstapHeaderElement.value.trim());
    toggleConfigContainer(true);
  });
  buttonToNetch.addEventListener("click", () => {
    handleButtonClick(convertCIDRListToNetchStr);
    toggleConfigContainer(false);
  });

  // 复制按钮功能
  copyButton.addEventListener("click", () => {
    const outputText = outputElement.textContent.trim();
    if (outputText) {
      navigator.clipboard
        .writeText(outputText)
        .then(() => {
          showNotification("转换结果已复制到剪贴板！");
        })
        .catch((err) => {
          console.error("复制失败:", err);
        });
    } else {
      showNotification("转换结果没有内容可供复制！");
    }
  });

  // 下载按钮功能
  downloadButton.addEventListener("click", () => {
    const outputText = outputElement.textContent.trim();
    if (outputText) {
      const blob = new Blob([outputText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "output.rules";
      a.click();

      URL.revokeObjectURL(url); // 释放URL对象

      showNotification("转换结果文件已下载！");
    } else {
      showNotification("转换结果没有内容可供下载！");
    }
  });
});
