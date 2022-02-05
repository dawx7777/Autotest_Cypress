
describe('Test of Register module', function(){

let randomText=""
let testMail=""

    it('POST Register User with success',() => {

            var litery="ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz1234567890"
            for(var i=0; i < 10; i++)
            randomText+=litery.charAt(Math.floor(Math.random() * litery.length));
            testMail=  randomText + '@test.test'


        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/Register/Register',
            body: {

                "email": testMail,
                "password":"Admin123#",
                 "type":"User"

            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body).to.include('User created')
        })
    });
    it('POST Register Admin with success',() => {

        var litery="ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz1234567890"
        for(var i=0; i < 10; i++)
        randomText+=litery.charAt(Math.floor(Math.random() * litery.length));
        testMail=  randomText + '@admin.test'

        cy.request({

            method: 'POST',
            url: 'https://localhost:44338/api/Register/Register',
            body: {

                "email":testMail,
                "password":"Admin123#",
                 "type":"Admin"

            }

        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body).to.include('User created')
        })
    });

    it('POST Register User where user is existing',() => {

       


    cy.request({

        method: 'POST',
        url: 'https://localhost:44338/api/Register/Register',
        failOnStatusCode: false,
        body: {

            "email": "daw@daw.daw",
            "password":"Admin123#",
             "type":"User"

        }

    }).then((response)=>{
        cy.log(JSON.stringify(response))
        expect(response.status).to.equal(400)
        expect(response.body).has.property('error','User already exist')
    })
});

it('POST Register User with valid email',() => {

       

    cy.request({

        method: 'POST',
        url: 'https://localhost:44338/api/Register/Register',
        failOnStatusCode: false,
        body: {

            "email": "",
            "password":"Admin123#",
             "type":"User"

        }

    }).then((response)=>{
        cy.log(JSON.stringify(response))
        expect(response.status).to.equal(400)
        expect(response.body).has.property('error')
    })
});

it('POST Register User with none password',() => {

    var litery="ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz1234567890"
    for(var i=0; i < 10; i++)
    randomText+=litery.charAt(Math.floor(Math.random() * litery.length));
    testMail=  randomText + '@test.test'


    cy.request({

        method: 'POST',
        url: 'https://localhost:44338/api/Register/Register',
        failOnStatusCode: false,
        body: {

            "email": testMail,
            "password":"",
             "type":"User"

        }

    }).then((response)=>{
       
        cy.log(JSON.stringify(response))
        expect(response.status).to.equal(400)
        expect(response.body).has.property('error');
        const {error}=response.body;
        expect(error.length).to.eq(6);
    })
});

it('POST Register User with valid password',() => {

    var litery="ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz1234567890"
    for(var i=0; i < 10; i++)
    randomText+=litery.charAt(Math.floor(Math.random() * litery.length));
    testMail=  randomText + '@test.test' 


    cy.request({

        method: 'POST',
        url: 'https://localhost:44338/api/Register/Register',
        failOnStatusCode: false,
        body: {

            "email": testMail,
            "password":"12345678",
             "type":"User"

        }

    }).then((response)=>{
       
        cy.log(JSON.stringify(response))
        expect(response.status).to.equal(400)
        expect(response.body).has.property('error');
        const {error}=response.body;
        expect(error.length).to.eq(3);
    })
});
});