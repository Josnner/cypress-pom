describe('Speed of typing', ()=> {
    
    // Manejar errores no capturados y evitar que Cypress falle por ellos
     Cypress.on('uncaught:exception', (err, runnable) => {
        // Devuelve false para prevenir que Cypress falle
        if (err.message.includes('setup is not a function')) {
            return false;
        }        
    });
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Slow speed typing', {keystrokeDelay: 250}, ()=>{
        cy.get('#user-name').type('Test demo for typing')
    })

    it('Standar speed typing', ()=>{
        cy.get('#user-name').type('Test demo for typing')
    })
    it('Fastest speed typing', {keystrokeDelay: 0}, ()=>{
        cy.get('#user-name').type('Test demo for typing')
    })

})