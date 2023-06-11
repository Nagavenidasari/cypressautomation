import 'cypress-iframe';


describe("Handling Frames",()=>{

    it('Frames approach 1',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        //get the iframe
        const iframe=cy.get("#mce_0_ifr")
                .its('0.contentDocument.body')
                .should('be.visible').then(cy.wrap);
        
            iframe.clear().type("Welcome");

            //select the whole text "Welcome"
            iframe.type("{selectall}");
            cy.wait(3000);

              //click on B(bold) button
             cy.get("[aria-label='Bold']").click();
            

    })


    //Another approach by using custom command through command.js
    it('Frames approach 2',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.getIframe('#mce_0_ifr');

        iframe.clear().type("Welcome to my frame");

            //select the whole text "Welcome"
            iframe.type("{selectall}");
            cy.wait(3000);

              //click on B(bold) button
             cy.get("[aria-label='Bold']").click();          

    })

    //By using cyoress-iframe plugin
    //install npm install -D cypress-iframe
    //cypress/support/comman.js add require('cypress-iframe')
    // or import 'cypress-iframe' in the script
    it('Frames approach 3',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr'); // this will load the frame
        
        cy.iframe('#mce_0_ifr').clear().type("Approach 3 {selectall}");

       //cy.type("{selectall}");
        cy.get("[aria-label='Bold']").click();     
        

    })
})