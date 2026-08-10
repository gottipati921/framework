import {chromium, expect,firefox,test, webkit} from "@playwright/test";

test('Handle new Tab', async()=>{
//test('Handle new Tab', async({browser})=>{
///const context = await browser.newContext();
//test('Handle new Tab', async({context})=>{
///const page = await context.newPage();
    const browser = await chromium.launch();
     //console.log(`chrome launched successfully`)
    const context = await browser.newContext();
/* 
    const firefoxBrowser = await firefox.launch();
     console.log(`firefox launched successfully`)
    const webkitBrowser = await webkit.launch();
    console.log(`webkit launched successfully`) */




// //  /*    /* const page1  = await context.newPage();
// //     await page1.goto('https://testautomationpractice.blogspot.com/');
// //     const page2  = await context.newPage();
// //     await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// //     console.log(context.pages().length);
// //      */ */
    
//     /* 
    
    const parentPage= await context.newPage();
    await parentPage.goto('https://testautomationpractice.blogspot.com/');
    const [childPage] = await Promise.all([context.waitForEvent('page'),
        await parentPage.getByText('New Tab').click()
    ]);
    await parentPage.locator('button:has-text("New Tab")').scrollIntoViewIfNeeded();
   // await parentPage.locator('button:has-text("New Tab")').click();
    //await parentPage.locator("button:has-text('New Tab')").click();
    //button[onclick='myFunction()']
    //await parentPage.locator('button',{hasText:'New Tab'}).click();
    //await parentPage.locator('button:text-is("New Tab")').click();
    //await parentPage.getByText('New Tab', { exact: true }).click();
    await expect(childPage.locator('.titlewrapper .title')).toContainText('SDET-QA Blog');
    //await expect().includes().toBeTruthy();
//appproach 1
    const pages = context.pages();
    console.log(await pages.length);
    console.log(await pages[0].title());
    console.log(await pages[1].title());

 

});