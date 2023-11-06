import homePage from '../pages/HomePage'
import registrationPage from '../pages/RegistrationPage'
describe('Registration Test Suite', ()=>{
    beforeEach(() => {
        homePage.visit();
        homePage.clickSignUpButton();
    });

    it('Registration with valid data', () => {
        registrationPage.enterDataRandomUsername();
        registrationPage.enterDataEmailAndPassword();
        registrationPage.clickSignUpButton();
        homePage.getNewArticleButton().should('be.visible');
        homePage.getSettingsButton().should('be.visible');
        homePage.getProfileButton().should('be.visible');
    })

    it('Registration with empty fields', () => {
        registrationPage.clickSignUpButton();
        registrationPage.getErrorMessage().should('be.visible')
        .should('contain.text', "email can't be blank");
    })

    it('Registration with a taken Username', () => {
        registrationPage.enterDataRegisteredUsername();
        registrationPage.enterDataEmailAndPassword();
        registrationPage.clickSignUpButton();

        registrationPage.getErrorMessage().should('be.visible')
        .should('contain.text', "username has already been taken");
    })
})
