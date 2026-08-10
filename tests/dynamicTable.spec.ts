import {test,expect,Locator} from '@playwright/test';
import { text } from 'stream/consumers';

test('Dynamic Table', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-table');
    const table:Locator = page.locator('table.table tbody');
    await expect(table).toBeVisible();
//read each row to check chrome presence 
    const rows:Locator[] = await table.locator('tr').all();
    console.log(rows.length);
    expect(rows).toHaveLength(4);
    let cpuLoad='';
    for(const row of rows)
    {
       const processName = await row.locator('td').nth(0).innerText();
       if(processName==="Chrome")
        {
        cpuLoad =  await row.locator('td',{hasText : '%'}).innerText();
        console.log(cpuLoad);
        break;
        }
                  
    }
    let yellowbox:string = await page.locator('#chrome-cpu').innerText();

     if (yellowbox.includes(cpuLoad))
        console.log('Pass');
    else
        console.log('Fail');  

});
