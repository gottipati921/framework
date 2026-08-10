//Write a code on automation of checkbox control on demoqa.com/checkbox website and add assertions

import {test,expect,chromium} from "playwright/test";
//if return type is String use toContain and toBe must be used
//if locator of type is used then toHaveText
test('Checkbox Control Test', async ({page}) => {
    // Navigate to the checkbox demo page
    await page.goto('https://demoqa.com/checkbox');
    await page.getByRole('checkbox', { name: 'Home' }).scrollIntoViewIfNeeded();
    //click on the checkbox to expand the options
    await page.getByRole('checkbox', { name: 'Select Home' }).click();
   //assert that the checkbox is visible
    const checkbox = page.getByRole('checkbox', { name: 'Select Home' });
    await expect(checkbox).toBeVisible(); 
//click on the checkbox to select it
    //await checkbox.check(); 
    await checkbox.setChecked(true);
//assert that the checkbox is checked
    await expect(checkbox).toBeChecked();
     await page.screenshot({ path: 'screenshots/demoQaLogin/page1Checked.png', fullPage: true });
    //for loop
    //await expect(page.getByText('Documents')).toBeVisible();
    //click on the checkbox to unselect it
    //await checkbox.uncheck();
    await checkbox.setChecked(false);
    //assert that the checkbox is unchecked
    await expect(checkbox).not.toBeChecked();
    //full page screenshot
    await page.screenshot({ path: 'screenshots/demoQaLogin/page2Unchecked.png', fullPage: true });
 
});