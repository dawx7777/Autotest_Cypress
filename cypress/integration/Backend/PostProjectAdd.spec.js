describe('Test of Add Project module', function(){

    it('POST Project Add without auth user',() => {
    
              
        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/Project/Add',
            failOnStatusCode: false,
            body: {

                "name": "Projekt 1",
                "author": "daw@daw.daw"

            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(401);
           
        })
    });

    it('POST Project Add with auth user',() => {
    
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
            url: 'https://localhost:44338/api/Project/Add',
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            },
            body: {

                "name": "Projekt 1",
                "author": "daw@daw.daw"

            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
           
        })
    });

});


});