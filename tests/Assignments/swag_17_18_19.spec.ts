import {test,expect} from '@playwright/test';


test('Open Browser Test', async ({page}) => {
    // Navigate to a website
    await page.goto('http://www.saucedemo.com/',{waitUntil: 'domcontentloaded', timeout: 60_000});
    await page.locator('[name^="user-"]').fill('standard_user');
    await page.locator('[name="password"]').fill('secret_sauce');
    await page.locator('[name$="-button"]').click();
    await page.screenshot({path:'screenshots/CSS/Starts_Ends_17_18.png',fullPage :true});
    //starts with
    //page.locator('[id^="user-"]')
    //ends with
    //page.locator('[attribute$="value"]');
    //getting text and verify
    const item = await page.locator('.inventory_list a div').nth(0).innerText();
    console.log(item);
    await expect(item).toMatch('Sauce Labs Backpack');
    await page.screenshot({path:'screenshots/CSS/text_19_1.png',fullPage :true});
    //getting text and clcik on item
    const itemClick =await page.locator('.inventory_list a div:nth-child(1)').nth(1).click();
    await page.screenshot({path:'screenshots/CSS/text_19_2.png',fullPage :true});
    
});