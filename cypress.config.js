const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/**/*.cy.js',        // Archivos en cypress/e2e
      'cypress/integration/**/*.js',   // Archivos en cypress/integration
    ],
  },
  chromeWebSecurity: false,           // Desactiva chromeWebSecurity
  experimentalStudio: true,           // Activa experimentalStudio
  $schema: "https://on.cypress.io/cypress.schema.json" // Esquema de referencia
});
