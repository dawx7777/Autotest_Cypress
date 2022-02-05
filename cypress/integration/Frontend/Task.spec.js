
describe('Test Task in Kanban on the Page',()=>{

it('Auth User go to Task Page like Admin',()=>{

 
    
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
    cy.get('.btn').should('contain','Edytuj').eq(2).click();
    cy.get('input[type=text]')
    .invoke('attr', 'placeholder')
    .should('contain', 'Nazwa kolumny')
    

    cy.get('input[type=text]').first()
    .type('TO DO')
    cy.get('button[type=button]').should('contain','Dodaj kolumnę').first().click();
    cy.get('input[type=text]').first().clear()
    .type('IN PROGRESS')
    cy.get('button[type=button]').should('contain','Dodaj kolumnę').first().click();
    cy.get('input[type=text]').first().clear()
    .type('START')
    cy.get('button[type=button]').should('contain','Dodaj kolumnę').first().click();
    cy.get('input[type=text]').first().clear()
    .type('END')
    cy.get('button[type=button]').should('contain','Dodaj kolumnę').first().click();
    cy.get('.header-container__button:nth-child(2)')
    .should('contain','Projekty').click();
    cy.get('.btn').should('contain','Pokaż').eq(3).click();

    cy.get('input[type=text]')
    .invoke('attr', 'placeholder')
    .should('contain', 'Wpisz nazwę task')
    
    cy.get('input[type=text]')
    .type('Task Tekst Cypress')
    cy.get('.submit').should('contain','Dodaj task').click();

 
   
//Edit Task
cy.get('.goToEdit').first().click();
cy.wait(5000);
cy.get('.input').eq(0).clear();
cy.get('.input').eq(0).type('Cypress Tesy');
cy.get('.input').eq(1).clear();
cy.get('.input').eq(1).type('Testowy opis zadania Cypress');
cy.get('.input').eq(2).clear();
cy.get('.input').eq(2).type('zaw@zaw.zaw');
cy.get('select').select('3');
cy.get('.btn1').click();

cy.get('.header-container__button:nth-child(2)')
.should('contain','Projekty').click();
cy.get('.btn').should('contain','Pokaż').eq(3).click();
cy.get('.goToEdit').first().click();
cy.wait(5000);
cy.get('.input').eq(0).should('have.value','Cypress Tesy');
cy.get('.input').eq(1).should('have.value','Testowy opis zadania Cypress');
cy.get('.input').eq(2).should('have.value','zaw@zaw.zaw');
cy.get('select').should('contain','HIGH');
cy.wait(5000);
cy.get('.btn1').click();

//Drag&Drop

const dataTransfer = new DataTransfer;
cy.get('.task').first().trigger('dragstart', { dataTransfer });
cy.get('.columns').eq(1).trigger('drop',{dataTransfer});
cy.get('.task').first()
.trigger('dragend'); 

//Usuwanie taska
cy.get('.click').first().click();
cy.get('.btn_usun').first().should('contain', 'Usuń task').click();


});

    });

