/**
 * A shared Prettier configuration for the repository.
 *
 * @type {import("prettier").Config}
 * */
export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: "lf",
  proseWrap: "preserve",
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
};
