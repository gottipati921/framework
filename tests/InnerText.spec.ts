import {test,expect,Locator} from '@playwright/test';

test('get text', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    const menu =  page.locator('.header-menu>ul.top-menu>li>a');
    const menuItems = await page.locator('.header-menu>ul.top-menu>li>a').allInnerTexts();
    //textContent will take gaps also
    const menuItems2 = await page.locator('.header-menu>ul>li>a').allTextContents();
    console.log(menuItems);
    console.log(menuItems2);
    await page.getByRole('link',{name:'BOOKS'}).first().click();
    const productList = await page.locator('.product-title').allInnerTexts();
    console.log(productList);
    await page.screenshot({path: 'screenshots/InnerText/screenshot_InnerText.png',fullPage:true});
    await page.locator('.product-title').nth(3).click();
    await page.screenshot({path: 'screenshots/InnerText/screenshot_Item.png',fullPage:true});
    await page.locator('.product-title').filter({hasText:'Computing and Internet'}).click();

     //const books:Locator =  page.locator('.product-title');
    const menuitemsTrimmed:string[] =  menuItems2.map(text=>text.trim());
    console.log(menuitemsTrimmed);

      //all method--to get locator using for of loop---products are webelements contianing locators

      const products = await menu.all();
      console.log(products);
      for(let product of products){
       console.log(await product.innerText());
      }
      
});

//use locator.textContent() to extract all inner text, including hidden text, spaces, and line breaks.
// locator.innerText() to extract only the visible text as rendered on the screen, respecting CSS styling.
// 3. Get text value from a form field/input.Returns the text currently filled inside form inputs, textareas, or select boxes.

//const inputValue = await page.locator('input[type="text"]').inputValue();

//array format--innertext and textcontent



