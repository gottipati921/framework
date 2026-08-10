import {test,expect,Locator} from '@playwright/test';

test('select value - with bot detection handling', async({page,context})=>{
    test.slow();

    // Strategy 1: Add realistic browser headers
    await page.goto('https://www.google.com', {
        waitUntil: 'networkidle',
        referer: 'https://www.google.com/'
    });
    
    // Add mouse movements to simulate human behavior
    await page.mouse.move(100, 100);
    await page.mouse.move(200, 200);
    
    const searchInput = page.locator('#APjFqb');
    await searchInput.fill('selenium');
    
    // Add delay between typing and suggestions appearing
    await page.waitForTimeout(500);
    await page.waitForSelector('.lnnVSe .wM6W7d[role="presentation"] span');
    
    const count = await page.locator('.lnnVSe .wM6W7d[role="presentation"] span').count();
    console.log(`Found ${count} suggestions`);
    
    const suggestions = page.locator('.lnnVSe .wM6W7d[role="presentation"] span');
    for (let i = 0; i < count; i++) {
      const text = await suggestions.nth(i).innerText();
      console.log(text);
      if (text.toLowerCase().includes('selenium testing')) {
        const initialUrl = page.url();
        console.log(`Initial URL: ${initialUrl}`);
        
        // Add human-like behavior: hover before click
        await suggestions.nth(i).hover();
        await page.waitForTimeout(300);
        await suggestions.nth(i).click();
        console.log('Item clicked');
        
        try {
          await page.waitForLoadState('networkidle');
          await page.waitForTimeout(2000);
        } catch (e) {
          console.log('Page load interrupted - likely due to reCAPTCHA');
        }
        
        const finalUrl = page.url();
        console.log(`Final URL: ${finalUrl}`);
        
        // Check if reCAPTCHA is shown
        const reCaptcha = page.locator('iframe[src*="recaptcha"]').first();
        const captchaVisible = await reCaptcha.isVisible().catch(() => false);
        
        if (captchaVisible) {
          console.log('⚠️  reCAPTCHA detected - Google is blocking bot traffic');
          console.log('Strategies to try:');
          console.log('1. Use a different website for testing (avoid Google)');
          console.log('2. Add longer delays between actions');
          console.log('3. Use residential proxy');
          console.log('4. Use playwright-extra with stealth plugin');
          test.skip();
        }
        
        expect(finalUrl).toContain('search');
        expect(finalUrl).toContain('selenium');
        console.log('✓ Search successful');
        await page.screenshot({ path: 'autosuggestions_2.png' });
        break;
      }
    }
});