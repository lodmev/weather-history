/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'all',
  endOfLine: 'lf',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
