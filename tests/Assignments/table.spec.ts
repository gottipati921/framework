import {test} from "@playwright/test";

test.describe('multiple tables', () => {

//test1 
test('handle Table1', async ({page})=> {

await page.goto('https://the-internet.herokuapp.com/tables'); 
 const userTable =await page.locator('table[id="table1"]');
 const headers = await userTable.locator('th').allTextContents();
console.log(headers);
const userRowsentire:string[] = await userTable.locator('tbody tr').allInnerTexts();
//const userRows:string[] = await userTable.locator('tbody tr').allTextContents();

for(const userRow of userRowsentire){
console.log(userRow);
}
});

//test2
test('handle Table2', async ({page})=> {

 await page.goto('https://the-internet.herokuapp.com/tables');
 const userTable =await page.locator('table[id="table2"]');
 const headers = await userTable.locator('th').allTextContents();
console.log(headers);
const userRowsentire:string[] = await userTable.locator('tbody tr').allInnerTexts();
//const Rows:string[] = await userTable.locator('tbody tr').allTextContents();
for(const Row of Rows){
console.log(Row);
}
});

});