import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //npx playwright codegen https://www.kapruka.com/
  await page.goto('https://www.kapruka.com/');
  await page.getByRole('link', { name: 'Login to Your Account' }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('sumana');
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').fill('gottipati');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('gottipatisumana@gmail.com');
  await page.locator('#kapAccNewPwd-createInput').click();
  await page.locator('#kapAccNewPwd-createInput').fill('admin@123');
  await page.locator('#kapAccNewPwd-confirmInput').click();
  await page.locator('#kapAccNewPwd-confirmInput').fill('admin@123');
  await page.getByRole('button', { name: 'Create Account' }).click();
});
 