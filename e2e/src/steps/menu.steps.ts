import { HomePageObject } from '../pages/home.po';

const { Then } = require('cucumber');

const homePage: HomePageObject = new HomePageObject();

Then(/^I clear the search text$/, async () => {
     await homePage.searchTextBox.clear();
});
