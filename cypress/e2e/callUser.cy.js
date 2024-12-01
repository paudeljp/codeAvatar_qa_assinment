import CallPage from '../pages/userCall'

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

  // Run login before each test and navigate to call page
  beforeEach(() => {
    cy.login(testData.testUser) // Custom Cypress command to login
    callPage.visit() // Navigate to the call page
  })

  // Test case for successful call initiation
  it('should initiate a call to a specific number', () => {
    callPage.verifyPageLoaded() // Validate call page is loaded
    callPage.enterPhoneNumber(testData.phoneNumber) // Enter valid phone number
    callPage.initiateCall() // Click 'Call' button
    callPage.verifyCallStatus() // Verify the call initiation is successful
  })

  // Test case for invalid phone number entry
  it('should show error for invalid phone number', () => {
    callPage.verifyPageLoaded() // Validate call page is loaded
    callPage.enterPhoneNumber('invalidPhone') // Enter invalid phone number
    callPage.initiateCall() // Attempt to initiate the call
    callPage.verifyPhoneNumberValidation() // Verify error message
  })
})
