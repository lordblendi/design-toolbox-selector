module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["ember", "prettier"],
  extends: ["eslint:recommended", "plugin:ember/recommended", "prettier"],
  env: {
    browser: true
  },
  rules: {
    //"prettier/prettier": "error" // Disabled for now because of this issue: https://github.com/ember-cli/ember-cli-eslint/issues/235
  },
  overrides: [
    // node files
    {
      files: [
        "ember-cli-build.js",
        "index.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "tests/dummy/config/**/*.js"
      ],
      excludedFiles: [
        "addon/**",
        "addon-test-support/**",
        "app/**",
        "tests/dummy/app/**"
      ],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ["node"],
      rules: Object.assign(
        {},
        require("eslint-plugin-node").configs.recommended.rules,
        {
          // add your custom rules and overrides for node files here
        }
      )
    }
  ]
};