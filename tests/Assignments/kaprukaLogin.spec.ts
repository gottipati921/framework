import {test,expect} from '@playwright/test';

test('Kapruka Login Test', async ({page}) => {
  await page.goto('https://www.kapruka.com/');
  await page.getByAltText('Account Icon').click();
  await page.locator('input[name="email"]').fill('gsumana@gmail.com');
  await page.locator('input[name="password"]').fill('test1');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByPlaceholder('SEARCH PRODUCTS..', { exact: true })).toBeVisible();
  await page.getByText('Logout from your account').click();
 //full page screenshot with jpeg format
  await page.screenshot({ path: 'screenshots/test1.jpeg', fullPage: true, type: 'jpeg',quality: 80 });
  });