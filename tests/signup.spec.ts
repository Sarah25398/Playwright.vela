// @ts-check
import { test, expect } from '@playwright/test'
const fs = require('fs');
function generateRandomLowercaseText(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
//function to write email into 1 file 
function writeEmailToFile(filename, email) {
  fs.writeFileSync(filename, email, 'utf8');
}

test('login function', async ({ page }) => {
  await page.goto('https://customer-dev2.vela.com.vn/account/register');
  const randomUsername = generateRandomLowercaseText(12);
  const emailFilename = 'email.txt';

  const randomEmail = `tester${generateRandomLowercaseText(5)}@yopmail.com`;

  writeEmailToFile(emailFilename, randomEmail);
  console.log(`Generated email: ${randomEmail}`);
  console.log(`Email written to file: ${emailFilename}`);
 

  console.log(`Generated Email: ${randomEmail}`);

  await page.fill('input[formcontrolname="companyName"]', randomUsername);

  await page.fill('input[id="fullName"]', randomUsername);
  await page.fill('input[id="email"]', randomEmail);
  await page.fill('input[formcontrolname="phoneNumber"]', '34234234');
  await page.fill('input[id="password"]', 'Hello@123');
  await page.fill('input[id="checkPassword"]', 'Hello@123');
  
  await page.locator('input[type="checkbox"]').click();
  

  await page.locator('button[nztype="primary"]').nth(0).click();
  //const element = await page.locator('h2'); 
  //await expect(element).toHaveText(' Please verify your email! ');
    
});




