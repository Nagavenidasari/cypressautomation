
describe('xpath selectors',function(){
    it('findnumberofproducts',function(){

        cy.visit('http://automationpractice.pl/index.php');

        cy.xpath("//*[@class='blockbestsellers']").click();
        cy.xpath("//*[@id='blockbestsellers']/li").should('have.length',6);



    })

    it('chained xpath',function(){

        cy.visit('http://automationpractice.pl/index.php');

        cy.xpath("//*[@class='blockbestsellers']").click();
        cy.xpath("//*[@id='blockbestsellers']").xpath("./li").should('have.length',6);



    })

})