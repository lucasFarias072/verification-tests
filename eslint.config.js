

import js from "@eslint/js";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    plugins: {
      sonarjs
    },
    rules: {
      ...sonarjs.configs.recommended.rules,
      "complexity": ["error", 10],
      "sonarjs/cognitive-complexity": ["error", 15]
    },
    languageOptions: {
      globals: {
        console: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly",
        Buffer: "readonly",
        global: "readonly"
      },
      ecmaVersion: 2022,
      sourceType: "commonjs"
    }
  },
  {
    files: ["**/*.test.js", "**/*.spec.js",],
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly"
      }
    }
  }
];
