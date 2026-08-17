import { test, expect, chromium } from '@playwright/test';

test('Extract all text contents from a webpage', async () => {
  // 1. Launch the browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // 2. Navigate to the target URL
  await page.goto('https://playwright.dev/');

  // 3. Locate all the elements (e.g., list items in a sidebar)
  await page.getByRole('button',{name:'Node.js'}).click();

  // 4. Extract all text contents into an array of strings
  //const textArray: string[] = await page.locator('.dropdown__menu li').allTextContents();
  const textArray: string[] = await page.locator('.dropdown__menu li').allInnerTexts();
  
  // 5. Output the results to the console
  console.log('Extracted Text Content or Inner Text:', textArray);

  await browser.close();
});