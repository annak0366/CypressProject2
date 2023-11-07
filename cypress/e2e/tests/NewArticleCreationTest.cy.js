import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import newArticlePage from '../pages/NewArticlePage';
it('New Article creation test', () => {
    homePage.visit();
    homePage.clickSignInButton();
    loginPage.enterDataEmail();
    loginPage.enterDataPassword();
    loginPage.clickSignInbutton();
    homePage.clickNewArticleButton();
    newArticlePage.enterArticleTitle();
    newArticlePage.enterDescription();
    newArticlePage.enterArticleBody();
    newArticlePage.clickPublishButton();
    newArticlePage.getEditButton().should('be.visible');
    newArticlePage.getDeleteButton().should('be.visible');
    newArticlePage.getUrl().should('include', '/article');
})
