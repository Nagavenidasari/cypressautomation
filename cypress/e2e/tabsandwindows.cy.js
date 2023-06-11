

describe("Tabs and windows handling",()=>{

    it("Tabs Approach1",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows");

        //remove the target attribute from developer tools as cypress can't 
        //handle multiple tabs.so remove target and the window will open in the same tab.
        cy.get(".example a").invoke('removeAttr','target').click();

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');

        cy.get("head > title").should('contain','New Window');
        cy.wait(5000);
        //go back to parent tab
        cy.go('back');


    })

    it("Tabs Approach2",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows");

        //get the href attribute through js query
        cy.get(".example a").then((e)=>{

            const url = e.prop('href');
            cy.visit(url);
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');

        cy.get("head > title").should('contain','New Window');
        cy.wait(5000);
        //go back to parent tab
        cy.go('back');
        
    })


})