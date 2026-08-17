import {test,expect,Locator} from '@playwright/test';

test('get text', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

//You can pass hasText as an option to the page.locator() method to narrow down your selection
//It accepts either a String or a Regular Expression.
// Matching is case-insensitive and searches for a substring when a string is used.
// Finds a list item that contains the text "Product 2"
const product = page.locator('ul.top-menu li a', { hasText: 'Computers' });
await product.click();

 //Using .filter()
  //If you already have a locator with multiple matches, you can use .filter() to find the specific element containing the text  
  // Filters the list items to find the one with "Product 2"
  const product2 = page.locator('.item-box').filter({ hasText: 'Notebooks' });
await product2.click(); 

//Using the :has-text() CSS Pseudo-class
//Playwright extends standard CSS selectors with custom pseudo-classes like :has-text("...")
// Matches any <article> that has "Playwright" inside it
const article = page.locator('ul li strong:has-text("Memory")');
await expect(article).toBeVisible();
await page.close();
});