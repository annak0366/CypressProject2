import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import userData from '../data.json'; 
it('Log out test', () => {
    homePage.clickSignInButton();
    loginPage.login(userData.user.email, userData.user.password);
    homePage.clickSettingsButton();
    homePage.clickLogOutButton();
    homePage.getHomeButton().should('be.visible');
    homePage.getSignInButton().should('be.visible');
    homePage.getSignUpButton().should('be.visible');
})
