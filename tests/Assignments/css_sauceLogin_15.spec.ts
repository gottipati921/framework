
import {test,expect} from '@playwright/test'

test('css login sauceDemo', async ({page}) => {
await page.goto('https://saucedemo.com/');
await expect(page).toHaveURL('https://www.saucedemo.com/');
 await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
 page.screenshot({path:'screenshots/css_loginsauce_15.png'});


});
