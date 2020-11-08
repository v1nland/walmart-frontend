describe("input-nok", () => {
	it("Gets, types and asserts", () => {
		cy.visit("http://localhost:3000");

		// get an input and set value to ab
		cy.get(".cy-query-input").type("ab").should("have.value", "ab");

		// click submit
		cy.get(".cy-button-search").click();

		// check if element found
		cy.get(".cy-output-msg").should("contain", "Debe ingresar al menos 3 caracteres");
	});
});
