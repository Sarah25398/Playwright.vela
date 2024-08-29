import { beforeEach } from "node:test";
const path = require('path');


const { test, expect } = require('@playwright/test');

test.beforeEach('Login', async ({ context,page }) => {

    await context.clearCookies();
    await page.goto('https://supplier-dev2.vela.com.vn/');
    await page.fill('input[id="username"]', 'resano4555@hutov.com');
    await page.fill('input[id="password"]', 'Hello@123');
    
    await page.click('button[type="submit"]'); 

}); 

test ('upload 1 rfi file', async ({ page }) => {

    await page.locator('button[class="ant-btn ant-btn-primary"]').nth(0).click();
    await page.locator('input[type="checkbox"]').nth(6).click();
    await page.locator('button[nztype="primary"]').nth(2).click();

    await page.getByText(' Next ').click();

    await page.locator('nz-select[formcontrolname="modeofTransport"]').click();
    await page.locator('nz-option-item[title="Sea FCL"]').click();

    for (let i = 0; i < 1; i++) {
      const fileInput = await page.locator('input[type="file"]');
      await fileInput.setInputFiles('Copy of Overall simulation 20230718.xlsx',{setTimeout: 50000});
      await page.waitForSelector('text=Upload file successfully!', { timeout: 100000 }); 
    
    }

    await page.getByText('Save Draft').click();


}); 

test ('upload 100 rfi file', async ({ page }) => {

    await page.locator('button[class="ant-btn ant-btn-primary"]').nth(0).click();
    await page.locator('input[type="checkbox"]').nth(6).click();
    await page.locator('button[nztype="primary"]').nth(2).click();

    await page.getByText(' Next ').click();

    await page.locator('nz-select[formcontrolname="modeofTransport"]').click();
    await page.locator('nz-option-item[title="Sea FCL"]').click();

    const filePath = path.resolve(__dirname, 'Copy of Overall simulation 20230718.xlsx');

  for (let i = 0; i < 100; i++) {
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(filePath);

    
    await page.waitForSelector('text=Upload file successfully!', { timeout: 60000 });

    await page.waitForTimeout(500);
  }



    await page.getByText('Save Draft').click();


});

test ('hub data DT', async ({ page }) => {

    await page.locator('button[class="ant-btn ant-btn-primary"]').nth(0).click();
    await page.locator('input[type="checkbox"]').nth(6).click();
    await page.locator('button[nztype="primary"]').nth(2).click();

    await page.getByText(' Next ').click();

    await page.locator('nz-select[formcontrolname="modeofTransport"]').click();
    await page.locator('nz-option-item[title="Sea FCL"]').click();

    await page.fill('textarea[formcontrolname="mainCommodities"]', 'test account');

    await page.locator('input[type="search"]').click();

    await page.getByText('An Giang').click();
    await page.getByText('Tri Ton').click();

    await page.locator('nz-select[ng-reflect-nz-place-holder="Please select Vehicle"]').click();
    await page.locator('nz-option-item[title="20DC"]').click();

    await page.fill('input[formcontrolname="availableCapacity"]', "100");

    await page.fill('input[formcontrolname="minimumCapacity"]', "100");
    await page.fill('input[formcontrolname="maximumCapacity"]', "100"); 


    for (let i = 0; i <= 100; i++) {
    const button = page.getByText('Duplicate').nth(`${i}`);
    await expect(button).toBeEnabled();

    await button.click();
    await page.waitForTimeout(1000);
    const hubTransport = page.getByText(`Hub Information ${i+1}`);
    await expect(hubTransport).toBeVisible();


    }







    await page.getByText('Save Draft').click();


}); 