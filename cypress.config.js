const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, //tests do not run by itself when code is changed
    pageLoadTimeout:10000,
    //defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
