//install-> npm install csv-parse
import {test,expect} from '@playwright/test';
import path from 'path';
import * as fs from 'fs';
import {parse} from 'csv-parse/sync';

const csvPath = './TestData/user.csv';
const fileContent = fs.readFileSync(csvPath,'utf-8');
const records = parse(fileContent,
    {
        columns:true,
        skip_empty_lines:true
    }) as any[];

test.describe('login csv data driven test', async () =>{

for(const record of records){

test(`test webShop CSV Login ${record.email} and ${record.password}` ,async ({page}) =>{

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link',{name:'Log in'}).click();
    await page.getByRole('textbox',{name:'Email'}).fill(record.email);
    await page.getByRole('textbox',{name:'Password'}).fill(record.password);
    await page.getByRole('button',{name:'Log in'}).click();

if(record.validity.toLowerCase() == 'valid'){
    const logoutLink = await page.getByRole('link',{name:'Log out'});
    await expect(logoutLink).toBeVisible({timeout:5000});
  } 
    else{
    const errorMessage = await page.locator('.validation-summary-errors span').textContent();
    console.log(errorMessage);
    await expect(errorMessage).toContain('Login was unsuccessful. Please correct the errors and try again.');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    }
page.screenshot({path :`screenshots/CSV/${record.email}_${record.password}_${record.validity}.png`});
});
}

});
