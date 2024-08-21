import { test, expect } from '@playwright/test';
// @ts-check

const fs = require('fs');
function readEmailFromFile(filename) {
  return fs.readFileSync(filename, 'utf8');
}
test ('verify email', async ({ page }) => {
    await page.goto('https://yopmail.com/');
  
    const emailFilename = 'email.txt';
  
    const email = readEmailFromFile(emailFilename);
    console.log(`Read email from file: ${email}`);
  
    await page.fill('input[class="ycptinput"]', email);

    await page.locator('button[title="Check Inbox @yopmail.com"]').click(); 

    await expect(page).toHaveURL('https://yopmail.com/wm');

    await page.locator('button[onclick="g(this);"]').click(); 

  
});