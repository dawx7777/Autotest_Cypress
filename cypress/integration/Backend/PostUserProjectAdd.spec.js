describe('Test of Add UserProject module', function(){

    it('POST UserProject Add without auth user',() => {
    
              
        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/UserProject/Add',
            failOnStatusCode: false,
            body: {

                "projectId": 2,
                "userName": "kot@kot.ee"

            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(401);
           
        })
    });

    it('POST UserProject Add with auth user and delete this userProject',() => {
    
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
            url: 'https://localhost:44338/api/UserProject/Add',
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            },
            body: {

                "projectId": 2,
                "userName": "kot@kot.ee"

            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
           
        })

        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/UserProject/Delete',
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            },
            body: {

                "projectId": 2,
                "userName": "kot@kot.ee"

            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
           
        })

    });

});


});