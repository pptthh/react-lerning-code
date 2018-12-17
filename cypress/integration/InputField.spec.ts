describe('Input fields tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080');
    })
    
    it('check url', () => {
        cy.url()
        .should('include', 'localhost:8080');
    })

    it('check default Radio Buttons selection', () => {
        cy.get('.movie-sort-by')
        .first()
        .should('be.checked');
    })

    it('change Radio Buttons selection', () => {
        cy.get('.movie-sort-by')
        .check('rating')
        .should('be.checked');
        
        cy.get('.movie-sort-by')
        .first()
        .should('not.be.checked');
    })

    it('search field', () => {
        cy.get('.search-input-field')
        .type('Quentin Tarantino')
        // .should('include', 'Quentin Tarantino')
        // .should('have.string','search')
        // .should('have.attr', 'placeholder', 'Email')
        // .should('have.string','Quentin Tarantino')
        // .should('be.undefined')
        .type('{enter}')
    })
})
