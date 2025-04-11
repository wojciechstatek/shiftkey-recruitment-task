const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Viewport setting
    viewportWidth: 1920,
    viewportHeight: 1080,

    
  },
});
