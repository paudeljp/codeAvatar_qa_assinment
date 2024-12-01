import LoginPage from '../pages/login'

Cypress.Commands.add('login', (testUser) => {
  const loginPage = new LoginPage()
  cy.session(testUser.username, () => {
    loginPage.login(testUser)
  })
})
