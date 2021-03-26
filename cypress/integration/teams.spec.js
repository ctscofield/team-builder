describe('Team sign ups', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const roleOption1 = () => cy.get('select').select('instructor')
    const roleOption2 = () => cy.get('select').select('student')
    const roleOption3 = () => cy.get('select').select('graduate')
    const addButton = () => cy.get("button[id=submitBtn]")

    it('Check to test', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        roleOption1().should('exist')
        roleOption2().should('exist')
        roleOption3().should('exist')
        addButton().should("exist")
    })

    describe('Fill in the inputs', () => {
        it('add button is disabled', () => {
            addButton().should('be.disabled')
        })

        it('can type in inputs and add button is enabled', () => {
            nameInput()
                .should('have.value', '')
                .type('Samus Aran')
                .should('have.value', 'Samus Aran')

            emailInput()
                .should('have.value', '')
                .type('spacepiratekiller@aol.com')
                .should('have.value', 'spacepiratekiller@aol.com')

            roleOption1()
                .should('have.value', 'instructor')

            addButton()
                .should('not.be.disabled')

            addButton()
                .click()
        })
    })
})