import {test,expect} from '@playwright/test'

test('handle window', async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/windows');

 //function to handle incognito mode of browser
 //to handle new pages   
    const promisePage = page.context().waitForEvent('page');
    await page.getByRole('link',{name: 'Click Here'}).click();
    await page.screenshot({path:'screenshots/windows/screenshot1.png',omitBackground:true});

    const newPage = await promisePage;
    
   // await expect(newPage).toHaveTitle(/New Window/);
    await expect(newPage).toHaveTitle('New Window');
    //await page.getByRole('heading',{name:'New Window'}).screenshot({path:'Screeenshots/screenshot2.png'});
    await newPage.screenshot({path:'screenshots/windows/screenshot2.png',fullPage:true});

    //PW is switching pages
    await page.getByRole('link',{name: 'Click Here'}).focus();
    // Apply a custom thick red border
    await page.getByRole('heading',{name:'Opening a new window'}).highlight({ style: 'outline: 3px solid red' });
    await page.screenshot({path:'screenshots/windows/screenshot3.png',fullPage:true});

});