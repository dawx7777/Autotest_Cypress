

describe('Login on the Page',()=>{

    it('User Login on the Page with correct datas',()=>{

    cy.visit("http://localhost:3000")
    cy.get('input[name=email]').type('daw1@daw.daw')
    cy.get('input[name=password]').type('Admin123#')
    cy.get('input[type=submit]').click();

    cy.url()
    .should('contain','http://localhost:3000/admin-panel')
    
    cy.get('h1')
    .should('contain','Witaj w KanbanMusic')
    cy.get('p')
    .should('contain','Uprawnienia: User')
    cy.get('.logout').click();
    cy.url()
    .should('contain','http://localhost:3000');
});

it('Admin Login on the Page with correct datas',()=>{

    cy.visit("http://localhost:3000")
    cy.get('input[name=email]').type('admin@admin.admin')
    cy.get('input[name=password]').type('Admin123#')
    cy.get('input[type=submit]').click();

    cy.url()
    .should('contain','http://localhost:3000/admin-panel')
    
    cy.get('h1')
    .should('contain','Witaj w KanbanMusic')
    cy.get('p')
    .should('contain','Uprawnienia: Admin')
    cy.get('.logout').click();
    cy.url()
    .should('contain','http://localhost:3000');
});

it('Login on the Page without datas',()=>{
cy.visit("http://localhost:3000")

    cy.get('input[type=submit]').click();
    cy.get('.login-container__form__error')
    .should('contain','Email jest wymagany')
    .should('contain','Hasło jest wymagane')
});

it('Login on the Page with valid email or password',()=>{

    cy.visit("http://localhost:3000")
 
    cy.get('input[name=email]').type('aaaaaa@aa.aa')
    cy.get('input[name=password]').type('Admin123#')
        cy.get('input[type=submit]').click()
        
        cy.server().should((server) => {
            expect(server.status).to.eq(200)
          })
        })
    });

