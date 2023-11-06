const logoSelector = 'a.navbar-brand.ng-binding';  
const homeButtonSelector = 'a.nav-link.active[ui-sref="app.home"]';
const signInButtonSelector = 'a[ui-sref="app.login"]';
const signUpButtonSelector = 'a[ui-sref="app.register"]';
const globalFeedSectionSelector = 'a.nav-link.active[ng-click="$ctrl.changeList({ type: \'all\' })"]';
const newArticleSelector = '[ui-sref="app.editor"]';
const settingsSelector = '[ui-sref="app.settings"]';
const profileButtonSelector = '[ui-sref="app.profile.main({ username: $ctrl.currentUser.username })"]';
const logOutButton = '[ng-click="$ctrl.logout()"]';

class HomePage {
    visit(){
        cy.visit('https://demo.realworld.io/#/');
    }
    clickSignUpButton(){
        cy.get(signUpButtonSelector).click();
    }
    clickSignInButton(){
        cy.get(signInButtonSelector).click();
    }
    getLogo() {
        return cy.get(logoSelector);
    }
    getHomeButton() {
        return cy.get(homeButtonSelector);
    }
    getSignInButton() {
        return cy.get(signInButtonSelector);
    }

    getSignUpButton() {
        return cy.get(signUpButtonSelector);
    }

    getGlobalFeedSection() {
        return cy.get(globalFeedSectionSelector);
    }
    getNewArticleButton() {
        return cy.get(newArticleSelector);
    }
    getSettingsButton() {
        return cy.get(settingsSelector);
    }
    getProfileButton() {
        return cy.get(profileButtonSelector);
    }
    clickSettingsButton() {
        cy.get(settingsSelector).click();
    }
    clickLogOutButton(){
        cy.get(logOutButton).click();
    }
    clickNewArticleButton(){
        cy.get(newArticleSelector).click();
    }
}
module.exports = new HomePage();