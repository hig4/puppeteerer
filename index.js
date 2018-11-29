const puppeteer = require('puppeteer');

puppeteer.launch({
    args: ['--no-sandbox'],
}).then(async browser => {
    console.log(await browser.version());
    browser.close();
});