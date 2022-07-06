module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/multi-word-component-names": "off",
  },
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: [
        "plugin:vue/vue3-essential",
        "@vue/prettier",
        "plugin:@typescript-eslint/eslint-recommended", // removes redundant warnings between TS & ESLint
        "plugin:@typescript-eslint/recommended", // rules specific to typescript, e.g., writing interfaces
      ],
    },
  ],
};
