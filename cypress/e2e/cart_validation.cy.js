describe('ShiftKey - Wojciech Statek', () => {
  it('should verify the cart total after adding items', () => {
    const item1 = 'Frozen Top';
    const item2 = 'Panda Shirt';

    let item1Price, item2Price;

    cy.login('shiftkeytask@test.com', 'test123');

    cy.visit('/products');

    cy.searchForItem(item1);
    cy.getProductPrice(item1).then((price) => { item1Price = price });
    cy.addItemToCart(item1);
    cy.checkModalAndClose('Your product has been added to cart.');

    cy.searchForItem(item2);
    cy.getProductPrice(item2).then((price) => { item2Price = price });
    cy.addItemToCart(item2);
    cy.checkModalAndClose('Your product has been added to cart.');

    cy.goToCart();
    cy.proceedToCheckout();

    cy.get('.cart_total_price').last().then(($total)=>{
        const totalPriceCart = parseFloat($total.text().replace('Rs. ', ''));
        const expectedTotal = item1Price + item2Price;
        expect(totalPriceCart).to.equal(expectedTotal);
    });

  });
});