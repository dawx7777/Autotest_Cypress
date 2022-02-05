
describe('Test of Login module', function(){

  
        it('POST Login with success',() => {
    
              
            cy.request({
    
                method: 'POST',
                url: 'https://localhost:44338/api/Login/Login',
                body: {
    
                    "email": "daw@daw.daw",
                    "password":"Admin123#",
                     "type":"User"
    
                }
    
            }).then((response)=>{
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(200)
                expect(response.body).has.property('token');
            })
        });

        it('POST Login with none email',() => {
    
              
            cy.request({
    
                method: 'POST',
                url: 'https://localhost:44338/api/Login/Login',
                failOnStatusCode: false,
                body: {
    
                    "email": "",
                    "password":"Admin123#",
                     "type":"User"
    
                }
    
            }).then((response)=>{
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(401)
                
                
            })
        });

        it('POST Login with none password',() => {
    
              
            cy.request({
    
                method: 'POST',
                url: 'https://localhost:44338/api/Login/Login',
                failOnStatusCode: false,
                body: {
    
                    "email": "daw@daw.daw",
                    "password":"",
                     "type":"User"
    
                }
    
            }).then((response)=>{
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(401)
                
                
            })
        });
        it('POST Login with invalid password',() => {
    
              
            cy.request({
    
                method: 'POST',
                url: 'https://localhost:44338/api/Login/Login',
                failOnStatusCode: false,
                body: {
    
                    "email": "daw@daw.daw",
                    "password":"Admin123#11111",
                     "type":"User"
    
                }
    
            }).then((response)=>{
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(401)
                
                
            })
        });
       
    });