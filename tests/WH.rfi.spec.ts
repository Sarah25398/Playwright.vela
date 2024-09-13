import { beforeEach } from "node:test";
const path = require('path');


const { test, expect } = require('@playwright/test');

test.beforeEach('Login', async ({ context,page }) => {

    await context.clearCookies();
    await page.goto('https://supplier-dev2.vela.com.vn/');
    await page.fill('input[id="username"]', 'vinagame@yopmail.com');
    await page.fill('input[id="password"]', 'Hello@123');
    
    await page.click('button[type="submit"]'); 

});

test('create multiple WH rfi', async ({ page }) => { 
    for (let i = 0; i < 50; i++) {

    await page.locator('button[class="ant-btn ant-btn-primary"]').nth(0).click();
    await page.locator('input[type="checkbox"]').nth(7).click();
    await page.locator('button[nztype="primary"]').nth(2).click();
    await page.getByText(' Next ').click();

    await page.getByText('Add location').nth(0).click();

    await page.locator('input[type="search"]').click(); 
    await page.getByText('An Giang').click();
    await page.getByText('Phu Tan').click();


    
    await page.waitForTimeout(500);
    

    await page.locator('nz-select[formcontrolname="specifications"]').click();

    await page.getByText('Frozen').click(); 
    await page.getByText(' Please select your Warehouse specifications ').click(); 
    await page.fill('input[formcontrolname="minimum"]', '-2');
    await page.fill('input[formcontrolname="maximum"]', '2');
    await page.locator('nz-select[formcontrolname="facilityTypes"]').click();

    await page.getByText('Carton Shelving').click(); 

    await page.fill('input[formcontrolname="maximumCarbonPayload"]', '2');

    await page.fill('input[formcontrolname="carbonMonth"]', '2');

    await page.locator('input[formcontrolname="length"]').nth(0).fill('99');

    await page.locator('input[formcontrolname="width"]').nth(0).fill('99');

    await page.locator('input[formcontrolname="height"]').nth(0).fill('99');

    await page.fill('input[formcontrolname="palletMonth"]', '2');

    await page.fill('input[formcontrolname="maximumPalletPayload"]', '2');

    await page.locator('input[formcontrolname="length"]').nth(1).fill('99');

    await page.locator('input[formcontrolname="width"]').nth(1).fill('99');

    await page.locator('input[formcontrolname="height"]').nth(1).fill('99'); 
    await page.locator('label[nzvalue="Forklift"]').click();

    await page.locator('nz-select-top-control[ng-reflect-mode="multiple"]').nth(2).click(); 

    await page.locator('nz-option-item[title="CCTV"]').click();

    await page.getByText(' Next ').click();

    await page.locator('button[nztype="primary"]').nth(2).click();

    await page.getByText(' Skip & Submit ').click();

    await page.getByText(' OK ').click(); }





})
