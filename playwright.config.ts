import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html", { outputFolder: "./playwright-report" }],
    ["allure-playwright", { outputFolder: "./allure-results" }],
  ],
  use: {
    baseURL: 'https://www.saucedemo.com', 
    trace: 'on-first-retry',
  },
  timeout: 30_000,
  expect: {
    timeout: 20_000,
  },


  projects: [
    {
      name: 'auth',
      testDir: './src/utils',
      testMatch: 'auth.utils.ts',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
        viewport: { width: 1366, height: 768 } 
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
        viewport: { width: 1366, height: 768 }
      }
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], 
        viewport: { width: 1366, height: 768 }
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
