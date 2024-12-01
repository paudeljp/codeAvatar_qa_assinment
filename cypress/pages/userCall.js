// Class representing the User Call Page 
class UserCallPage {
  elements = {    // Object containing CSS selectors for the elements on the call page
    phoneNumberInput: 'input[name="dial-phone-number"]',  // Selector for the phone number input field
    callButton: 'button:contains("Call")',    // Selector for the call button
  }

  visit() {   // Method to navigate to the call page
    cy.visit('/call')   // Visits the call page URL
  }

  verifyPageLoaded() {    // Method to verify that the call page has loaded successfully
    cy.contains('Call').should('be.visible')    // Asserts that the 'Call' button is visible on the page
  }

  enterPhoneNumber(phoneNumber) {
    cy.get(this.elements.phoneNumberInput).type(phoneNumber)    // Types the provided phone number into the input field
  }

  initiateCall() {
    cy.get(this.elements.callButton).click()    // Clicks the 'Call' button to start the call process
  }

  verifyCallInitiation() {
    cy.contains('Calling').should('be.visible')   // Asserts that a 'Calling' status message is visible, indicating call initiation
  }

  verifyPhoneNumberValidation() {
    cy.contains('Invalid phone number').should('be.visible')    // Checks if an 'Invalid phone number' error message is displayed
  }

}

export default UserCallPage   / Exports the UserCallPage class to be used in CallUser.cy.js
