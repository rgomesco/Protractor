const samplePage = require('../pageobjects/sample.page');
const helper = require('../helpers/helper')

describe('Sample Test Suite', () => {
    beforeAll(async () => {
        await samplePage.navigateToPage(label.sampleSite);
    });

    it('Search for a word', () => {
        await samplePage.searchTxtBox.sendKeys(label.searchTerm);
        await samplePage.searchBtn.click();
        await expect(helper.isElementVisible(samplePage.resultStat)).toBe(true, 'Search results should be displayed but is not displayed');
    });
});