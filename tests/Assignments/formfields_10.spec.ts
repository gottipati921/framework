import {test,expect} from '@playwright/test';
test('all types',async ({page}) =>
    {
    await page.goto("https://practice-automation.com/form-fields/")
    await page.getByRole('textbox', { name: 'Name' }).fill("John");
    await page.getByRole('textbox', { name: 'Password' }).fill("Admin@123");
 
//* normal flow
   await page.getByRole('checkbox', { name: 'Water'}).check();
    await page.getByRole('radio', { name: 'Green'}).check();
    await page.getByRole('combobox').selectOption('Yes');
    //await page.locator('select[name="automation"]').selectOption("Yes");
    await page.getByRole('textbox', { name: 'Email' }).fill("sumana@gmail.com");
    await page.getByRole('textbox', { name: 'Message' }).fill("I am using this page");
    //await page.getByRole('button', { name: 'Submit' }).click(); 
    await page.screenshot({path:'screenshots/formField_10.png',fullPage:true});

});