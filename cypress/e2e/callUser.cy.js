import UserCallPage from '../pages/userCall'

describe('User Call Flow', () => {
  let testData

  // Load fixture data before running the tests
  before(() => {
    cy.fixture('user').then((data) => {
      testData = data
    })
  })

  // Instantiate the page objects
  const callPage = new CallPage()

  beforeEach(() => {
    // Use the login command with fixture data
    cy.login(testData.testUser)
    // Navigate to the call page
    callPage.visit()
  })

  it('should initiate a call to a specific number', () => {
    // Verify the call page has loaded
    callPage.verifyPageLoaded()

    // Enter phone number
    callPage.enterPhoneNumber(testData.phoneNumber)

    // Click the 'Call' button
    callPage.initiateCall()

    // Validate that the call has started
    callPage.verifyCallInitiation()
  })
})
