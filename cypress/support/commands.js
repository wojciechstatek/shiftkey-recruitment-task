Cypress.Commands.add('login', (login, password) => { 
    cy.visit('/login');
    cy.get('[data-qa="login-email"]').type(login);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
 });

Cypress.Commands.add('searchForItem', (itemName) => {
    cy.get('#search_product').clear().type(itemName);
    cy.get('#submit_search').click();
});

Cypress.Commands.add('checkModalAndClose', (modalBodyText) => {
    cy.get('.modal-body > .text-center').eq(0).should('have.text', modalBodyText);
    cy.get('.modal-footer > .btn').click();
});

Cypress.Commands.add('addItemToCart', (itemName) => {
    cy.contains(itemName).parents('.productinfo').find('.add-to-cart').click();
});

Cypress.Commands.add('getProductPrice', (productName) => {
    cy.contains(productName).parents('.productinfo').then(($product) => {
        return cy.wrap(parseFloat($product.find('h2').text().replace('Rs. ', '')));
    });
});

Cypress.Commands.add('goToCart', () => {
    cy.get('.shop-menu').contains('Cart').click();
});

Cypress.Commands.add('proceedToCheckout', () => {
    cy.contains('Proceed To Checkout').click();
});