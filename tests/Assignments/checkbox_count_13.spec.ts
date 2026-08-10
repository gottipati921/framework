import {test,expect} from '@playwright/test';

 test.describe('checkboxes',()=>{

  test.beforeEach(async ({page}) =>{
        await page.goto("https://practice-automation.com/form-fields/")
        await page.getByRole('textbox', { name: 'Name' }).fill("John");
        await page.getByRole('textbox', { name: 'Password' }).fill("admin@123");
    });

    //test1
test('iterate mentioned checkboxes',async ({page}) =>{
    //method 1
    const drinks = ['Water','Coffee','Wine'];
    for(const drink of drinks)
    {
        await page.getByRole('checkbox',{name:drink}).click();
    }
    await page.screenshot({path:'screenshots/practice/checkbox_13_1.png',fullPage:true});
    });
    
    //test2
 test('iterate all checkboxes',async ({page}) =>{
    ///method 2
    const newCheckboxes = page.locator('[type="checkbox"]');
    const countcheckboxes = await newCheckboxes.count();
    console.log(`total checkboxes:${countcheckboxes}`); 
    newCheckboxes.first().check();
    newCheckboxes.first().uncheck();
    newCheckboxes.last().check();
    newCheckboxes.last().uncheck();
    newCheckboxes.nth(1).check();
    newCheckboxes.nth(1).uncheck();
    const text0 = await newCheckboxes.first().getAttribute('value');
    const text1 = await newCheckboxes.nth(3).getAttribute('value');
    console.log(`checkbox content:${text0}`);
    console.log(`checkbox content:${text1}`);
        
    for (let i=0;i<countcheckboxes;i++)
    {
        const text = await newCheckboxes.nth(i).getAttribute('value');
        console.log(`checkbox content:${text}`);
    }
       
    for (let i=0;i<countcheckboxes;i++)
    {
   
        await newCheckboxes.nth(i).check();
    }

     await page.screenshot({path:'screenshots/practice/checkbox_13_2.png',fullPage:true});


});

test.afterEach(async ({page}) =>{  
     await page.close();
});


 });