import homePage from '../pages/HomePage'
import loginPage from '../pages/LoginPage'

describe('Login Test Suite', ()=>{
    beforeEach(() => {
        homePage.visit();
        homePage.clickSignInButton();
    });

    it('Login with valid data', () => {
        loginPage.enterDataEmail();
        loginPage.enterDataPassword();
        loginPage.clickSignInbutton();
        homePage.getNewArticleButton().should('be.visible');
        homePage.getSettingsButton().should('be.visible');
        homePage.getProfileButton().should('be.visible');
    })

    it('Login with the empty "Password" field', () => {
        loginPage.enterDataEmail();
        loginPage.clickSignInbutton();
        loginPage.getErrorMessage().should('be.visible')
        .should('contain.text', "password can't be blank");
    })
    
    it('Login with the empty "Email" field', () => {
        loginPage.enterDataPassword();
        loginPage.clickSignInbutton();
        loginPage.getErrorMessage().should('be.visible')
        .should('contain.text', "email can't be blank");
    })

    it('Login with invalid data', () => {
        loginPage.enterInvalidEmail();
        loginPage.enterInvalidPassword();
        loginPage.clickSignInbutton();
        loginPage.getErrorMessage().should('be.visible')
        .should('contain.text', "email or password is invalid");
    })
})