
describe("Check UI elements",function(){
    it("Checking Radio Buttons",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        //check the visiblity status of radio buttons
        
        cy.get("input#female").should('be.visible');
        cy.get("input#male").should('be.visible');

        // selecting radio buttons

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')


    })

    it("Checking Check boxes",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        //Visibility of the element
        cy.get("input#monday").should('be.visible');

        //Selecting single check box - monday
        cy.get("input#monday").check().should('be.checked');

        //Unselecting checkbox
        cy.get("input#monday").uncheck().should('not.be.checked');

        cy.get("input#tuesday").should('be.visible');

        //Selecting single check box - tuesday
        cy.get("input#tuesday").check().should('be.checked');

        //Unselecting checkbox
        cy.get("input#tuesday").uncheck().should('not.be.checked');

    })

    it("Slecting all the checkboxes",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation");


        //Visibility of all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").should('be.visible');

        //Checking all the checkboxes.
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');

        //uncheck all the check boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');



    })


    //select first and last checkbox

    it("Selecting first and last  or middle check boxes",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation");


        //Visibility of all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").should('be.visible');

        //Checking the first and last checkbox.
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');

        //this will check 4th checkbox.
        cy.get("input.form-check-input[type='checkbox']").eq(3).check().should('be.checked');

       


    })
})