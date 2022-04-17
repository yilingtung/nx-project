describe('shared-ui: Button component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=button--default&args=children:Hello World')
  );

  it('should render the component', () => {
    cy.get('button').should('contain', 'Hello World');
  });
});
