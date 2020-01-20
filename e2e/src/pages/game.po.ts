import { $, ElementFinder } from 'protractor';
/**
 * Page Object for game page
 */
export class GamePageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $('input[title=\'Search\']');
        this.searchButton = $('input[value=\'Google Search\']');
        this.logo = $('div.logo img');
    }
}
