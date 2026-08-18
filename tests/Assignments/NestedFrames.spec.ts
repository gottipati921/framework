import {test,expect} from '@playwright/test';

test('frame nested', async({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    const allFrames = await page.frames();
    console.log(`total frames count: ${allFrames.length}`);
      for (const frame of allFrames){
        console.log(frame.url());
     }
    //frame1
    const topFrame = page.frameLocator('frameset [name="frame-top"]');
    const middleFrame = topFrame.frameLocator('frameset[name="frameset-middle"] frame[name="frame-middle"]');
    const rightFrame = topFrame.frameLocator('frameset[name="frameset-middle"] frame[name="frame-right"]');
    const leftFrame = topFrame.frameLocator('frameset[name="frameset-middle"] frame[name="frame-left"]');
   // const reqMiddle= await middleFrame.locator('body div#content');
   //validate middle frame
    expect(middleFrame.locator('body')).toHaveText('MIDDLE');
    console.log(await middleFrame.locator('body div#content').textContent());
    //validate right frame
    const rightText = await rightFrame.locator('body').innerText();
    console.log(rightText.trim());
    expect(rightFrame.locator('body')).toHaveText('RIGHT');
    //validate left frame
    const leftText = await leftFrame.locator('body').innerText();
    console.log(leftText.trim());
    expect(leftFrame.locator('body')).toHaveText('LEFT');
    //Bottom frame5
    const bottomFrame = await page.frameLocator('frameset [name="frame-bottom"]');
    const bottomText = await bottomFrame.locator('body').innerText();
    console.log(bottomText.trimEnd());
    expect(bottomFrame.locator('body')).toHaveText('BOTTOM');
});
