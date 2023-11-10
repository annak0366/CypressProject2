const emailInput = 'input[type="email"]';
const passwordInput = 'input[type="password"]';
const signInButton = 'button[type="submit"]';
const errorMessage = '[ng-repeat="error in errors"]';
class LoginPage {
    login(email, password) {
        cy.get(emailInput).type(email);
        cy.get(passwordInput).type(password);
        cy.get(signInButton).click();
    }
    getErrorMessage() {
        return cy.get(errorMessage);
    }
}
module.exports = new LoginPage();