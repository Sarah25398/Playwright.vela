

import { beforeEach } from "node:test";

const { test, expect } = require('@playwright/test');

test.beforeEach('Login', async ({ context,page }) => {

    await context.clearCookies();
    await page.goto('https://supplier-dev2.vela.com.vn/');
    await page.fill('input[id="username"]', 'resano4555@hutov.com');
    await page.fill('input[id="password"]', 'Hello@123');
    
    await page.click('button[type="submit"]'); 

}); 

test('test costing DT', async ({ page }) => {

    let element1 = page.locator('div[ng-reflect-nz-title="Costing"]');
    await element1.hover();
    await page.getByText('Costing List').click();

    
    await page.locator('button[class="ant-btn ant-btn-primary"]').nth(0).click({setTimeout:10000});

    await page.locator('input[type="radio"]').nth(1).click();
 //click Vas checkbox 
    await page.locator('input[type="radio"]').nth(5).click(); 
    await page.getByText(' Next ').click();

    await page.getByText(' Next ').click(); 
    
    await page.locator('nz-select[formcontrolname="modeofTransport"]').click();

    await page.locator('nz-option-item[title="Sea FCL"]').click(); 
    //select data date picker  
    await page.locator('nz-range-picker[nzformat="dd/MM/yyyy"]').click();

    await page.locator('td[class="ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today ng-star-inserted"]').click();
    await page.locator('td[title="10/12/2024"]').click();

    await page.locator('nz-select[ng-reflect-nz-place-holder="Select Charge Name"]').click(); 
    await page.locator('input[type="checkbox"]').nth(1).click(); 


    await page.getByText(' Mode of Transports ').click();

    await page.locator('nz-select[ng-reflect-nz-place-holder="Select Unit"]').click();

    await page.locator('nz-option-item[ng-reflect-title="container"]').click();
    //select mode of transport 

    const repeatCount = 3;
    for (let i = 0; i < repeatCount; i++) {
     console.log(`Iteration: ${i + 1}`);


     await page.locator('span[nztype="plus"]').click(); 

     await page.locator('nz-select[formcontrolname="modeofTransport"]').click();

     await page.locator('nz-option-item[title="Sea FCL"]').click(); 
     //select data date picker  
     await page.locator('nz-range-picker[nzformat="dd/MM/yyyy"]').click();

     await page.locator('td[class="ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today ng-star-inserted"]').click();
     await page.locator('td[title="10/12/2024"]').click();

     await page.locator('nz-select[ng-reflect-nz-place-holder="Select Charge Name"]').click(); 

     await page.locator('nz-option-item[ng-reflect-title="Dangerous surcharge"]').click();

     await page.locator('nz-select[ng-reflect-nz-place-holder="Select Unit"]').click();

     await page.locator('nz-option-item[ng-reflect-title="container"]').click(); 
    } 




});

test.afterEach(async ({ page }) => {
    // Ensure page is closed properly
    await page.close();
});