require('dotenv').config();
const BROWSER = process.env.BROWSER; //define the browser from the "".env" file (see README).

const { Before, BeforeAll, Given, When, Then, After, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, WebElementPromise } = require('selenium-webdriver');
const assert = require('assert');

const driver = new Builder().forBrowser(BROWSER).build();
const { setDefaultTimeout } = require('@cucumber/cucumber'); setDefaultTimeout(60 * 1000);


Given('I am on the Pixo blog', async function () {
    await driver.get('https://pixotech.com/blog');
    console.log('"Given" has completed')
});

// scenario 1
When('I select the button for the next page of blog content', async function () {
    const element = await driver.findElement(By.className('pager__next'));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000); //pause just 2 seconds  
    await element.click();
    console.log('"When" has completed')
});

// scenario 2
When('I select the button for blog page 4', async function () {
    const element = await driver.findElement(By.linkText("4"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000); //pause just 2 seconds  
    await element.click();
    console.log('"When" has completed')
});

Then('I should navigate to {string} of the Pixo blog posts', async function (suffix) {
    await driver.sleep(2000); //pause just 2 seconds  
    const webAddress = await driver.getCurrentUrl();
    console.log(webAddress);
    const truth = webAddress.includes(suffix);
    assert.deepStrictEqual(truth, true, ['error: the URL is missing the expected suffix.']);
});

AfterAll(async function () {
    await driver.quit();
});