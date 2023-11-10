import homePage from '../pages/HomePage'
import registrationPage from '../pages/RegistrationPage'
const faker = require('faker');
const randomUsername = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const registeredUsername = 'Helen';

describe('Registration Test Suite', () => {
    beforeEach(() => {
        homePage.visit();
        homePage.clickSignUpButton();
    });

    it('Registration with valid data', () => {
        registrationPage.register(randomUsername, randomEmail, randomPassword);
        homePage.getNewArticleButton().should('be.visible');
        homePage.getSettingsButton().should('be.visible');
        homePage.getProfileButton().should('be.visible');
    });

    it('Registration with empty fields', () => {
        registrationPage.register(' ', ' ', ' ');
        registrationPage.getErrorMessage().should('be.visible')
            .should('contain.text', "email can't be blank");
    });

    it('Registration with a taken Username', () => {
        registrationPage.register(registeredUsername, randomEmail, randomPassword);
        registrationPage.getErrorMessage().should('be.visible')
            .should('contain.text', "username has already been taken");
    });
});
