import homePage from '../pages/HomePage';
it('Verifying elements test', ()=> {
    homePage.visit();
    homePage.getLogo().should('be.visible');
    homePage.getHomeButton().should('be.visible');
    homePage.getSignInButton().should('be.visible');
    homePage.getSignUpButton().should('be.visible');
    homePage.getGlobalFeedSection().should('be.visible');
})
