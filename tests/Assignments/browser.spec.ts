import {test,expect,chromium} from '@playwright/test';

test('test',async ()=>{
   const browser = await chromium.launch();
   const context = await browser.newContext();
   const page1 = await context.newPage();
   const page2 = await context.newPage();
   console.log("no of pages created:", context.pages().length);
   
   await page1.goto("https://testautomationpractice.blogspot.com/");
   
   await expect(page1).toHaveTitle('Automation Testing Practice');

   await page2.goto("https://demowebshop.tricentis.com/")
   
   await expect(page2).toHaveTitle('Demo Web Shop');

await page1.waitForTimeout(3000);
await page1.waitForTimeout(3000);
}
);