import homeSauceDemoPage from "../../pages/saucedemo/homeSauceDemoPage"
import inventoryDemoPage from "../../pages/saucedemo/inventoryDemoPage"

describe('POM Implementacion', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should login to inventory page', ()=>{
        homeSauceDemoPage.typeUsername('standard_user')
        homeSauceDemoPage.typePasswor('secret_sauce')
        homeSauceDemoPage.clickLogin()

        inventoryDemoPage.elements.titleSpan().should('have.text', 'Products')
    })
    it('Should not login to inventory page', ()=>{
        homeSauceDemoPage.typeUsername('locked_out_user')
        homeSauceDemoPage.typePasswor('secret_sauce')
        homeSauceDemoPage.clickLogin()

        homeSauceDemoPage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        cy.url().should('eq','https://www.saucedemo.com/')
    })
})