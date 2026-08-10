import {test,expect,chromium} from '@playwright/test';


test('Login using getByPlaceholder', async ({page}) => {

    await page.goto('https://www.saucedemo.com/');
    //await page.setViewportSize({ width: 1920, height: 1080});
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products',{exact:true})).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.screenshot({ path:'screenshots/sauceDemoLogin2.png'});
    await page.close();
});