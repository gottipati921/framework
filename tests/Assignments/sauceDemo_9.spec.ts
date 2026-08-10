import {test,expect} from '@playwright/test';

test('Login to sauce demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com/', {waitUntil: 'domcontentloaded', timeout: 60_000});
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const inventoryTitle = await page.locator('div .title').textContent();
    await expect(inventoryTitle).toBe('Products');
    await page.screenshot({path:'screenshots/omittedBackground.png',omitBackground:true});
    await page.close();
});

