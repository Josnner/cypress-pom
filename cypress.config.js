const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    specPattern: [
      'cypress/e2e/**/*.cy.js',        // Archivos en cypress/e2e
      'cypress/integration/**/*.js' // Archivos en cypress/integration
    ],
  },
});
