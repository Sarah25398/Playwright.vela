import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where your test files are located
  timeout: 3000000, // Maximum time one test can run
  expect: {
    timeout: 5000, // Maximum time expect() should wait for the condition to be met
  },
  fullyParallel: true, // Run tests in files in parallel
  forbidOnly: !!process.env.CI, // Fail on test.only() in CI
  retries: process.env.CI ? 2 : 0, // Retry on CI only
  workers: process.env.CI ? 1 : undefined, // Limit the number of workers on CI
  reporter: 'html', // Use html reporter
  use: {
    headless: false, // Run tests in headless mode or not
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0, // Maximum time each action can take
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],

});
