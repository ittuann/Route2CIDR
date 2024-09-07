(()=>{var t={526:(t,e)=>{"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=f(t),s=i[0],u=i[1],h=new o(function(t,e,r){return 3*(e+r)/4-r}(0,s,u)),c=0,a=u>0?s-4:s;for(r=0;r<a;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[c++]=e>>16&255,h[c++]=e>>8&255,h[c++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[c++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[c++]=e>>8&255,h[c++]=255&e);return h},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],s=16383,f=0,h=n-o;f<h;f+=s)i.push(u(t,f,f+s>h?h:f+s));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0;s<64;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function u(t,e,n){for(var o,i,s=[],f=e;f<n;f+=3)o=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},287:(t,e,r)=>{"use strict";const n=r(526),o=r(251),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},e.INSPECT_MAX_BYTES=50;const s=2147483647;function f(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return a(t)}return h(t,e,r)}function h(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|y(t,e);let n=f(r);const o=n.write(t,e);o!==r&&(n=n.slice(0,o));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(H(t,Uint8Array)){const e=new Uint8Array(t);return p(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(H(t,ArrayBuffer)||t&&H(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(H(t,SharedArrayBuffer)||t&&H(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,e,r);const o=function(t){if(u.isBuffer(t)){const e=0|g(t.length),r=f(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||J(t.length)?f(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function a(t){return c(t),f(t<0?0:0|g(t))}function l(t){const e=t.length<0?0:0|g(t.length),r=f(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,u.prototype),n}function g(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function y(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||H(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(t).length;default:if(o)return n?-1:W(t).length;e=(""+e).toLowerCase(),o=!0}}function d(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,r);case"utf8":case"utf-8":return U(this,e,r);case"ascii":return $(this,e,r);case"latin1":case"binary":return k(this,e,r);case"base64":return L(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function m(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),J(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,o){let i,s=1,f=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,f/=2,u/=2,r/=2}function h(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let n=-1;for(i=r;i<f;i++)if(h(t,i)===h(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===u)return n*s}else-1!==n&&(i-=i-n),n=-1}else for(r+u>f&&(r=f-u),i=r;i>=0;i--){let r=!0;for(let n=0;n<u;n++)if(h(t,i+n)!==h(e,n)){r=!1;break}if(r)return i}return-1}function E(t,e,r,n){r=Number(r)||0;const o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=e.length;let s;for(n>i/2&&(n=i/2),s=0;s<n;++s){const n=parseInt(e.substr(2*s,2),16);if(J(n))return s;t[r+s]=n}return s}function B(t,e,r,n){return X(W(e,t.length-r),t,r,n)}function I(t,e,r,n){return X(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function v(t,e,r,n){return X(q(e),t,r,n)}function A(t,e,r,n){return X(function(t,e){let r,n,o;const i=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function L(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function U(t,e,r){r=Math.min(t.length,r);const n=[];let o=e;for(;o<r;){const e=t[o];let i=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=r){let r,n,f,u;switch(s){case 1:e<128&&(i=e);break;case 2:r=t[o+1],128==(192&r)&&(u=(31&e)<<6|63&r,u>127&&(i=u));break;case 3:r=t[o+1],n=t[o+2],128==(192&r)&&128==(192&n)&&(u=(15&e)<<12|(63&r)<<6|63&n,u>2047&&(u<55296||u>57343)&&(i=u));break;case 4:r=t[o+1],n=t[o+2],f=t[o+3],128==(192&r)&&128==(192&n)&&128==(192&f)&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&f,u>65535&&u<1114112&&(i=u))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(t){const e=t.length;if(e<=R)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=R));return r}(n)}e.kMaxLength=s,u.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,e,r){return h(t,e,r)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,e,r){return function(t,e,r){return c(t),t<=0?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)}(t,e,r)},u.allocUnsafe=function(t){return a(t)},u.allocUnsafeSlow=function(t){return a(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,e){if(H(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),H(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=u.allocUnsafe(e);let o=0;for(r=0;r<t.length;++r){let e=t[r];if(H(e,Uint8Array))o+e.length>n.length?(u.isBuffer(e)||(e=u.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else{if(!u.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,o)}o+=e.length}return n},u.byteLength=y,u.prototype._isBuffer=!0,u.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},u.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},u.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},u.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?U(this,0,t):d.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(u.prototype[i]=u.prototype.inspect),u.prototype.compare=function(t,e,r,n,o){if(H(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;let i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0);const f=Math.min(i,s),h=this.slice(n,o),c=t.slice(e,r);for(let t=0;t<f;++t)if(h[t]!==c[t]){i=h[t],s=c[t];break}return i<s?-1:s<i?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return m(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return m(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return E(this,t,e,r);case"utf8":case"utf-8":return B(this,t,e,r);case"ascii":case"latin1":case"binary":return I(this,t,e,r);case"base64":return v(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const R=4096;function $(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function k(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function T(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=Z[t[n]];return o}function S(t,e,r){const n=t.slice(e,r);let o="";for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}function O(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function x(t,e,r,n,o,i){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function C(t,e,r,n,o){z(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function _(t,e,r,n,o){z(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function M(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function P(t,e,r,n,i){return e=+e,r>>>=0,i||M(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,i){return e=+e,r>>>=0,i||M(t,0,r,8),o.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,u.prototype),n},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},u.prototype.readUint8=u.prototype.readUInt8=function(t,e){return t>>>=0,e||O(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||O(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||O(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readBigUInt64LE=K((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Y(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),u.prototype.readBigUInt64BE=K((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Y(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),u.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return t>>>=0,e||O(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||O(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){t>>>=0,e||O(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readBigInt64LE=K((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Y(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),u.prototype.readBigInt64BE=K((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Y(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),u.prototype.readFloatLE=function(t,e){return t>>>=0,e||O(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||O(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||O(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||O(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){x(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){x(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigUInt64LE=K((function(t,e=0){return C(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeBigUInt64BE=K((function(t,e=0){return _(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);x(this,t,e,r,n-1,-n)}let o=0,i=1,s=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/i|0)-s&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);x(this,t,e,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/i|0)-s&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigInt64LE=K((function(t,e=0){return C(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeBigInt64BE=K((function(t,e=0){return _(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeFloatLE=function(t,e,r){return P(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return P(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(!u.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{const i=u.isBuffer(t)?t:u.from(t,n),s=i.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%s]}return this};const F={};function j(t,e,r){F[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function D(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function z(t,e,r,n,o,i){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new F.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,r){V(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||Y(e,t.length-(r+1))}(n,o,i)}function V(t,e){if("number"!=typeof t)throw new F.ERR_INVALID_ARG_TYPE(e,"number",t)}function Y(t,e,r){if(Math.floor(t)!==t)throw V(t,r),new F.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new F.ERR_BUFFER_OUT_OF_BOUNDS;throw new F.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}j("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),j("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),j("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=D(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=D(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n}),RangeError);const G=/[^+/0-9A-Za-z-_]/g;function W(t,e){let r;e=e||1/0;const n=t.length;let o=null;const i=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function q(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(G,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function X(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function H(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function J(t){return t!=t}const Z=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();function K(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},251:(t,e)=>{e.read=function(t,e,r,n,o){var i,s,f=8*o-n-1,u=(1<<f)-1,h=u>>1,c=-7,a=r?o-1:0,l=r?-1:1,p=t[e+a];for(a+=l,i=p&(1<<-c)-1,p>>=-c,c+=f;c>0;i=256*i+t[e+a],a+=l,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+a],a+=l,c-=8);if(0===i)i=1-h;else{if(i===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),i-=h}return(p?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,f,u,h=8*i-o-1,c=(1<<h)-1,a=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+a>=1?l/u:l*Math.pow(2,1-a))*u>=2&&(s++,u/=2),s+a>=c?(f=0,s=c):s+a>=1?(f=(e*u-1)*Math.pow(2,o),s+=a):(f=e*Math.pow(2,a-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&f,p+=g,f/=256,o-=8);for(s=s<<o|f,h+=o;h>0;t[r+p]=255&s,p+=g,s/=256,h-=8);t[r+p-g]|=128*y}},139:(t,e,r)=>{const n=e,{Buffer:o}=r(287),i=r(680);n.toBuffer=function(t,e,r){let n;if(r=~~r,this.isV4Format(t))n=e||o.alloc(r+4),t.split(/\./g).map((t=>{n[r++]=255&parseInt(t,10)}));else if(this.isV6Format(t)){const i=t.split(":",8);let s;for(s=0;s<i.length;s++){let t;this.isV4Format(i[s])&&(t=this.toBuffer(i[s]),i[s]=t.slice(0,2).toString("hex")),t&&++s<8&&i.splice(s,0,t.slice(2,4).toString("hex"))}if(""===i[0])for(;i.length<8;)i.unshift("0");else if(""===i[i.length-1])for(;i.length<8;)i.push("0");else if(i.length<8){for(s=0;s<i.length&&""!==i[s];s++);const t=[s,1];for(s=9-i.length;s>0;s--)t.push("0");i.splice(...t)}for(n=e||o.alloc(r+16),s=0;s<i.length;s++){const t=parseInt(i[s],16);n[r++]=t>>8&255,n[r++]=255&t}}if(!n)throw Error(`Invalid ip address: ${t}`);return n},n.toString=function(t,e,r){e=~~e;let n=[];if(4===(r=r||t.length-e)){for(let o=0;o<r;o++)n.push(t[e+o]);n=n.join(".")}else if(16===r){for(let o=0;o<r;o+=2)n.push(t.readUInt16BE(e+o).toString(16));n=n.join(":"),n=n.replace(/(^|:)0(:0)*:0(:|$)/,"$1::$3"),n=n.replace(/:{3,4}/,"::")}return n};const s=/^(\d{1,3}\.){3,3}\d{1,3}$/,f=/^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;function u(t){return 4===t?"ipv4":6===t?"ipv6":t?t.toLowerCase():"ipv4"}n.isV4Format=function(t){return s.test(t)},n.isV6Format=function(t){return f.test(t)},n.fromPrefixLen=function(t,e){let r=4;"ipv6"===(e=t>32?"ipv6":u(e))&&(r=16);const i=o.alloc(r);for(let e=0,r=i.length;e<r;++e){let r=8;t<8&&(r=t),t-=r,i[e]=255&~(255>>r)}return n.toString(i)},n.mask=function(t,e){t=n.toBuffer(t),e=n.toBuffer(e);const r=o.alloc(Math.max(t.length,e.length));let i;if(t.length===e.length)for(i=0;i<t.length;i++)r[i]=t[i]&e[i];else if(4===e.length)for(i=0;i<e.length;i++)r[i]=t[t.length-4+i]&e[i];else{for(i=0;i<r.length-6;i++)r[i]=0;for(r[10]=255,r[11]=255,i=0;i<t.length;i++)r[i+12]=t[i]&e[i+12];i+=12}for(;i<r.length;i++)r[i]=0;return n.toString(r)},n.cidr=function(t){const e=t.split("/"),r=e[0];if(2!==e.length)throw new Error(`invalid CIDR subnet: ${r}`);const o=n.fromPrefixLen(parseInt(e[1],10));return n.mask(r,o)},n.subnet=function(t,e){const r=n.toLong(n.mask(t,e)),o=n.toBuffer(e);let i=0;for(let t=0;t<o.length;t++)if(255===o[t])i+=8;else{let e=255&o[t];for(;e;)e=e<<1&255,i++}const s=2**(32-i);return{networkAddress:n.fromLong(r),firstAddress:s<=2?n.fromLong(r):n.fromLong(r+1),lastAddress:s<=2?n.fromLong(r+s-1):n.fromLong(r+s-2),broadcastAddress:n.fromLong(r+s-1),subnetMask:e,subnetMaskLength:i,numHosts:s<=2?s:s-2,length:s,contains:t=>r===n.toLong(n.mask(t,e))}},n.cidrSubnet=function(t){const e=t.split("/"),r=e[0];if(2!==e.length)throw new Error(`invalid CIDR subnet: ${r}`);const o=n.fromPrefixLen(parseInt(e[1],10));return n.subnet(r,o)},n.not=function(t){const e=n.toBuffer(t);for(let t=0;t<e.length;t++)e[t]=255^e[t];return n.toString(e)},n.or=function(t,e){if(t=n.toBuffer(t),e=n.toBuffer(e),t.length===e.length){for(let r=0;r<t.length;++r)t[r]|=e[r];return n.toString(t)}let r=t,o=e;e.length>t.length&&(r=e,o=t);const i=r.length-o.length;for(let t=i;t<r.length;++t)r[t]|=o[t-i];return n.toString(r)},n.isEqual=function(t,e){if(t=n.toBuffer(t),e=n.toBuffer(e),t.length===e.length){for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}if(4===e.length){const r=e;e=t,t=r}for(let t=0;t<10;t++)if(0!==e[t])return!1;const r=e.readUInt16BE(10);if(0!==r&&65535!==r)return!1;for(let r=0;r<4;r++)if(t[r]!==e[r+12])return!1;return!0},n.isPrivate=function(t){if(n.isLoopback(t))return!0;if(!n.isV6Format(t)){const e=n.normalizeToLong(t);if(e<0)throw new Error("invalid ipv4 address");t=n.fromLong(e)}return/^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^f[cd][0-9a-f]{2}:/i.test(t)||/^fe80:/i.test(t)||/^::1$/.test(t)||/^::$/.test(t)},n.isPublic=function(t){return!n.isPrivate(t)},n.isLoopback=function(t){return/\./.test(t)||/:/.test(t)||(t=n.fromLong(Number(t))),/^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(t)||/^0177\./.test(t)||/^0x7f\./i.test(t)||/^fe80::1$/i.test(t)||/^::1$/.test(t)||/^::$/.test(t)},n.loopback=function(t){if("ipv4"!==(t=u(t))&&"ipv6"!==t)throw new Error("family must be ipv4 or ipv6");return"ipv4"===t?"127.0.0.1":"fe80::1"},n.address=function(t,e){const r=i.networkInterfaces();if(e=u(e),t&&"private"!==t&&"public"!==t){const n=r[t].filter((t=>u(t.family)===e));if(0===n.length)return;return n[0].address}const o=Object.keys(r).map((o=>{const i=r[o].filter((r=>(r.family=u(r.family),r.family===e&&!n.isLoopback(r.address)&&(!t||("public"===t?n.isPrivate(r.address):n.isPublic(r.address))))));return i.length?i[0].address:void 0})).filter(Boolean);return o.length?o[0]:n.loopback(e)},n.toLong=function(t){let e=0;return t.split(".").forEach((t=>{e<<=8,e+=parseInt(t)})),e>>>0},n.fromLong=function(t){return`${t>>>24}.${t>>16&255}.${t>>8&255}.${255&t}`},n.normalizeToLong=function(t){const e=t.split(".").map((t=>t.startsWith("0x")||t.startsWith("0X")?parseInt(t,16):t.startsWith("0")&&"0"!==t&&/^[0-7]+$/.test(t)?parseInt(t,8):/^[1-9]\d*$/.test(t)||"0"===t?parseInt(t,10):NaN));if(e.some(isNaN))return-1;let r=0;switch(e.length){case 1:r=e[0];break;case 2:if(e[0]>255||e[1]>16777215)return-1;r=e[0]<<24|16777215&e[1];break;case 3:if(e[0]>255||e[1]>255||e[2]>65535)return-1;r=e[0]<<24|e[1]<<16|65535&e[2];break;case 4:if(e.some((t=>t>255)))return-1;r=e[0]<<24|e[1]<<16|e[2]<<8|e[3];break;default:return-1}return r>>>0}},680:()=>{}},e={};const r=function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}(139),n="以下为示例路由表:\nIPv4 路由表\n===========================================================================\n活动路由:\n网络目标        网络掩码          网关       接口   跃点数\n          0.0.0.0          0.0.0.0     192.168.11.1    192.168.11.16     25\n    18.140.187.83  255.255.255.255      172.19.83.1    172.19.83.237    100\n      18.180.48.0    255.255.255.0      172.19.83.1    172.19.83.237    100\n     18.180.73.21  255.255.255.255      172.19.83.1    172.19.83.237    100\n     144.202.32.0    255.255.240.0      172.19.83.1    172.19.83.237    100\n     192.168.11.0    255.255.255.0            在链路上     192.168.11.16    281\n   192.168.11.255  255.255.255.255            在链路上     192.168.11.16    281\n        224.0.0.0        240.0.0.0            在链路上         127.0.0.1    331\n  255.255.255.255  255.255.255.255            在链路上         127.0.0.1    331\n===========================================================================\n",o=["0.0.0.0/0","0.0.0.0/8","10.0.0.0/8","100.64.0.0/10","127.0.0.0/8","169.254.0.0/16","172.16.0.0/12","192.0.0.0/24","192.0.2.0/24","192.168.0.0/16","192.88.99.0/24","198.18.0.0/15","198.51.100.0/24","203.0.113.0/24","233.252.0.0/24","224.0.0.0/4","240.0.0.0/4","255.255.255.255/32"];function i(t,e,r=""){if(!Array.isArray(t))throw new Error("convertCIDRListToString: Invalid input cidrAddressList");if(0===t.length)return"";let n=r?r+"\n":"";return n+=t.map(e).join("\n"),n.trim()}function s(t){return i(t,(t=>`${t.networkAddress}/${t.subnetMaskLength}`))}function f(t){return i(t,(t=>`  - ${t.networkAddress}/${t.subnetMaskLength}`),"payload:")}function u(t,e){return i(t,(t=>`${t.networkAddress}/${t.subnetMaskLength}`),e)}document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("input"),e=document.getElementById("output"),i=document.getElementById("config-container"),h=document.getElementById("sstapHeader"),c=document.getElementById("buttonToClash"),a=document.getElementById("buttonToSSTap"),l=document.getElementById("buttonToNetch"),p=document.getElementById("copyButton"),g=document.getElementById("downloadButton");function y(t){i.style.display=t?"block":"none"}function d(t){const e=document.getElementById("notification");e.textContent=t,e.classList.remove("opacity-0"),e.classList.add("opacity-100"),setTimeout((()=>{e.classList.add("opacity-0"),e.classList.remove("opacity-100")}),3e3)}function w(i,s=null){d("正在转换路由表至CIDR~ 转换速度取决于路由表长度");const f=function(t){const e=[];let n=[];return t.split("\n").forEach((t=>{const r=t.trim().split(/\s+/);5==r.length&&e.push(r)})),e.forEach((t=>{try{if(!r.isV4Format(t[0]))return;const e=r.subnet(t[0],t[1]),i=`${e.networkAddress}/${e.subnetMaskLength}`;!r.isPublic(e.networkAddress)||r.isLoopback(e.networkAddress)||r.isPrivate(e.networkAddress)||o.includes(i)||n.push(e)}catch(t){console.error("Error converting IP to CIDR:",t)}})),n=n.filter(((t,e,n)=>!n.some((e=>r.cidrSubnet(e.networkAddress+"/"+e.subnetMaskLength).contains(t.networkAddress)&&e!==t)))),n}(""===t.value.trim()?n:t.value),u=s?i(f,s):i(f);e.textContent=u,d("转换完成！")}t.placeholder=n,i.style.display="none",c.addEventListener("click",(()=>{w(f),y(!1)})),a.addEventListener("click",(()=>{w(u,h.value.trim()),y(!0)})),l.addEventListener("click",(()=>{w(s),y(!1)})),p.addEventListener("click",(()=>{const t=e.textContent.trim();t?navigator.clipboard.writeText(t).then((()=>{d("转换结果已复制到剪贴板！")})).catch((t=>{console.error("复制失败:",t)})):d("转换结果没有内容可供复制！")})),g.addEventListener("click",(()=>{const t=e.textContent.trim();if(t){const e=new Blob([t],{type:"text/plain"}),r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download="output.rules",n.click(),URL.revokeObjectURL(r),d("转换结果文件已下载！")}else d("转换结果没有内容可供下载！")}))}))})();