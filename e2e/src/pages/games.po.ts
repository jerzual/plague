import { $, ElementFinder } from 'protractor';
/**
 * Page Object for home page
 */
export class GamesPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $('input[title=\'Search\']');
        this.searchButton = $('input[value=\'Google Search\']');
        this.logo = $('div.logo img');
    }
}
