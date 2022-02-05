describe('Test of GetAll Status module', function(){

    it('Get All Status without auth user',() => {
    
              
        cy.request({

            method: 'GET',
            url: 'https://localhost:44338/api/Status/GetAll',
            failOnStatusCode: false,
           

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(401);
           
        })
    });

    it('Get All Status with auth admin',() => {
    
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
            url: 'https://localhost:44338/api/Status/GetAll',
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


it('Get All Status with auth user',() => {
    

    cy.request({
        method:'POST',
        url:'https://localhost:44338/api/Login/Login',
        failOnStatusCode: false,
            body: {

                "email": "daw1@daw.daw",
                "password":"Admin123#",
                 "type":"User"

            }
    })
    .then((response)=>{

       let bodys=response.body.token;
       cy.log(bodys);
       
       
    cy.request({

        method: 'GET',
        url: 'https://localhost:44338/api/Status/GetAll',
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

});