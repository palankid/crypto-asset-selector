describe("Rates page", () => {
  it("Visits the rates page and check for default elements", () => {
    cy.visit("/");

    const texts = ["BTC-OPTIONS", "Bitcoin", "Last Market Price"];
    texts.forEach((text) => cy.contains("span", text));
  });

  it("Checks that those assets aren't visible which are in the dropdown list", () => {
    cy.visit("/");

    const absentTexts = ["ETH-OPTIONS", "ARB-OPTIONS"];
    absentTexts.forEach((text) =>
      cy.contains("span", text).should("not.exist"),
    );
  });

  it("Intercepts the API call and checks for Bitcoin values", () => {
    cy.intercept("GET", "/api/rates?ids=bitcoin%2Cethereum%2Carbitrum", {
      statusCode: 200,
      body: {
        message: {
          bitcoin: {
            usd: 98451.05445387,
            usd_24h_change: 0.2265511857649887,
          },
        },
      },
    }).as("getRates");

    cy.visit("/");
    cy.wait("@getRates");

    cy.contains("span", "$98,451.05").should("be.visible");
  });

  it("Opens the dropdown and selects ARB-OPTIONS", () => {
    cy.visit("/");

    cy.get('[data-testid="dropdown-button"]').click();
    cy.contains("span", "ARB-OPTIONS").click();
    cy.get('[data-testid="dropdown-menu"]').then(($el) => {
      $el[0].dispatchEvent(
        new Event("transitionend", { bubbles: true, cancelable: true }),
      );
    });

    cy.contains("span", "ARB-OPTIONS").should("be.visible");
    cy.contains("span", "BTC-OPTIONS").should("not.exist");
  });
});
