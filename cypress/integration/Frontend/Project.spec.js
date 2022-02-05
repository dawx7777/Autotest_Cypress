
describe('Test Project(ADD,EDIT,DELETE) on the Page',()=>{

it('Auth  go to Project Page like Admin',()=>{

    cy.visit("http://localhost:3000")
    cy.get('input[name=email]').type('daw@daw.daw')
    cy.get('input[name=password]').type('Admin123#')
    cy.get('input[type=submit]').click();

    cy.url()
    .should('contain','http://localhost:3000/admin-panel')
    
    
    cy.get('.header-container__button:nth-child(2)')
    .should('contain','Projekty').click();
    
    cy.get('input[type=text]')
    .invoke('attr', 'placeholder')
    .should('contain', 'Wpisz nazwę projektu')
    
    cy.get('input[type=text]')
    .type('Projekt Tekst Cypress')
    cy.get('button[type=button]').should('contain','Dodaj projekt').click();

    cy.get('.alert').should('contain', 'Poprawnie dodałes projekt');

    cy.get('.item-title').last().should('contain','Projekt Tekst Cypress')
    cy.get('.btn').should('contain','Edytuj').eq(2).click();

    cy.get('input[type=text]').last()
    .invoke('attr', 'placeholder')
    .should('contain', 'Wpisz osobę')
    
    cy.get('input[type=text]').last()
    .type('test@test.test');
    cy.get('button[type=button]').should('contain','Nadaj dostęp').eq(1).click();
    cy.get('.alert').should('contain', 'Poprawnie dodałes dostęp');

    cy.get('button[type=button]').should('contain','Usuń').last().click();

    cy.get('.header-container__button:nth-child(2)')
    .should('contain','Projekty').click();

    cy.get('.btn').should('contain','Usuń').last().click();
    cy.get('.alert').should('contain', 'Poprawnie usunięto projekt');
});



    });

