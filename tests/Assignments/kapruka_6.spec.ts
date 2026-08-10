import {test,expect} from '@playwright/test';

test('Open Browser Test', async ({page}) => {
    // Navigate to a website
    await page.goto('http://www.kapruka.com/');
    await page.getByRole('link', {name:'Login to your Account'}).click();
    const accountLogin = page.getByRole('heading', {name:'Kapruka Members'});
    await expect(accountLogin).toBeVisible();
    await page.screenshot({path:'screenshots/fullPage1.png',fullPage:true});
    await page.getByRole('button', {name:'Create Account'}).click();
    const accountTitle = page.getByRole('heading', {name:'Create a New Kapruka Account'});
    await expect(accountTitle).toBeVisible();
    await page.screenshot({path:'screenshots/fullPage2.png',fullPage:true});

    //await expect(page).toHaveTitle('Example Domain');

});