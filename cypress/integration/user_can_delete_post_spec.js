describe('Timeline', function() {
    beforeEach(() => {
        cy.visit('/users/signup');
        cy.get('#sign-up-form').find('#email').type('email@test.co.uk');
        cy.get('#sign-up-form').find('#password').type('test123');
        cy.get('#sign-up-form').submit();
        cy.contains('Log in').click();
        cy.get('#log-in-form').find('#email').type('email@test.co.uk');
        cy.get('#log-in-form').find('#password').type('test123');
        cy.get('#log-in-form').submit();
    });

    it('can delete a post and view the updated list', function() {
        cy.visit('/posts');
        cy.contains('New post').click();
        cy.get('#new-post-form').find('[type="text"]').type('Goodbye, world!');
        cy.get('#new-post-form').submit();
        cy.contains('Delete').click();

        cy.get('.posts').should('not.contain', 'Goodbye, world!');
    })
})