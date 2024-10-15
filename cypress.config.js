const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  // Reporter para Mochawesome
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);  // Plugin para Mochawesome
    },
    specPattern: [
      'cypress/e2e/**/*.cy.js',        // Archivos en cypress/e2e
      'cypress/integration/**/*.js',   // Archivos en cypress/integration
    ],
  },
  chromeWebSecurity: false,           // Desactiva chromeWebSecurity para evitar problemas con CORS
  experimentalStudio: true,           // Activa el modo experimentalStudio
  firefoxWebSecurity: false,           
});
