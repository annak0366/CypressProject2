const emailInput = 'input[type="email"]';
const passwordInput = 'input[type="password"]';
const signInButton = 'button[type="submit"]';
const errorMessage = '[ng-repeat="error in errors"]';
const userEmail = 'terariv432@wanbeiz.com';
const userPassword = 'helen555helen555';
const invalidEmailInput = 'djiwdjiw56tf5@gmail.com';
const invalidPasswordInput = 'jjkjjshssqs5rrv3#fghj8i';
class LoginPage {
    enterDataEmail(){
        cy.get(emailInput).type(userEmail);
    }
    enterDataPassword(){
        cy.get(passwordInput).type(userPassword);
    }
    clickSignInbutton(){
        cy.get(signInButton).click();
    }
    getErrorMessage() {
        return cy.get(errorMessage);
    }
    enterInvalidEmail(){
        cy.get(emailInput).type(invalidEmailInput);
    }
    enterInvalidPassword(){
        cy.get(passwordInput).type(invalidPasswordInput);
    }
}
module.exports = new LoginPage();
