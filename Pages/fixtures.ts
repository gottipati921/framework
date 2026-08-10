import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';

 
// 1. Define the type for your fixture
type TestFixtures = {
 LoginPage: LoginPage; // Specify the type of your page object
};

 
// 2. Extend the base test configuration
export const test = base.extend<TestFixtures>({
   // Define the custom fixture name
  LoginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page); // Create an instance of your page object
    // ---- SETUP PHASE ----
    // This runs BEFORE your test executes
    // // Everything BEFORE use() acts as the SETUP phase
      await loginPage.goto();
   
    // Perform standard login steps
    await loginPage.isLoaded();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyUrlContains('inventory');

    await use(loginPage); // Pass the login page instance to the test
     
  }
  });
  
  export { expect } from '@playwright/test';
