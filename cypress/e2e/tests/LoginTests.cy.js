import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import userData from '../data.json'; 

const invalidEmailInput = 'djiwdjiw56tf5@gmail.com';
const invalidPasswordInput = 'jjkjjshssqs5rrv3#fghj8i';

describe('Login Test Suite', () => {
    beforeEach(() => {
        homePage.clickSignInButton();
    });

    it('Login with valid data', () => {
        loginPage.login(userData.user.email, userData.user.password);
        homePage.getNewArticleButton().should('be.visible');
        homePage.getSettingsButton().should('be.visible');
        homePage.getProfileButton().should('be.visible');
    });

    it('Login with the empty "Password" field', () => {
        loginPage.login(userData.user.email, ' ');
        loginPage.getErrorMessage().should('be.visible')
            .should('contain.text', "password can't be blank");
    });

    it('Login with the empty "Email" field', () => {
        loginPage.login(' ', userData.user.password);
        loginPage.getErrorMessage().should('be.visible')
            .should('contain.text', "email can't be blank");
    });

    it('Login with invalid data', () => {
        loginPage.login(invalidEmailInput, invalidPasswordInput);
        loginPage.getErrorMessage().should('be.visible')
            .should('contain.text', "email or password is invalid");
    });
});