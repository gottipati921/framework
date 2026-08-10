import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment-specific .env file
const env = process.env.TEST_ENV || 'qa';
dotenv.config({ path: path.resolve(__dirname, `config/.env.${env}`) });

export default defineConfig({

  // ─── Test Directory ──────────────────────────────────────────────────────────
  testDir: './tests',

  // ✅ ONLY THIS (no setup project)
 // globalSetup: './tests/global.setup.ts',

  // ─── Global Timeout ──────────────────────────────────────────────────────────
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },

  // ─── Parallel Execution ──────────────────────────────────────────────────────
  fullyParallel: false,
  workers: 3,

  // ─── Retry Mechanism ─────────────────────────────────────────────────────────
  retries: process.env.CI ? 2 : 0,

  // ─── Fail Fast ───────────────────────────────────────────────────────────────
  forbidOnly: !!process.env.CI,

  // ─── Reporters ───────────────────────────────────────────────────────────────
  reporter: [
    //['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['html'],
    ['json', { outputFile: 'reports/json-report/results.json' }],
    ['junit', { outputFile: 'reports/junit/results.xml' }],
    ['list'],
   // ['line'],
    //['dot'],
    ['allure-playwright'],

  ],

  // ─── Shared Settings ─────────────────────────────────────────────────────────
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',

    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,

    screenshot: 'on',
    video: 'on',
    trace: 'on',

    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
    },

    actionTimeout: 15_000,
    navigationTimeout: 30_000,

    // ✅ APPLY AUTH HERE GLOBALLY
    storageState: 'auth.json',
  },

  // ─── Output Folder ───────────────────────────────────────────────────────────
  //outputDir: 'reports/test-artifacts/',
  // outputDir: 'reports/my-test-artifacts/',

  // ─── Projects ────────────────────────────────────────────────────────────────
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome'],
        storageState: path.resolve(__dirname, 'auth.json'),
      },
    },
    /*  {
      name: 'firefox',
      use: {
        ...devices['Desktop Chrome'],
        //storageState: path.resolve(__dirname, 'auth.json'),
      },
    },
     {
      name: 'webkit',
      use: {
        ...devices['Desktop Chrome'],
        //storageState: path.resolve(__dirname, 'auth.json'),
      }, 
    }, */
  ],
});