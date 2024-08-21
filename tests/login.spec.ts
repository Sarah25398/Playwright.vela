// @ts-check
import { test, expect } from '@playwright/test';
const fs = require('fs');
function readEmailFromFile(filename) {
  return fs.readFileSync(filename, 'utf8');
}

test.beforeEach('login function', async ({ page }) => {
  await page.goto('https://customer-dev2.vela.com.vn/');

  const emailFilename = 'email.txt';

  const email = readEmailFromFile(emailFilename);
  console.log(`Read email from file: ${email}`);

  await page.fill('input[id="username"]', email);
  await page.fill('input[id="password"]', 'Hello@123');
    
  await page.click('button[type="submit"]');
    
});

function generateRandomTaxCode(length = 10) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const randomUsername = generateRandomText(10);

const taxCode = generateRandomTaxCode(); 

test('login test url', async ({ page }) => {

 await page.locator('button[nztype="primary"]').nth(4).click();

 await page.fill('input[formcontrolname="taxCode"]', taxCode);

 await page.fill('input[id="companyShortName"]',randomUsername); 

 await page.getByRole('searchbox').click();
 await page.getByRole('searchbox').fill('tuy hoa');


 await page.getByText(' Việt Nam / Phú Yên / Tuy Hòa / An Phú ').click();


 await page.fill('input[formcontrolname="headOffice"]','11 Duy Tan'); 

 const fileInput = await page.locator('input[type="file"]').nth(0);
    await fileInput.setInputFiles('email.txt');



 await page.locator('button[type="button"]').nth(0).click();

 await page.locator('text=" Gửi đi "').click();

})
