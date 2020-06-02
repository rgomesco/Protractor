module.exports = {

    async isElementVisible(ele) {
        let x = await ele.isPresent().then(async (val) => {
            if (val) {
                return await ele.isDisplayed();
            } else {
                return val;
            };
        });
        return await x;
    },

    async isElementPresent(ele) {
        await browser.manage().timeouts().implicitlyWait(0);
        let x = await ele.isPresent();
        await browser.manage().timeouts().implicitlyWait(10000);
        return await x;
    },

    async clearField(ele) {
        return await ele.getAttribute('value').then(async (text) => {
            await ele.click();
            for (let i = 0; i < text.length; i++) {
                await ele.sendKeys(protractor.Key.ARROW_RIGHT);
                await ele.sendKeys(protractor.Key.BACK_SPACE);
            };
        });
    },

    async scrollElementIntoView(ele) {
        return await browser.controlFlow().execute(async () => {
            return await browser.executeScript('arguments[0].scrollIntoView(true)', ele.getWebElement());
        });
    }
};
