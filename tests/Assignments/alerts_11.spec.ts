
import {test,expect} from "@playwright/test";

test('Alert handling', async ({page}) => {
    
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    //function
    page.on('dialog', async (dialog) => {
        console.log(`Encountered dialog type: ${dialog.type()}`);

         if(dialog.type()==='alert'){
             page.screenshot({ path:'screenshots/Alert.png'});
            await dialog.accept();
           
         }   
         else if(dialog.type()==='confirm'){
                page.screenshot({ path:'screenshots/Confirm.png'});
            await dialog.accept();
        
         }
        else if(dialog.type()==='prompt'){
           expect(dialog.type()).toBe('prompt')
           page.screenshot({ path:'screenshots/Prompt.png'});
           await dialog.accept('sumana');
                      
        }
        else {
           await dialog.dismiss(); // Clicks Cancel / Dismisses alert
  }
              
    });
  //Alert  
  /*
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await page.screenshot({ path:'screenshots/Alert.png'});
    expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

});
*/

//confirm
/*
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.screenshot({ path:'screenshots/Confirm.png'});
    expect(page.locator('#result')).toHaveText('You clicked: Ok');
});
*/


//prompt
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await page.screenshot({ path:'screenshots/Prompt.png'});
    expect(page.locator('#result')).toHaveText('You entered: sumana');
});
