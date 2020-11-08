describe("getProducto-ok-by-id-test", () => {
	it("Gets, types and asserts", () => {
		cy.visit("http://localhost:3000");

		// get an input and set value to 123
		cy.get(".cy-query-input").type("123").should("have.value", "123");

		// click submit
		cy.get(".cy-button-search").click();

		// check if element found
		cy.get(".cy-catalogue-123").should("contain", "$581.042");
	});
});

describe("getProducto-nok-by-id-test", () => {
	it("Gets, types and asserts", () => {
		cy.visit("http://localhost:3000");

		// get an input and set value to 123456
		cy.get(".cy-query-input").type("123456").should("have.value", "123456");

		// click submit
		cy.get(".cy-button-search").click();

		// check if element found
		cy.get(".cy-output-msg").should("contain", "No hay resultados");
	});
});

describe("getProducto-ok-by-query-test", () => {
	it("Gets, types and asserts", () => {
		cy.visit("http://localhost:3000");

		// get an input and set value to daa
		cy.get(".cy-query-input").type("daa").should("have.value", "daa");

		// click submit
		cy.get(".cy-button-search").click();

		// check if element found
		cy.get(".col-md-4").should("contain", "daa");
	});
});

describe("getProducto-nok-by-query-test", () => {
	it("Gets, types and asserts", () => {
		cy.visit("http://localhost:3000");

		// get an input and set value to abbab
		cy.get(".cy-query-input").type("abbab").should("have.value", "abbab");

		// click submit
		cy.get(".cy-button-search").click();

		// check if element found
		cy.get(".cy-output-msg").should("contain", "No hay resultados");
	});
});
