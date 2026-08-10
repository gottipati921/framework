import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[name="user-name"]').fill('standard_user');
  await page.locator('[name="password"]').fill('secret_sauce');
  await page.locator('[name="login-button"]').click();
  await page.screenshot({path:'screenshots/JPEG_7.jpeg',type:'jpeg',quality:80});
});