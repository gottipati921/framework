import {test,expect} from '@playwright/test';

test.describe('Sauce Demo - Product Name Verification', () => {

test.beforeEach(async ({page})=>{
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[type="submit"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.screenshot({path:'screenshots/product/login.png', fullPage:true});
    
    });

 //test case 1
test('Verify all ProductNames and PriceItems are visible', async ({page}) => {
 //for each loop
 //method 1
 //space-
    const expectedProducts = await page.locator('.inventory_list .inventory_item .inventory_item_description .inventory_item_label a div[data-test="inventory-item-name"]').allInnerTexts();
    const priceItems = await page.locator('.inventory_list .inventory_item .inventory_item_description .pricebar .inventory_item_price').allInnerTexts();
    await expect(expectedProducts).toHaveLength(6);
    await expect(priceItems).toHaveLength(6);
    console.log(`Product list : ${expectedProducts}`);
    console.log(`Price List: ${priceItems}`);
    await page.screenshot({path:'screenshots/product/name_price_27.png', fullPage:true});
    });

 //test case 2
 test('Verify all Product Count', async ({page}) => {
    const productName = await page.locator('.inventory_list .inventory_item .inventory_item_description .inventory_item_label a div[data-test="inventory-item-name"]').allTextContents();
    console.log(`Product list : ${productName}`);
    //await expect(productName).toContain('Sauce Labs Backpack');
    const productCount = await page.locator('.inventory_list .inventory_item .inventory_item_description .inventory_item_label a div[data-test="inventory-item-name"]');
    const count  = await productCount.count();
    console.log(`Total Products found : ${count}`);
    expect(count).toEqual(6);
    console.log(`Products list : ${productName}`);
    await page.screenshot({path:'screenshots/product/count_25.png', fullPage:true});
    
 });


 //Test case 3
    //verify specific product name is visible
 test('Verify speific product name exists', async ({page}) => {
      const productExpected = await page.locator('.inventory_list .inventory_item .inventory_item_description .inventory_item_label a div').filter({hasText:'Sauce Labs Backpack'});
      console.log(`Product Existence : ${productExpected}`);
      await expect(productExpected).toHaveText('Sauce Labs Backpack');
     // await expect(productExpected).toContainText('Sauce Labs Backpack');
      await page.screenshot({path:'screenshots/product/productExist.png', fullPage:true});
     
    });


   //tets case 4
  test('Verify all expected  product names', async ({page}) => {
    const expected = ['Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket','Sauce Labs Onesie','Test.allTheThings() T-Shirt (Red)'];
    for (const products of expected){
    const productName =await page.locator('.inventory_list .inventory_item .inventory_item_description .inventory_item_label a div').filter({hasText:'Sauce Labs Backpack'});
    await expect(productName).toBeVisible();
    console.log(`Verified Products: ${products}`);
    console.log(`Verified ProductNames: ${productName}`);
    await page.screenshot({path:'screenshots/product/name_26.png', fullPage:true});
    }
});

 test.afterEach(async ({page})=>{
     await page.locator('div[class="bm-burger-button"]').click();
     await page.getByRole('link',{name:'Logout'}).click();
     await page.screenshot({path:'screenshots/product/logout.png', fullPage:true});
    });

});