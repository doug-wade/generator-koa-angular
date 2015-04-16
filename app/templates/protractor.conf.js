// conf.js
exports.config = {
  seleniumServerJar: "./node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar",
  specs: ["test/e2e/*.scenarios.coffee"],
  baseUrl: "http://localhost:3000",
  capabilities: {
    "browserName": "chrome"
  },
  framework: "mocha"
}
