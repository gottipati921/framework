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
    await page.goto('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');
    await page.fill('input[name="email"]', 'user2402@gmail.com');
    await page.fill('input[name="password"]', 'Admin123');
    await page.click('input[type="submit"][value="Login"]');

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