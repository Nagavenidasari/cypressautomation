
describe('CSSLocators',function()
{
    it('cssselectors',function(){

        cy.visit('http://automationpractice.pl/index.php');

        //search for tshirts
        cy.get("#search_query_top").type("T-Shirts") //id
        cy.get("[name='submit_search']").click(); //attribute
        cy.get(".lighter").contains("T-Shirts") //Assertion ,css = class


    })

})