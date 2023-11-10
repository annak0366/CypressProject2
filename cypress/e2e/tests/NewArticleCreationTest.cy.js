import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import newArticlePage from '../pages/NewArticlePage';
import userData from '../data.json';
it('New Article creation test', () => {
    homePage.clickSignInButton();
    loginPage.login(userData.user.email, userData.user.password);
    homePage.clickNewArticleButton();
    newArticlePage.enterAllArticleData();
    newArticlePage.getEditButton().should('be.visible');
    newArticlePage.getDeleteButton().should('be.visible');
    newArticlePage.getUrl().should('include', '/article');
})
