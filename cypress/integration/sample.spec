/* eslint-disable */
describe("Top Navigation Test", function() {
  it("Loads the app and navigates to about page", function() {
    cy.visit("http://localhost:1234");
    cy.contains("About").click();
    cy.url().should("include", "/about");
    cy.visit("http://localhost:1234");
    cy.contains("Users").click();
    cy.url().should("include", "/users");
  });
});
