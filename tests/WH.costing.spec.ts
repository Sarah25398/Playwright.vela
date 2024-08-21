

import { beforeEach } from "node:test";

const { test, expect } = require('@playwright/test');

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