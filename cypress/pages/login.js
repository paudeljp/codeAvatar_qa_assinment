// Class representing the login page
class LoginPage {
  elements = {        // Object containing the CSS selectors for the login page elements
    usernameInput: 'input[name="uid"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'input[type="submit"]',
  }

  visit() {   // Method to navigate to the login page
    cy.visit('/') // Visit the login page
  }

  enterUsername(username) {   // Method to input the username into the username field
    cy.get(this.elements.usernameInput).type(username) // Enter username
  }

  enterPassword(password) {
    cy.get(this.elements.passwordInput).type(password) // Enter password
  }

  submit() {
    cy.get(this.elements.submitButton).click() // Click on submit button
  }

  validateLoginSuccess() {
    cy.url().should('include', '/dashboard/') // Asserts that the current URL contains '/dashboard', indicating a successful login
  }

  login(testUser) {   // Method to perform the complete login process with the provided user credentials
    this.visit()    // Navigate to the login page
    this.enterUsername(testUser.username)
    this.enterPassword(testUser.password)
    this.submit()
    this.validateLoginSuccess() // Validate successful login
  }
}

export default LoginPage    // Export the LoginPage class to be used in the callUser.cy.js
