export class Loginpage{

    username_textbox = '[id=username]'
    password_textbox = '[id=password]'
    login_button = '.radius'

    enterUserName(){
        cy.get(this.username_textbox).type('tomsmith')
    }
    enterPassword(){
        cy.get(this.password_textbox).type('SuperSecretPassword!')

    }
    clickLogin(){
        cy.get(this.login_button).click()

    }

}