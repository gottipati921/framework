import{Page, Locator, expect} from '@playwright/test';

export class LoginPage
{
  readonly page:Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
 

constructor(page: Page)
{
  this.page = page;
  this.emailInput = page.getByPlaceholder('Username');
  this.passwordInput = page.getByPlaceholder('Password');
  this.loginButton = page.locator('input[type="submit"]');
  
}

async goto(): Promise<void>{
     await this.page.goto('https://www.saucedemo.com/', { waitUntil: 'load' });
  }


//abstract - fulfilling the contract
async isLoaded(): Promise<void>{
  await expect(this.emailInput).toBeVisible();
  await expect(this.passwordInput).toBeVisible();
  await expect(this.loginButton).toBeVisible();
  
}
async login(email: string, password: string): Promise<void>
{
  await this.emailInput.fill(process.env.USER || email);
  await this.passwordInput.fill(process.env.PASSWORD || password);
  await this.loginButton.click();
}
  async verifyUrlContains(text: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(text));
  }
}
//page -> constructor(page) -> this.page = page-> Stored in Page object
//goto, click(), fill()