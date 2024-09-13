const { Given, When, Then, Before } = require ('@cucumber/cucumber');
const { expect,test } = require  ( '@playwright/test');
const { chromium, Browser, Page } = require ( 'playwright');
 
let browser =  Browser;
let page = Page;
Before(async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  
});
Given('I test login page',{timeout : 500000}, async function () {
  await page.goto('https://customer-dev2.vela.com.vn/')
});
 
When('I enter invalid username and password',{timeout : 500000}, async () => {
  await page.fill('input[name=Username]','vela.os015@itlvncom.onmicrosoft.com');
  await page.fill('input[name=Password]','Hello@123');
});
When('I enter valid username and password',{timeout : 500000}, async () => {
  await page.fill('input[name=Username]','vela.os015@itlvncom.onmicrosoft.com');
  await page.fill('input[name=Password]','Hello@12');
});
 
When('I click onto submit button',{timeout : 500000}, async () => {
  await page.locator('button[type=submit]').click(); 
});
Then('I should see an error message',{timeout : 500000}, async function () {
  const textContent = await page.getByText('Incorrect account or password')
  expect(textContent).toBeVisible;
});
 
Then('I should be redirected to the homepage',{timeout : 500000}, async () => {
  const url = await page.waitForURL('https://customer-dev2.vela.com.vn/rfi');
  expect(url).toBeVisible();
  
});