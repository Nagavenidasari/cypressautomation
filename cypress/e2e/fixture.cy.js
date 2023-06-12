

describe("Fixture Suite",()=>{

    //Direct access
    it('FixturesDemo-1',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com");

        //get the data from fixtures stored file orangehrm.json
        cy.fixture('orangehrm.json').then((data)=>{
            cy.get("input[name='username']").type(data.username);
            cy.get("input[name='password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
           .should('have.text',data.expected);

        });



    })



    // Acess through Hook - for multiple it block
    let userdata; //global variable which can be used in multiple it blocks
    before(()=>{
        cy.fixture('orangehrm.json').then((data)=>{
            userdata=data;
        })
    })

    it('Fixture demo-2',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com");

        //get the data from fixtures stored file orangehrm.json
        
        cy.get("input[name='username']").type(userdata.username);
        cy.get("input[name='password']").type(userdata.password);
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
           .should('have.text',userdata.expected);

    })


    //passing multiple sets of data.

    it('Fixture demo3(datadriven)',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com");

        //load the fixture file
        cy.fixture('orangehrm2').then((data)=>{
            
            data.forEach((userdata)=>{
                cy.get("input[name='username']").type(userdata.username);
                cy.get("input[name='password']").type(userdata.password);
                cy.get("button[type='submit']").click();
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text',userdata.expected);

            })
        })


    })
})