# ShiftKey x Wojciech Statek

This repo is a solution for requiremwnt task to ShiftKey

## How to run test

### Prerequisites
You need to have `Node.js` and `npm` installed\
You can check that by running `node -v` and `npm -v`

If both commands output versions of installed tools, you can run `npm ci` to clean install the dependencies of repo. 

### Headless Mode
Run `npm run test` - this command will start Cypress in headless mode (results will be visible in terminal)

### Interactive runner
Run `npm run test-ia` - this command will open interactive runner of Cypress in E2E testing mode on Electron browser

## Next steps improvements

- Environmental variables: Try to introduce it for better environments' settings, credentials etc.
- Refactor price extraction: Would try to extract this info from backend, not to rely only on UI presentation
- Before/after hooks: Create pre/post conditions, e.g. to clear user's cart before starting test run
- Assertion Improvements: Improve assertions to handle edge cases and provide more informative error messages
- Cross-Browser Testing: Change configuration to run Cypress tests for different browsers like Chrome or Firefox (not only Electron)
- Page Object Model and Custom Commands: Implement the Page Object Model design pattern to make code maintainance easier; possibly change custom commands into POM methods