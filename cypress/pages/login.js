class LoginPage {
  elements = {
    usernameInput: 'input[name="uid"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'input[type="submit"]',
  }

  visit() {
    cy.visit('/') // Visit the login page
  }

  enterUsername(username) {
    cy.get(this.elements.usernameInput).type(username) // Enter username
  }

  enterPassword(password) {
    cy.get(this.elements.passwordInput).type(password) // Enter password
  }

  submit() {
    cy.get(this.elements.submitButton).click() // Click on submit button
  }

  validateLoginSuccess() {
    cy.url().should('include', '/dashboard/') // Ensure URL includes '/dashboard'
  }

  login(testUser) {
    this.visit()
    this.enterUsername(testUser.username)
    this.enterPassword(testUser.password)
    this.submit()
    this.validateLoginSuccess() // Validate successful login
  }
}

export default LoginPage
