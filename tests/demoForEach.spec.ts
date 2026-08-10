import {test,expect} from '@playwright/test';

const searchItems:string[] = ['laptop','smartphone','gift card'];

/* //using for each loop
for (const item of searchItems){

test(`demoWebShop Search for ${item}`, async ({page}) => {
await page.goto('https://demowebshop.tricentis.com/');
await page.locator('input[value="Search store"]').fill(item);
await page.locator('[type="submit"]').click();
await expect(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});

});
}
 */

//Method 2
//using for each function
/* searchItems.forEach((item)=>{
test(`demoWebShop Search for ${item}`, async ({page}) => {
await page.goto('https://demowebshop.tricentis.com/');
await page.locator('input[value="Search store"]').fill(item);
await page.locator('[type="submit"]').click();
await expect(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});

});
}); */

//method 3
test.describe('test search items', async () =>{
searchItems.forEach((item)=>{
test(`demoWebShop Search for ${item}`, async ({page}) => {
await page.goto('https://demowebshop.tricentis.com/');
await page.locator('input[value="Search store"]').fill(item);
await page.locator('[type="submit"]').click();
await expect(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});
page.screenshot({path :`screenshots/demoWebStore_${item}.png`});
});
});
});