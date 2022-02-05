describe('Test of Delete Project module', function(){

    it('POST Project Delete without auth user',() => {
    
              
        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/Project/Delete',
            failOnStatusCode: false,
         

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(401);
           
        })
    });

    it('Delete Project with auth ',() => {
        
 

        cy.request({
            method:'POST',
            url:'https://localhost:44338/api/Login/Login',
            failOnStatusCode: false,
                body: {
    
                    "email": "daw@daw.daw",
                    "password":"Admin123#",
                     "type":"Admin"
    
                }
        })
        .then((response)=>{

           let bodys=response.body.token;
           cy.log(bodys);
           
           
        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/Project/Delete?id=98',
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            },
         

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
            
           
        })
    });

});


it('Delete Project with auth where id dont exist',() => {
        
 

    cy.request({
        method:'POST',
        url:'https://localhost:44338/api/Login/Login',
        failOnStatusCode: false,
            body: {

                "email": "daw@daw.daw",
                "password":"Admin123#",
                 "type":"Admin"

            }
    })
    .then((response)=>{

       let bodys=response.body.token;
       cy.log(bodys);
       
       
    cy.request({

        method: 'POST',
        url: 'https://localhost:44338/api/Project/Delete?id=1000',
        failOnStatusCode: false,
        headers:{
            'Authorization':'Bearer' +' '+ bodys
        },
     

    }).then((response)=>{
        cy.log(JSON.stringify(response))
        expect(response.status).to.equal(404);
        
       
    })
});

});
});