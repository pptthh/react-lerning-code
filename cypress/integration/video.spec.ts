// https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#What-you’ll-learn

xdescribe('My 1st test', () => {
    it('does not much', () => {
        expect(true).to.equal(true);
    }),
    xit('skips a failing test', () => {
        expect(true).to.equal(false);
    }),
    it('Visit the Kitchen sink', () => {
        cy.visit('https://example.cypress.io');
    }),
    it('Find an element', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type');
    }),
    it('Click an element', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
    }),
    it('Make assertion', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
        cy.url()
            .should('include', '/commands/actions')
    }),
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
        cy.url()
            .should('include', '/commands/actions');
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value','fake@email.com');
    }),
    
    
    xit('empty last test', () => {})
})