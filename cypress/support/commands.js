// Import the LoginPage class from the specified path
import LoginPage from '../pages/login'

// Custom command to handle user login
Cypress.Commands.add('login', (testUser) => {
  const loginPage = new LoginPage()   // Create an instance of the LoginPage class

  cy.session(testUser.username, () => {   // Use Cypress session management to login sessions
    loginPage.login(testUser)   // Perform the login operation using the test user credentials
  })
})
