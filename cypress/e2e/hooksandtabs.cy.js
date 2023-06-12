//before - before starting all the tests (only once)
//beforeEach - multiple times before each it block
//after - after all the tests (only once)
//afterEach- multiple times after each it block
// These hooks are coming from Mocha framework
//Tags : it.skip,it.only,

describe('Test Suite',()=>{

    before(()=>{
        cy.log("@@@  launch app @@@");
    })

    after(()=>{

        cy.log("@@@ Excited the app  @@@");
    })

    beforeEach(()=>{
        cy.log("%%%%% Login %%%%%");
    })

    afterEach(()=>{
        cy.log("%%%% logout %%%%");
    })



    it('search',()=>{

        cy.log("**** searching ******");


    })

    it('advanced search',()=>{

        cy.log("**** advanced searching ******");


    })

    it('listing products',()=>{

        cy.log("**** listing all the products ******");


    })
})