import {test,expect} from '@playwright/test';
   
     test('iterate mentioned checkboxContent',async ({page}) =>{
        // Wait for network idle (useful for Single Page Applications/SPAs)
        await page.goto("https://practice-automation.com/form-fields/", { waitUntil: 'networkidle' })
        await page.getByRole('textbox', { name: 'Name' }).fill("John");
        await page.getByRole('textbox', { name: 'Password' }).fill("admin@123");

//method 1
    await expect(await page.getByRole('checkbox',{name:'Water'})).not.toBeChecked();
    const checkbox = await page.locator('input[type="checkbox"]');
    const checkboxesCount = await page.locator('input[type="checkbox"]').count();
    console.log(`checkboxes: ${checkboxesCount}`);
    for (let i=0;i<checkboxesCount;i++){
        await checkbox.nth(i).check();
    }
    await page.screenshot({path:'screenshots/practice/checkbox_14_1.png',fullPage:true });  
   // iteration to uncheck
      const totcheckboxes = await checkbox.all();
      for (let i=0;i<totcheckboxes.length;i++){
        await checkbox.nth(i).uncheck();
    }
    await page.screenshot({path:'screenshots/practice/checkbox_14_2.png',fullPage:true });  
    // to get checkbox value
    for(let checkbox of totcheckboxes){
        const text = await checkbox.getAttribute('value');
        console.log(`checkbox content:${text}`);
    }  
//method 2
  //iterate and check
        totcheckboxes.forEach((item)=>{
           //await item.nth(0).check();  
                 
    });
    await page.screenshot({path:'screenshots/practice/checkbox_14_3.png',fullPage:true});
    //
    const checkboxValues:string[] = await page.locator('input[type="checkbox"]+label').allTextContents();
    checkboxValues.forEach((checkboxValue)=>{
        console.log(`each text value is: ${checkboxValue}`);
    });
   
    await page.close();

});
