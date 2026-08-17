import {test,expect} from '@playwright/test';

const loginTestData:string[][] = [
['gsumana07@gmail.com','admin@123','valid'],
['admin@gmail.com','admin@123','invalid'],
['gsumana07@gmail.com','admin123','invalid'],
['','','invalid']
];

test.describe('login data driven test', async () =>{
for(const [email,password,validity] of loginTestData)
{

test(`test webShop Login ${email} and ${password}` ,async ({page}) =>{

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link',{name:'Log in'}).click();
    await page.getByRole('textbox',{name:'Email'}).fill(email);
    await page.getByRole('textbox',{name:'Password'}).fill(password);
    await page.getByRole('button',{name:'Log in'}).click();
if(validity.toLowerCase() == 'valid'){
    const logoutLink = await page.getByRole('link',{name:'Log out'});
    await expect(logoutLink).toBeVisible({timeout:5000});
  } 
/* else if(validity.toLowerCase() == 'invalid_email'){
    const errorMessage =await page.locator('.field-validation-error span').textContent();
    console.log(errorMessage);
    await expect(errorMessage).toContain('Please enter a valid email address.');
    //await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
} */
    else{
    const errorMessage = await page.locator('.validation-summary-errors span').textContent();
    console.log(errorMessage);
    await expect(errorMessage).toContain('Login was unsuccessful. Please correct the errors and try again.');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    }
page.screenshot({path :`screenshots/demoWebStore/${email}_${password}_${validity}.png`});
});
}
});

