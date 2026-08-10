import {test,expect} from '@playwright/test'

test.describe('test single frame', () => {

//testcase 1
test('frame test with variables', async ({page}) =>{
await page.goto('https://demoqa.com/frames', {waitUntil: 'domcontentloaded', timeout: 60_000});
const frameTest = await page.frameLocator('iframe#frame1').locator('body h1');
const val =await frameTest.innerText();
console.log(val);
await expect(page.frameLocator('iframe#frame1').locator('body h1')).toHaveText('This is a sample page');
await page.screenshot({path:'screenshots/Frames/singleFrameLocator20.png'});
});

//testcase 2
test('another single frame without varaibles',async ({page}) =>
{
 await page.goto('https://demo.automationtesting.in/Frames.html');
const newFrame =await page.frameLocator('iframe[name="SingleFrame"]');
const text = await newFrame.locator('input[type="text"]');
await text.fill('testing');
//test must match which is case insensitive(appending i flag appends for ignoring uppercase and lowercase differences)
await expect(text).toHaveValue(/test/i);
await page.screenshot({path:'screenshots/Frames/singleFrameLocator21.png'});

});

});