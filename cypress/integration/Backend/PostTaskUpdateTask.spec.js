describe('Test of Update Task module', function(){

    it('POST Task Update without auth user',() => {
    
              
        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/Task/Update',
            failOnStatusCode: false,
            body: {

                "id": 1,
                "name": "saaa",
                "description": "Opisówka ",
                "assignedUser": "kot@kot.pk",
                "priorityId": 1
            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(401);
           
        })
    });

    it('POST Task Update with auth add Task, update and get task info',() => {
    
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
            url: 'https://localhost:44338/api/Task/Add',
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            },
            body: {

                "name": "Testowa",
                "author": "daw@daw.daw",
                "assignedUser": "daw@daw.daw",
                "statusId": 1,
                "priorityId": 1,
                "projectId": 2

            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
            let taskID=response.body;
            cy.log(taskID);
        

        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/Task/Update',
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            },
            body: {
                "id": taskID,
                "name": "Testowa na potrzeby testu",
                "assignedUser": "daw@daw.daw",
                "description": "Testowy opis",
                "priorityId": 2
            
            }
        

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
           
        })

        cy.request({

            method: 'GET',
            url: 'https://localhost:44338/api/Task/Get?id=' +taskID,
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            },
         

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
            expect(response.body.name).to.include('Testowa na potrzeby testu');
            expect(response.body.description).to.include('Testowy opis');
            
        })
    })
    });

});


});