module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
      "no-console": 0,
      "no-use-before-define": 0,
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import"
  ]
};