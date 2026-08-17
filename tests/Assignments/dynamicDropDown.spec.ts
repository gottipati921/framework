import {expect,test} from "@playwright/test";

test('Handle Dynmic dropdown', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('.oxd-topbar-header-title')).toBeVisible();
    //select dropdown
    await page.locator('.oxd-userdropdown-name').click();

    await page.locator('.oxd-userdropdown-link', {hasText:"Support"}).waitFor({ state: 'visible', timeout: 5000 });
    await page.locator('.oxd-userdropdown-link', {hasText:"Support"}).click();
    await expect(page.locator('.orangehrm-sub-title')).toHaveText('Customer Support');
    //select another dropdown
     await page.locator('.oxd-main-menu-item', {hasText:"Leave"}).waitFor({ state: 'visible', timeout: 5000 });
     await page.locator('.oxd-main-menu-item', {hasText:"Leave"}).click();
     await expect(page.locator('.oxd-topbar-header-title')).toHaveText('Leave');
     //select another dropdown
     await page.locator('.oxd-multiselect-wrapper').waitFor({ state: 'visible', timeout: 5000 });
     await page.locator('.oxd-multiselect-wrapper').click();
     // setTimeout(()=>{debugger;},5000)
     await page.locator('[role="option"]', {hasText:'Cancelled'}).click();
     await expect(page.locator('.oxd-multiselect-chips-area',{hasText:'Cancelled'})).toBeVisible();
    




});