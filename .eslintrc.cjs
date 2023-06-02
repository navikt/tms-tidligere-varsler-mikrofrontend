module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  ignorePatterns: [".eslintrc.js", "**/dist/*.js", "vite.config.js", "/server/server.js"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    //TODO: enable rules
    "react/prop-types": "off",

    //ref https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
