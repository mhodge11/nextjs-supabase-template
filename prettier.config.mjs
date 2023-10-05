/** @type {import('prettier').Config & import('@ianvs/prettier-plugin-sort-imports').PluginConfig & import('prettier-plugin-tailwindcss').PluginOptions} */
const prettierConfig = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default prettierConfig;
