// 1,Javascript Alert : It will have some text and 'OK' button
// 2,Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel'
// 3.Javascript Prompt Alert: It will have some text with textbox for user input along with 'OK'
// 4. Authentication Alert.


describe("Handling alerts",()=>{

    it("JS Alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        //cypress automatically clicks ok on the alert window.
        cy.get("button[onclick='jsAlert()']").click();

        //trigger an event and capture the text in the alert window
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');

        })

        //asser the result text.
        cy.get("#result")
            .should('have.text','You successfully clicked an alert')
            .and('be.visible');



    })

    it("JS Confirm-Ok",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get("button[onclick='jsConfirm()']").click();

        //trigger an event and capture the text in the alert window
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })

        cy.get("#result")
            .should('have.text','You clicked: Ok')
            .and('be.visible');



    })

    it("JS confirm-Cancel",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get("button[onclick='jsConfirm()']").click();

        //click on cancel on the confirm
        cy.on('window:confirm',()=> false);

        cy.get("#result")
            .should('have.text','You clicked: Cancel')
            .and('be.visible');

    })

    it("JS Prompt-ok",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

       

        //enter text in the prompt box and this should
        // be done before opening the inputbox.
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('testing');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get("#result")
            .should('have.text','You entered: testing')
            .and('be.visible');


    })

    it("JS Prompt-cancel",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        //enter text in the prompt box and this should
        // be done before opening the inputbox.
        cy.window().then((win)=>{
            cy.stub(win,'prompt').callsFake(()=>null);
            //click on cancel on the confirm
           
        })
        cy.get("button[onclick='jsPrompt()']").click();

        

        cy.get("#result")
            .should('have.text','You entered: null')
            .and('be.visible');


    })

    it("Authentication Alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/basic_auth",
                    {auth:{username:"admin",password:"admin"}});
        
        //another way
        //cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

        cy.get("div[class='example'] p").should('have.contain','Congratulations! You must have the proper credentials.');


    })
})