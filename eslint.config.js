import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser },plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
    },rules: {
      "react/react-in-jsx-scope": "off",
    },   extends: ["js/recommended"],},
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
