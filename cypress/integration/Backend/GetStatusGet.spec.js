describe('Test of Get Status module', function(){

    it('Get Status without auth user',() => {
    
              
        cy.request({

            method: 'GET',
            url: 'https://localhost:44338/api/Status/Get?id=1',
            failOnStatusCode: false,
           

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(401);
           
        })
    });

    it('Get Status with auth ',() => {
        
 

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

            method: 'GET',
            url: 'https://localhost:44338/api/Status/Get?id=1',
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            },
         

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
            expect(response.body.name).to.include('TO DO')
           
        })
    });

});

});