import {test,expect,Locator} from '@playwright/test';

test('Pagination Table', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');

   let  hasMorePages = true;
   while(hasMorePages)
  {
    const rows = await page.locator('#example tbody tr').all();

    for(let row of rows)
    {
       console.log(await row.innerText());
    }

    const nextButton:Locator = page.locator('#example_next');
    const isDisabled = await nextButton.getAttribute('class');
    if(isDisabled?.includes('disabled'))
    {
     hasMorePages = false;
    }
    else
    {
    await nextButton.click();
    }

  }
});

  test('filter the rows and check the rows count',async ({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');

    const dropDown:Locator = await page.locator('#example_length label select');// #example_length>label>select
    //await dropDown.selectOption('-1');
    await dropDown.selectOption({index:3});
    //await dropDown.selectOption({label:'All'});

    //'all' returns all rows in form of array which are in the form of locators for given xpath
      const rows = await page.locator('#example tbody tr').all();
      expect(rows.length).toBe(10);

      const rows2 = page.locator('#example tbody tr');
      await expect(rows2).toHaveCount(10);

         for(let row of rows)
    {
       console.log(await row.innerText());
    }
 });


  test.only('Search specific record',async ({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');

    const searchBox:Locator = page.locator('input[type="search"]');
    await searchBox.fill('John');

    //'all' returns all rows in form of array which are in the form of locators for given xpath
      const rows = await page.locator('#example tbody tr').all();

  if(rows.length>=1){
    let matchFound = false;
     for(let row of rows)
    {
       const reqText = await row.innerText();
       if (reqText.includes('John Doe')){
        console.log('Required Data is Present');
        matchFound =true;
        break;
       }
    }
  }
  else{
    console.log("No rows found");
  }
    
 });

