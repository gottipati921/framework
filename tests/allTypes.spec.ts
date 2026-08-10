import {test,expect} from '@playwright/test';
test('all types',async ({page}) =>
    {
    await page.goto("https://the-internet.herokuapp.com/inputs")
    await page.locator('input[type="number"]').fill("12345");
    await page.locator('input[type="number"]').press("ArrowUp");
    await page.locator('input[type="number"]').press("ArrowDown");
    
    });