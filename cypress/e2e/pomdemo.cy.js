
import { Loginpage } from "./pages/login_page"

const LoginPage = new Loginpage()

describe('All Login Tests',function(){
    it('Login Test1',function(){

        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Form Authentication').click()
        LoginPage.enterUserName()
        LoginPage.enterPassword()
        LoginPage.clickLogin()
        
        cy.get('#flash')
            .should('contain','You logged into a secure area!')
            .and('be.visible')
        
        expect(true).to.be.true
        
    
    })
    
    
    it.skip('Login Test2',function(){
    
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Form Authentication').click()
        LoginPage.enterUserName()
        LoginPage.enterPassword()
        LoginPage.clickLogin()
        
        cy.get('#flash')
            .should('contain','You logged into a secure area!')
            .and('be.visible')
        
        expect(true).to.be.true
        
    
    })

})
