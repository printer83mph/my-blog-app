module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
  },
  "extends": [
      "airbnb",
      "airbnb-typescript",
      "airbnb/hooks",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint"
  ],
  "overrides": [
      {
          files: ['*.ts', '*.tsx'],
          parserOptions: {
              project: 'tsconfig.json'
          }
      }
  ],
  "rules": {
      // basic style
      "semi": ["error", "never"],
      "@typescript-eslint/semi": 0,

      // react shenanigans
      "react/function-component-definition": [
          2,
          {
              "namedComponents": "arrow-function"
          }
      ],
      "react/jsx-props-no-spreading": 0,
      "react/require-default-props": "off",

      // redux shenanigans
      "@typescript-eslint/default-param-last": "off"
  },
};
