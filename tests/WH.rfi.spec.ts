import { beforeEach } from "node:test";

const { test, expect } = require('@playwright/test');

const fs = require('fs');

function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

test.beforeEach('access to ', async ({ request,page }) => {
    await page.goto('https://supplier-dev2.vela.com.vn/');
    await page.fill('input[id="username"]', 'resano4555@hutov.com');
    await page.fill('input[id="password"]', 'Hello@123');
    
    await page.click('button[type="submit"]');
    await page.getByText(' Create RFI ').click();
    await page.locator('input[type="checkbox"]').nth(7).click(); 
    await page.getByText('Next').click();
    await page.getByText('Next').click();
});


test('gioi han address < 200', async ({ page }) => {
    await page.locator('button[type="button"]').nth(1).click();

    const address = generateRandomText(190);

    const inputField = page.locator('input[formcontrolname="address"]');
    await inputField.fill(address);

    const inputValue = await inputField.inputValue();
    const inputLength = inputValue.length;

    console.log(`Filled address with 300 characters. Input length: ${inputLength}`);

    expect(inputLength).toBeLessThanOrEqual(200);
});


    

