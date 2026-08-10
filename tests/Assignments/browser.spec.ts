import {test} from 'playwright/test';
const { chromium } = require('playwright');

test('browser launch' , (async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://the-internet.herokuapp.com/login'); // Asynchronous
  await page.getByRole('textbox',{name:'Username'}).fill('text');
  await page.getByRole('textbox',{name:'Password'}).fill('text');
  await page.locator("text= Login").click();

  console.log(await page.title()); // Fetching title asynchronously

  //await browser.close();
}));