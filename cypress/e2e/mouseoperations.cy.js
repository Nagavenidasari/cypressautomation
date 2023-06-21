import '@4tw/cypress-drag-drop'
import 'cypress-iframe'


describe("Mouse Operations",()=>{

   /* beforeEach('Launch',()=>{

        cy.visit('https://demo.opencart.com/');

    })*/
    
    // trigger is used for mouse events.
    it('mouseOver',()=>{

        cy.visit('https://demo.opencart.com/');
        cy.get('head > title').should('have.text','Your Store');
        cy.get('#logo > a > img').should('be.visible');

        cy.get('#narbar-menu > ul > li:nth-child(1) > a').should('be.visible').and('have.text','Desktops');
        cy.get('#narbar-menu > ul > li:nth-child(1) > a').trigger('mouseover').click();
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul>li').each((e)=>{
            cy.get(e).should('be.visible');
            cy.log(e.text());
        })

    })

    it('rightClick',()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        //cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('body > ul > li').should('be.visible');

    })
    
  /* it.only('doubleClick()',()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        cy.frameLoaded('#iframeResult'); //cypress frame plugin should be installed.
        //cy.get('body > button').trigger('dblclick');
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.text','Hello World!');

    })*/

    //install drag and drop pluginnpm install --save-dev @4tw/cypress-drag-drop
    // and add require('@4tw/cypress-drag-drop') in command.js or import

    it("drag and drop using plugin",()=>{

        const dataTransfer = new DataTransfer();

        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box1').should('be.visible');
        cy.get('#box101').should('be.visible');
        cy.get('#box1').drag('#box101',{force:true}).then((success)=>{
            assert.isTrue(success);
        });
       // cy.get('#box1').trigger('dragstart',{dataTransfer});
       // cy.get('#box101').trigger("drop",{dataTransfer});



    })

    it("Scrolling Page",()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-europe.html');

        cy.get('#content > div.container > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(14) ').scrollIntoView({duration:2000}).should('be.visible').and('have.text','Norway');
        cy.get('#content > div.container > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2)').scrollIntoView({duration:2000}).should('be.visible').and('have.text','Latvia');

        cy.get('#footer').scrollIntoView({duration:2000});

    })




})