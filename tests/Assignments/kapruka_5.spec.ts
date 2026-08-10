import {test,expect} from '@playwright/test';

test('Open Browser Test', async ({page}) => {
    // Navigate to a website
    await page.goto('http://www.kapruka.com/');
    await page.getByRole('link', {name:'Login to your Account'}).click();
    const accountLogin = page.getByRole('heading', {name:'Kapruka Members'});
    await expect(accountLogin).toBeVisible();
    page.screenshot({path:'screenshots/kapruka_5_1.png'});
    page.getByRole('button', {name:'Create Account'}).click();
    const accountTitle = page.getByRole('heading', {name:'Create a New Kapruka Account'});
    await expect(accountTitle).toBeVisible();
    page.screenshot({path:'screenshots/kapruka_5_2.png'});
    });