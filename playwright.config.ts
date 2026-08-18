import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

const envName = process.env.TEST_ENV || 'qa';
dotenv.config({ path: path.resolve(__dirname, `./config/.env.${envName}`) });

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },

  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  retries: process.env.CI ? 2 : 0,
  forbidOnly: !!process.env.CI,

  reporter: process.env.CI
    ? [
        ['list'],
        ['junit', { outputFile: 'reports/junit/results.xml' }],
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
      ]
    : [
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
        ['json', { outputFile: 'reports/json-report/results.json' }],
        ['junit', { outputFile: 'reports/junit/results.xml' }],
        ['list'],
        ['allure-playwright'],
      ],

  use: {
    baseURL: process.env.URL || 'https://www.saucedemo.com/',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'off',
    headless: true,
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
    },
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    storageState: path.resolve(__dirname, 'auth.json'),
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: path.resolve(__dirname, 'auth.json'),
      },
    },
/*     {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: path.resolve(__dirname, 'auth.json'),
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop WebKit'],
        storageState: path.resolve(__dirname, 'auth.json'),
      },
    },
        {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'],
        storageState: path.resolve(__dirname, 'auth.json'),
      },
    },
        {
      name: 'mobile-firefox',
      use: {
        ...devices['Galaxy S20'],
        storageState: path.resolve(__dirname, 'auth.json'),
      },
    },*/
    
/*         {
      name: 'mobile-webkit',
      use: {
        ...devices['iPhone 12'],
        storageState: path.resolve(__dirname, 'auth.json'),
      },
    },  */
  ],
});
