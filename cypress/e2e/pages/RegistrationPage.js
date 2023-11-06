const faker = require('faker');

const randomUsername = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const registeredUsername = 'Helen';
const usernameSelector = '[ng-model="$ctrl.formData.username"]';
const emailSelector = '[ng-model="$ctrl.formData.email"]';
const passwordSelector = '[ng-model="$ctrl.formData.password"]';
const signUpButtonSelector = 'button.btn-primary';
const errorMessage = '[ng-repeat="error in errors"]';

class RegistrationPage {
    enterDataRandomUsername(){
        cy.get(usernameSelector).type(randomUsername);
    }
    enterDataEmailAndPassword() {
        cy.get(emailSelector).type(randomEmail);
        cy.get(passwordSelector).type(randomPassword);
    }
    enterDataRegisteredUsername(){
        cy.get(usernameSelector).type(registeredUsername);
    }
    clickSignUpButton() {
        cy.get(signUpButtonSelector).click();
    }
    getErrorMessage() {
        return cy.get(errorMessage);
    }
}
module.exports = new RegistrationPage();