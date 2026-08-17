import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  console.log('URL:', process.env.URL);
  console.log('Username:', process.env.USER);
  console.log('Password:', process.env.PASSWORD);
  await page.goto(process.env.URL as string);
  await page.locator('#user-name').fill(process.env.USER as string);
  await page.locator('#password').fill(process.env.PASSWORD as string);
  await page.locator('#login-button').click();
  await page.screenshot({path:'screenshots/JPEG_7.jpeg',type:'jpeg',quality:80});
});