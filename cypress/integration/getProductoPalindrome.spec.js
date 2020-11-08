describe("getProducto-ok-palindrome-by-id-test", () => {
	it("Gets, types and asserts", () => {
		cy.visit("http://localhost:3000");

		// get an input and set value to 121
		cy.get(".cy-query-input").type("121").should("have.value", "121");

		// click submit
		cy.get(".cy-button-search").click();

		// check if element found
		cy.get(".cy-catalogue-121").should("contain", "$213.408");
	});
});

describe("getProducto-ok-palindrome-by-query-test", () => {
	it("Gets, types and asserts", () => {
		cy.visit("http://localhost:3000");

		// get an input and set value to daad
		cy.get(".cy-query-input").type("daad").should("have.value", "daad");

		// click submit
		cy.get(".cy-button-search").click();

		// check if element found
		cy.get(".col-md-4").should("contain", "daad");
	});
});
