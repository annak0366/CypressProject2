# Summary of repo

This repository contains automated tests for the following functionalities:

- User login and logout
- User registration
- Verification of element availability on a webpage
- Creating a new article

## Requirements

Before you start using this project, make sure you have the following prerequisites:

- Node.js and npm (Node Package Manager) for installing project dependencies.

## Steps to Install

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
2. Navigate to the project directory: 'cd your-repo'
3. Install project dependencies using npm: `npm install`

## Steps to launch
1.Open Visual Studio Code or your preferred text editor to configure Cypress settings.
2.Run the tests using Cypress Test Runner: `npx cypress open`
3.In the Cypress Test Runner, select the tests you want to execute and run them.

## Steps to creating the report
1.Run the tests using `cypress run --spec ../cypress-framework/cypress/e2e/tests/**/*.cy.js --reporter mochawesome`;
2.In the "reports" folder, you'll find generated report files, including JSON files.

