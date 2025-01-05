describe("Invalid page", () => {
  it("Visits an invalid path and checks for proper error handling", () => {
    cy.visit("/invalid-path", { failOnStatusCode: false });

    cy.contains("h1", "404 - Page Not Found").should("be.visible");
    cy.contains("p", "The page you are looking for does not exist.").should(
      "be.visible",
    );
  });
});
