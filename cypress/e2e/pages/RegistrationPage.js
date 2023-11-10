const usernameSelector = '[ng-model="$ctrl.formData.username"]';
const emailSelector = '[ng-model="$ctrl.formData.email"]';
const passwordSelector = '[ng-model="$ctrl.formData.password"]';
const signUpButtonSelector = 'button.btn-primary';
const errorMessage = '[ng-repeat="error in errors"]';

class RegistrationPage {
    register(username, email, password) {
        cy.get(usernameSelector).type(username);
        cy.get(emailSelector).type(email);
        cy.get(passwordSelector).type(password);
        cy.get(signUpButtonSelector).click();
    }
    getErrorMessage() {
        return cy.get(errorMessage);
    }
}
module.exports = new RegistrationPage();