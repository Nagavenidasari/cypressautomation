
describe('Assertions Demo',function(){

    it('Implicit assertions',function(){

        cy.visit("https://opensource-demo.orangehrmlive.com");

        // should , and for implicit assertions
        //cy.url returns the url

        /*cy.url().should('include','orangehrmlive.com')
            .should('eq','https://opensource-demo.orangehrmlive.com')
            .should('contain','orangehrm');
        */
       /* cy.url().should('include','orangehrmlive.com')
            .and('eq','https://opensource-demo.orangehrmlive.com')
            .and('contain','orangehrm');*/
        
        cy.title().should('eq','OrangeHRM');
        cy.get('.orangehrm-login-branding > img')
            .should('be.visible').and('exist')
        //gives all the links and checks number of links
        cy.xpath("//a").should('have.length',5);
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Username']").should('have.value','Admin');
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get(".oxd-button").click();
        cy.get('.oxd-topbar-header-title').should('contain','Dashboard').and('be.visible').and('exist');
        cy.get('.oxd-userdropdown-name').click()
        cy.get("[placeholder='Logout']").click();

    })


    it('explicit waits',function(){

        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.get("input[placeholder='Username']").type("Admin");
        //cy.get("input[placeholder='Username']").should('have.value','Admin');
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get(".oxd-button").click();
        
        //explicit assertions are customized assertions and should write js functions
        let expName="Paul Collins";
        cy.get(".oxd-userdropdown-name").then( (x)=> {
            let actName=x.text()
            //BDD style assertions
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD style assertions
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        })


    })
})