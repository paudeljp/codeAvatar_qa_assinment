class LoginPage {
  elements = {
    usernameInput: 'input[name="uid"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'input[type="submit"]',
  }

  visit() {
    cy.visit('/')
  }

  enterUsername(username) {
    cy.get(this.elements.usernameInput).type(username)
  }

  enterPassword(password) {
    cy.get(this.elements.passwordInput).type(password)
  }

  submit() {
    cy.get(this.elements.submitButton).click()
  }

  validateLoginSuccess() {
    cy.url().should('include', '/dashboard/')
  }

  login(testUser) {
    this.visit()
    this.enterUsername(testUser.username)
    this.enterPassword(testUser.password)
    this.submit()
    this.validateLoginSuccess()
  }
}

export default LoginPage
