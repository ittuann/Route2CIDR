export default {
  semi: true,
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
  overrides: [
    {
      files: "*.html",
      options: {
        printWidth: 150,
      },
    },
  ],
};
