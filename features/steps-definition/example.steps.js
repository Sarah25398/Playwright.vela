const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

let browser;
let page;

Given('I navigate to the Playwright homepage', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://playwright.dev');
});

Then('the page title should be {string}', async function (expectedTitle) {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
  await browser.close();
});
