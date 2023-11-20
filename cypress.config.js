const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1980,
  chromeWebSecurity: false,
  //retries: 2,
  env:{
    SITE_URL: 'https://techglobal-training.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}',
  },
});