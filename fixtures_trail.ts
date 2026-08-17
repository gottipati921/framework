import { test as base,Page } from '@playwright/test';

/* type User = {
  name: string;
  age: number;
}; */
// Define a custom fixture type that includes the authenticated page

type MyFixtures ={ 
    authenticatedPage: Page;
}

// Extend the base test object to introduce a custom fixture named 'authenticatedPage'
export const test = base.extend<MyFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // 1. SETUP: Perform login sequence
    await page.goto('https://example.com');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'securepassword');
    await page.click('#submit-btn');

    // 2. PASS TO TEST: Yield control to the test function
    await use(page);

    // 3. TEARDOWN: Clear session or log out safely after the test wraps up
   await page.evaluate(() => {
      // Clear session storage and local storage
      sessionStorage.clear();
      localStorage.clear();   
   });
  }
});


export { expect } from '@playwright/test';