import {test,expect} from '@playwright/test';

test('shadow DOM', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/shadowdom');

/* const list1 = await page.locator('my-paragraph span[slot="my-text"]').textContent();
console.log(`list1 is:${list1}`); */

const lists:string[] = await page.locator('my-paragraph ul li').allTextContents();

console.log(`list Items: ${lists}`);
console.log(lists);

const count= lists.length;
console.log(`tot items:${count}`);

  for(let i=0;i<count;i++){
    console.log(lists[i]);
} 


 for(const list of lists){
    console.log(list[0]);
    console.log(list[1]);
}
 

});