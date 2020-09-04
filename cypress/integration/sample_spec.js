/**
 * Write a test that:
 * 1. Visit: https://example.cypress.io
 * 2. Find the element with content: `type`
 * 3. Click on it
 * 4. Get the URL
 * 5. Assert the URL includes: /commands/actions
 * 6. Get the input with the `.action-email` CSS class
 * 7. Type "fake@email.com" into the input
 * 8. Assert the input reflects the new value
 */
describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which includes "/command/actions"
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
