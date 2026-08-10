import {test,expect,chromium} from '@playwright/test';

test('selectorshub', async ({ page }) =>
    {
  await page.goto('https://selectorshub.com/xpath-practice-page/');
  await expect(page).toHaveURL('https://selectorshub.com/xpath-practice-page/');
  await page.locator('[name="email"]').click();
  await page.locator('[name="email"]').fill('test@gmail.com');
  await page.locator('[name="Password"]').click();
  await page.locator('[name="Password"]').fill('test');
  await page.locator('.element-companyId [placeholder="Enter your company"]').scrollIntoViewIfNeeded(({timeout: 5000}));
  await page.locator('.element-companyId [placeholder="Enter your company"]').click();
  await page.locator('.element-companyId [placeholder="Enter your company"]').fill('techmahindra');
  await page.locator('.element-companyId [placeholder="Enter your mobile number"]').scrollIntoViewIfNeeded(({timeout: 5000}));
  await page.locator('.element-companyId [placeholder="Enter your mobile number"]').click();
  await page.locator('.element-companyId [placeholder="Enter your mobile number"]').fill('123456789');
  await page.locator('label input[type="text"]').scrollIntoViewIfNeeded(({timeout: 5000}));
  await page.locator('label input[type="text"]').click();
  await page.locator('label input[type="text"]').fill('India');
  page.screenshot({path:'screenshots/selectorshub_16.png'});
 
});