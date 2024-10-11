describe('Assertions', () => {
    beforeEach(function () {
        cy.visit('https://letcode.in/radio');
    });
    it('Check radio buton', () => {
        cy.get('.radio #yes').should('not.be.checked');
        cy.get('.radio #yes').click()
    })
    it('Check Disable', ()=>{
        cy.get('#maybe').should('be.disabled')
    })
    it('BDD ASERTIONS', ()=>{
        cy.log('Class & Length')
        cy.get('label.radio input[type="radio"]').should($inputs =>{
            expect($inputs).to.have.lengthOf(11)
            expect($inputs[10]).to.be.disabled
        })
        cy.log('Text Check')
        cy.get('label.radio input[type="radio"]').eq(9).click({force:true})

        cy.get()
    })
});
