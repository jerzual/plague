import { GamesPageObject } from '../pages/games.po';

const { Then } = require('cucumber');

const gamePage: GamesPageObject = new GamesPageObject();

Then(/^I clear the search text$/, async () => {
     await gamePage.searchTextBox.clear();
});
