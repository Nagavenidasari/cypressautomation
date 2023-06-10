

describe('Suite1',function()
{
    it('Verify Homepage Title-Positive test',function()
    {
        //launch the application
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.title().should('eq','OrangeHRM')

    })

    it('Verify Homepage Title-Negative test',function()
    {
        //launch the application
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.title().should('eq','OrangeHRM1234')

    })

    
})