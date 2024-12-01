class UserCallPage {
  elements = {
    phoneNumberInput: 'input[name="dial-phone-number"]',
    callButton: 'button:contains("Call")',
  }

  visit() {
    cy.visit('/call')
  }

  verifyPageLoaded() {
    cy.contains('Call').should('be.visible')
  }

  enterPhoneNumber(phoneNumber) {
    cy.get(this.elements.phoneNumberInput).type(phoneNumber)
  }

  initiateCall() {
    cy.get(this.elements.callButton).click()
  }

  verifyCallInitiation() {
    cy.contains('Calling').should('be.visible')
  }
}

export default UserCallPage
