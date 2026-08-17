import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 15'] });

test('Conditional behavior based on project', async ({ page }, testInfo) => {
  // Access the current project name
  const projectName = testInfo.project.name;
  console.log(`Currently running on project: ${projectName}`);

/* test('test mobile view', async ({ page },testInfo) => { */
  await page.goto('https://saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  //await page.screenshot({path:'screenshots/iphone15.png',fullPage:true});
  // Saves distinct files: screenshot-chromium.png, screenshot-firefox.png, etc.
  await page.screenshot({ 
    path: `screenshots/${testInfo.project.name}.png`,
    fullPage: true // Optional: captures the full scrollable page
  });
});

