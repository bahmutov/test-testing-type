/// <reference types="cypress" />

it('has testing type', () => {
  expect(Cypress.testingType).to.be.oneOf(['e2e', 'component'])
})
