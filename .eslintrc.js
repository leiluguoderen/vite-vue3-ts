module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended", // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "import/extensions": [".js",".ts", ".jsx"],
    "import/no-unresolved": [2, { "ignore": ["src"] }],
    commonjs: true, 
    amd: true
  }
};
