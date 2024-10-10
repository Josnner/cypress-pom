import homeSauceDemoPage from '../../pages/saucedemo/homeSauceDemoPage'
import inventoryDemoPage from '../../pages/saucedemo/inventoryDemoPage'

const test = require('../../fixtures/data-driven/sauceUsers.json')

describe('Home Sauce Demo', () => {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/')

    })
    test.forEach(test => {
        it(test.name, () => {
            homeSauceDemoPage.typeUsername(test.username)
            homeSauceDemoPage.typePasswor(test.password)
            homeSauceDemoPage.clickLogin()

            if(test.name === 'Standar Username'){
                inventoryDemoPage.elements.titleSpan().should('have.text', test.expected)
            }else{
                homeSauceDemoPage.elements.errorMessage().should('have.text', test.expected)

            }
        })
    })
})