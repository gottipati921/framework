import {test,expect} from '@playwright/test';
import { TIMEOUT } from 'dns';

test('GitHub Login Test', async ({page}) => {
    
    // Navigate to GitHub login page
    //method 1
    await page.goto('https://github.com/login', {waitUntil: 'domcontentloaded', timeout: 60_000});
    //navigation waits
    page.waitForURL('https://github.com/login');
    await page.getByRole('textbox', { name: 'Username or email' }).fill('gottipati921'); // Replace with your GitHub username
    await page.getByLabel('Password').fill('gottipati921'); // Replace with your GitHub password
    await page.getByRole('button', { name: 'Sign in',exact:true }).click();
    // Wait for network requests or lazy content to render
    await page.goto('https://github.com/login', { waitUntil: 'networkidle' });
    //Load state waits->waitForLoadState(load,domcontentloaded,networkidle)
    await page.waitForLoadState('networkidle')
    //method 2
    //fixed timeout
    await page.waitForTimeout(2000);
    //jpg/jpeg: not quality so give quality
    await page.screenshot({path:'screenshots/image.jpeg',type:'jpeg',quality:80})
    await page.close();

    //log into Google
     await page.goto('https://www.google.com/');
     await page.getByRole('combobox',{name:'Search'}).fill('testing');

    //explicit waitFor specific elements
    //method 3
    await page.waitForSelector('[role="option"] [role="presentation"] span:first-child');
    // Advanced configuration with options//wait for element to be hidden
    await page.waitForSelector('.loading-spinner', { 
          state: 'hidden',   // Options: 'visible', 'hidden', 'attached', 'detached'
          timeout: 10000,    // Time to wait in milliseconds (0 disables timeout)
          strict: true       // Throws an error if more than one element matches
    });
    
    //explicit UI waits
    const item = await page.locator('[role="option"] [role="presentation"] span:first-child');
    await item.waitFor({ state: 'visible', timeout: 5000 });

    //set timeout for single action
    //method 4
     await page.locator('[role="option"] [role="presentation"] span:first-child').fill('testing',{timeout:10000,});
     await page.locator('[role="option"] [role="presentation"] span:first-child').click({timeout:10000,});


     //method 5
     // Web-First Assertions
     await expect(page.locator('[role="option"] [role="presentation"] span:first-child')).toBeVisible({ timeout: 10_000 });
     await expect(page.locator('[role="option"] [role="presentation"] span:first-child')).toHaveText('hello', { timeout: 10_000 });
      
    // Playwright will click and move on immediately, skipping the navigation wait
    //method 6
     await page.locator('[role="option"] [role="presentation"] span:first-child').click({ noWaitAfter: true });
       


});