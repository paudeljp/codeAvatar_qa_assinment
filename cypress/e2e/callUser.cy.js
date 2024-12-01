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
  const callPage = new UserCallPage()

  // Run login before each test and navigate to call page
  beforeEach(() => {
    cy.login(testData.testUser) // Custom Cypress command to login
    UserCallPage.visit() // Navigate to the call page
  })

  // Test case for successful call initiation
  it('should initiate a call to a specific number', () => {
    UserCallPage.verifyPageLoaded() // Validate call page is loaded
    UserCallPage.enterPhoneNumber(testData.phoneNumber) // Enter valid phone number
    UserCallPage.initiateCall() // Click 'Call' button
    UserCallPage.verifyCallStatus() // Verify the call initiation is successful
  })

  // Test case for invalid phone number entry
  it('should show error for invalid phone number', () => {
    UserCallPage.verifyPageLoaded() // Validate call page is loaded
    UserCallPage.enterPhoneNumber('invalidPhone') // Enter invalid phone number
    UserCallPage.initiateCall() // Attempt to initiate the call
    UserCallPage.verifyPhoneNumberValidation() // Verify error message
  })
})
