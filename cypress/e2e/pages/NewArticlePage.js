const faker = require('faker');
const inputArticleTitle = '[ng-model="$ctrl.article.title"]';
const inputDescription = '[ng-model="$ctrl.article.description"]';
const inputArticleBody = '[ng-model="$ctrl.article.body"]';
const publishArticleButton = '[ng-click="$ctrl.submit()"]';
const editButton = 'a.btn.btn-outline-secondary.btn-sm';
const deleteButton = 'button.btn.btn-outline-danger';
const createdTitle = 'h1.ng-binding';
const data1 = faker.random.alphaNumeric(10);
const data2 = faker.random.alphaNumeric(10);
class NewArticlePage {
    enterArticleTitle(){
        cy.get(inputArticleTitle).type(data1);
    }
    enterDescription(){
        cy.get(inputDescription).type(data1);
    }
    enterArticleBody(){
        cy.get(inputArticleBody).type(data2);
    }
    clickPublishButton(){
        cy.get(publishArticleButton).click();
    }
    getEditButton() {
        return cy.get(editButton);
    }
    getDeleteButton(){
        return cy.get(deleteButton);
    }
    getCreatedTitle() {
        return cy.get(createdTitle);
    }
    getUrl(){
        return cy.url();
    }
}
module.exports = new NewArticlePage();
