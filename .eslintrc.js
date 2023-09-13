"use strict"

// eslint-disable-next-line no-undef
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    BigInt: false,
    Packages: false
  },
  rules: {
    curly: "off",
    eqeqeq: ["error", "always", {null: "ignore"}],
    indent: [
      "error",
      2,
      {
        SwitchCase: 0,
        VariableDeclarator: 2,
        CallExpression: {arguments: "off"}
      }
    ],
    "new-parens": "off",
    "no-case-declarations": "off",
    "no-cond-assign": "off",
    "no-console": ["error", {allow: ["warn", "error"]}],
    "no-fallthrough": "off",
    "no-labels": "off",
    "no-mixed-operators": "off",
    "no-return-assign": "off",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-curly-spacing": ["error", "never"],
    "object-shorthand": "off",
    "one-var": "off",
    "prefer-const": "off",
    quotes: ["error", "double"],
    "semi-spacing": "off",
    "space-before-function-paren": ["error", "never"]
  }
}
