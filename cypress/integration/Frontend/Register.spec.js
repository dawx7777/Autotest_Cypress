

describe('Register on the Page',()=>{

let randomText=""
let testMail=""
let passMail=""
   
        it('Admin Register on the Page with correct datas',()=>{
    
            var litery="ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz1234567890"
            for(var i=0; i < 10; i++)
            randomText+=litery.charAt(Math.floor(Math.random() * litery.length));
            testMail=  randomText + '@test.test'  
        cy.visit("http://localhost:3000")
        cy.get('.header-container__button:nth-child(2)').should('contain','Rejestracja').click();
        cy.url()
        .should('contain','http://localhost:3000')
        cy.get('input[name=email]').type(testMail)
        cy.get('input[type=password]').type('Admin123#')
        cy.get('select').select('Admin')
        cy.get('input[type=submit]').click();
         
            
    });

    it('User Register on the Page with correct datas',()=>{
    
        var litery="ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz1234567890"
        for(var i=0; i < 10; i++)
        randomText+=litery.charAt(Math.floor(Math.random() * litery.length));
        passMail=  randomText + '!!aaaa123'  
    cy.visit("http://localhost:3000")
    cy.get('.header-container__button:nth-child(2)').should('contain','Rejestracja').click();
    cy.url()
    .should('contain','http://localhost:3000')
    cy.get('input[name=email]').type(passMail)
    cy.get('input[type=password]').type('Admin123#')
    cy.get('select').select('User')
    cy.get('input[type=submit]').click();
     
        
});

it('Admin or User Register on the Page without datas',()=>{
    
    
cy.visit("http://localhost:3000")
cy.get('.header-container__button:nth-child(2)').should('contain','Rejestracja').click();
cy.url()
.should('contain','http://localhost:3000')
cy.get('input[type=submit]').click();
cy.get('.login-container__form__error')
.should('contain','Email jest wymagany')
.should('contain','Hasło jest wymagane')

 
    
});
it('Admin or User Register on the Page with only password',()=>{
    
    var litery="ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz1234567890"
        for(var i=0; i < 10; i++)
        randomText+=litery.charAt(Math.floor(Math.random() * litery.length));
        testMail=  randomText + '@test.test'
    cy.visit("http://localhost:3000")
    cy.get('.header-container__button:nth-child(2)').should('contain','Rejestracja').click();
    cy.url()
    .should('contain','http://localhost:3000')
    cy.get('input[name=password]').type(testMail)
    cy.get('input[type=submit]').click();
    cy.get('.login-container__form__error')
    .should('contain','Email jest wymagany')
    .should('contain','Hasło jest wymagane')
    
     
    });


    });