import {test,expect} from "playwright/test";

test.describe('test frames', () => {

//test1 
test('Nested Frames Test', async ({page}) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.getByRole('link',{name:'Iframe with in an Iframe'}).click();
    //await page.locator('a[href="#Multiple"]').click();
    //switch to outer frame
    const outerFrame = await page.frameLocator('iframe[src ="MultipleFrames.html"]');
    const InnerFrame = await outerFrame.frameLocator('iFrame[src ="SingleFrame.html"]');
    await InnerFrame.locator('input[type="text"]').fill('testing');
    await expect(InnerFrame.locator('input[type="text"]')).toBeVisible();
    await expect(InnerFrame.locator('input[type="text"]')).toHaveValue('testing');
    await page.screenshot({path:'screenshots/Nested/frameLocator_1.png'});

});

//test2 
test('Nested pageFrames Loop', async ({page}) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.getByRole('link',{name:'Iframe with in an Iframe'}).click();
    //switch to outer frame
    const frame = page.frames().find(frame=>
    frame.url().includes('SingleFrame.html'));
    await page.screenshot({path:'screenshots/Nested/frameLocator_2.png'});

});


//test 3
test('single Frame Test', async ({page}) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    const InnerFrame = await page.frameLocator('iframe[src ="SingleFrame.html"]');
    const text =  await InnerFrame.locator('input[type="text"]').fill('sumana');
    await expect(InnerFrame.locator('input[type="text"]')).toBeVisible();
    await expect(InnerFrame.locator('input[type="text"]')).toHaveValue('sumana');
    await page.screenshot({path:'screenshots/Nested/frameLocator_3.png'});

});


//test 4
test('multi Frame using pageFrames Test', async ({page}) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    //switch to outer frame
     await page.getByRole('link',{name:'Iframe with in an Iframe'}).click();
    const frame = page.frames().find(frame=>
    frame.url().includes('MultipleFrames.html'));
   
     await page.screenshot({path:'screenshots/Nested/frameLocator_4.png'});

});

});