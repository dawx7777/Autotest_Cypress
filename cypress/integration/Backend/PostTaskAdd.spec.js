describe('Test of Add Task module', function(){

    it('POST Task Add without auth user',() => {
    
              
        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/Task/Add',
            failOnStatusCode: false,
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
            expect(response.status).to.equal(401);
           
        })
    });

    it('POST Task Add with auth user and delete this userProject',() => {
    
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
            url: 'https://localhost:44338/api/Task/Delete?id='+taskID,
            failOnStatusCode: false,
            headers:{
                'Authorization':'Bearer' +' '+ bodys
            }
        

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200);
           
        })
    })
    });

});


});