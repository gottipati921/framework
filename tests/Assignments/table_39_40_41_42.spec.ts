import {test,expect} from '@playwright/test'

test('shadow DOM test', async ({page}) =>{

await page.goto('https://selectorshub.com/xpath-practice-page/');
const user = await page.getByRole('heading',{name:'User Table'}).scrollIntoViewIfNeeded();
await page.screenshot({path:'screenshots/Tables/table_1.png'});
const promisePage = page.context().waitForEvent('page');

page.on('dialog', async (dialog) => {
        console.log(`Encountered dialog type: ${dialog.type()}`);

         if(dialog.type()==='Confirm'){
             page.screenshot({ path:'screenshots/Tables/table_5.png'});
            await dialog.dismiss();
           
         }   
        });    
const userTable = page.locator('table').filter({hasText:'Username'});
const userTableText = await userTable.textContent();
console.log(`userTableText: ${userTableText}`);
await page.screenshot({path:'screenshots/Tables/table_2.png'});

const headers =  await userTable.locator('thead th').allTextContents();
console.log(`all headers: ${headers}`);

const userRows = userTable.locator('tbody tr');
const count = await userRows.count();
console.log('all userRows:',count);
console.log('all userRows:${userRows}');

const userNames = await userRows.locator('td a');
const userNamesText = await userNames.allTextContents();
console.log(`all userNamesText: ${userNamesText}`);


await userRows.nth(0).locator('td').allTextContents().then((text) => {
    console.log(`first row text: ${text}`);
});

 for (let i=0;i<count;i++)
    {
   
       const alluserRows = await userRows.nth(i).locator('td').allTextContents();
        console.log(`row${i}:${alluserRows}`)
    }


  await userRows.filter({hasText:'John'}).getByRole('link').click();
  await page.screenshot({path:'screenshots/Tables/table_3.png'});
  
  const newPage = await promisePage;
  await expect(newPage).toHaveURL('https://www.youtube.com/c/SelectorsHub');
  await newPage.screenshot({path:'screenshots/Tables/table_4.png',fullPage:true});
});
