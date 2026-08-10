import {test,expect} from '@playwright/test'

test('shadow DOM test', async ({page}) =>{

await page.goto('https://selectorshub.com/xpath-practice-page/');
//await page.evaluate(() => window.scrollBy(0, 1200));
await page.mouse.wheel(0, 2000);
//await page.getByRole('link',{name:'Learn XPath & Advance Automation Concepts'}).scrollIntoViewIfNeeded;
await page.getByRole('textbox',{name:'user name field'}).fill('sumana');
await page.getByPlaceholder('Enter pizza name').fill('margeritha');
await page.locator('#userPass').getByRole('textbox',{name:'user password field'}).fill('test');
await page.screenshot({ path:'screenshots/ShadowDOM32.png'});

});