import {test,expect} from 'playwright/test';
const { chromium } = require('playwright');

test('browser launch' , (async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://the-internet.herokuapp.com/login'); // Asynchronous
  await page.getByRole('textbox',{name:'Username'}).fill('tomsmith');
  await page.getByRole('textbox',{name:'Password'}).fill('SuperSecretPassword!');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
  await expect(page).toHaveTitle('The Internet');
  await browser.close();
}));