
describe("Handling DropDowns",()=>{

    it.skip("dropdown with select",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation");


        // select Italy from the dropdown and assert it.
        cy.get("select.custom-select")
        .select('Italy')
        .should('have.value',6)
        .and('contain','Italy');
    })

    it.skip("bootstrap dropdown",()=>{
    
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application");

        cy.get("#select2-billing_country-container").click();
        

        //enter japan in the input bpx and press enter key
        cy.get('.select2-search_field').type('Japan').type('{enter}');

        //assert whether japan is in the main dropdown
        cy.get("#select2-billing_country-container").should('have.text','Japan');

    })

    it.skip("autosuggest dropdown",()=>{

        cy.visit("https://www.wikipedia.org/");

        cy.get('#searchInput').type('California');

        // get all elements and click that contiains california gold rush

        cy.get(".suggestion-title").contains('California Gold Rush').click();

    })

    it("dynamic dropdown",()=>{

        cy.visit("https://www.google.com/");

        cy.wait(3000);

        cy.get("input[name='q']").click().type('cypress automation')
        cy.wait(3000);

        //to capture all the elements we use js 'each'.each($ely,index,$list)to iterate each suggestion

        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{

            if($el.text() == 'cypress automation jobs')
            {
                //wrap value in to the element 
                cy.wrap($el).click();
            }
        })
        cy.get("input[name='q']").should('have.value','cypress automation jobs');




    })


})