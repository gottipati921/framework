//npm install csv-parse   npm fund
import {test,expect} from '@playwright/test';
import * as fs from 'fs';
//import path from 'path';
//import jsonData from "../TestData/user.json";
 
const jsonPath = './TestData/user.json';
const loginData= JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

test.describe('login JSON data driven test', async () =>{

 for(const data of loginData)
{

test(`test webShop JSON Login ${data.email} and ${data.password}` ,async ({page}) =>{

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link',{name:'Log in'}).click();
    await page.getByRole('textbox',{name:'Email'}).fill(data.email);
    await page.getByRole('textbox',{name:'Password'}).fill(data.password);
    await page.getByRole('button',{name:'Log in'}).click();
if(data.validity.toLowerCase() == 'valid'){
    const logoutLink = await page.getByRole('link',{name:'Log out'});
    await expect(logoutLink).toBeVisible({timeout:5000});
  } 
    else{
    const errorMessage = await page.locator('.validation-summary-errors span').textContent();
    console.log(errorMessage);
    await expect(errorMessage).toContain('Login was unsuccessful. Please correct the errors and try again.');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    }
page.screenshot({path :`screenshots/JSON/${data.email}_${data.password}_${data.validity}.png`});
});
}

});
