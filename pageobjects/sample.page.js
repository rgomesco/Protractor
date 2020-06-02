module.exports = {
searchTxtBox: element(by.css("[title='Search']")),
searchBtn: element(by.css("[name='btnK']")),
resultStat: element(by.css('#result-stats')),

async navigateToPage(url){
    await browser.get(url);
}
};
