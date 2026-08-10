import {test, expect} from '@playwright/test';

test('Login using getByPlaceholder', async ({page}) => {

    await page.goto('https://www.practice-automation.com//');
    const pagePromise = page.context().waitForEvent('page');
    await page.getByText('About').scrollIntoViewIfNeeded();
    await page.getByRole('link',{name:'About'}).click();
    await page.screenshot({ path:'screenshots/Scroll/scrollToView22_1.png'});
    // Interact with the new page normally.
    const newPage = await pagePromise;
     await expect(newPage.getByRole('heading',{name:'About Us'})).toBeVisible();
    await newPage.getByText('Home').click();
    console.log(await newPage.title()); 
    await newPage.screenshot({ path:'screenshots/Scroll/scrollToView22_2.png'});

  //scroll with respect to wheel Pixels
    // Scroll down by 500 pixels
     await page.mouse.wheel(0, 500);
     await page.screenshot({ path:'screenshots/Scroll/PixelsDown23_1.png'});
   // Scroll up by 200 pixels
     await page.mouse.wheel(0, -200);
     await page.screenshot({ path:'screenshots/Scroll/PixelsUp23_2.png'});

  //scroll using evaluate
  //method1
  // Scroll instantly to the bottom of the page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.screenshot({ path:'screenshots/Scroll/bottomScrollEvaluate24_1.png'});
 //method2
 // Scroll down by 800 pixels
   await page.evaluate(() => window.scrollBy(0, 800));
   await page.screenshot({ path:'screenshots/Scroll/downScrollEvaluate24_2.png'});
// Scroll up by 300 pixels
   await page.evaluate(() => window.scrollBy(0, -300));
   await page.screenshot({ path:'screenshots/Scroll/upScrollEvaluate24_3.png'});
  
});
