import {test,expect} from '@playwright/test'

test('shadow DOM test', async ({page}) =>{

await page.goto('https://selectorshub.com/xpath-practice-page/');
//await page.evaluate(() => window.scrollBy(0, 1200));
await page.mouse.wheel(0, 2000);
const requiredField = page.getByRole('textbox',{name:'user name field'});
await requiredField.scrollIntoViewIfNeeded();
//await page.getByRole('link',{name:'Learn XPath & Advance Automation Concepts'}).scrollIntoViewIfNeeded;
await requiredField.fill('sumana');
await page.getByPlaceholder('Enter pizza name').fill('margeritha');
await page.getByPlaceholder('enter password').fill('test');
await page.screenshot({ path:'screenshots/ShadowDOM32.png'});

});