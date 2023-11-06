import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';

it('Log out test', () => {
    homePage.visit();
    homePage.clickSignInButton();
    loginPage.enterDataEmail();
    loginPage.enterDataPassword();
    loginPage.clickSignInbutton();
    homePage.clickSettingsButton();
    homePage.clickLogOutButton();
    homePage.getHomeButton().should('be.visible');
    homePage.getSignInButton().should('be.visible');
    homePage.getSignUpButton().should('be.visible');
})
