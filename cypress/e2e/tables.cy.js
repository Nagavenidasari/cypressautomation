

describe('Handling Tables',(()=>{

// beforeEach hook before every it block
    beforeEach('Login',()=>{

        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('button[type="submit"]').click()
        cy.get('.btn-close').click(); // closing the alert
        cy.get('#menu-customer>a').click(); // main customer menu
        cy.get('#menu-customer>ul>li:first-child').click();  //sub customer menu

    })


    it('Check Number of Rows and Columns',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10'); // number of rows
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7'); // number of columns

    })
    it('Checkcell data from specific row and Column',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains("xvrt@test.com");  //5throw,3rdcolumn


        
    })

    it('Read all the rows and Columns data in the firstpage ',()=>{
        //from all the rows
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each( ($row,index,$rows)=>{
            //for each row
            cy.wrap($row).within(()=>{
                // from all the columns
                cy.get("td").each(($col,index,$cols)=>{
                    //get data from each column
                    cy.log($col.text());
                })
            })
        })  //$row=currentrow,index=index,$rows=totalrows
        
    })
    it.only('Pagination',()=>{
        
        let totalPages;
        //find the total number of the pages.extract the total pages(Showing 1 to 10 of 13464 (1347 Pages)
        //we use substring to capture the value -1347 // e is the element
        cy.get('.col-sm-6.text-end').then((e)=>{
            let mytext = e.text(); //from this entire text ,capture only 1347.use substring method
            totalPages= mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
            cy.log("Total number of pages ==========> "+totalPages);
        })

        let pages=5; // reading data from 5 pages

        for(let p=1;p<=pages;p++)
        {
            if(pages>1)
            {
                cy.log("Active Page is ===> "+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);
                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each( ($row,index,$rows)=>{
                    //for each row
                    cy.wrap($row).within(()=>{
                        // from all the columns get email.
                        cy.get("td:nth-child(3)").each(($col,index,$cols)=>{
                            //get data from each column
                            cy.log($col.text());
                        })
                    })
                })  //$row=currentrow,index=index,$rows=totalrows
                

            }
            


        }





    })

}))