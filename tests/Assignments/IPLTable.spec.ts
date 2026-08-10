import {test,expect} from '@playwright/test';

test('test IPL', async({page})=> {
    await page.goto('https://www.iplt20.com/matches/points-table');
    await page.waitForLoadState("networkidle"); await page.waitForTimeout(5000);
/*     const table = await page.locator('tbody#pointsdata');
    const row = await table.locator('tr td div h2').allInnerTexts();
    //onst points = await row.locator('td').nth(9);
    console.log(row);
    //const value = row. */

    const teams = await page.locator('h2.ih-pt-cont');

const count = await teams.count();
console.log("Team:", count);
const rows = page.locator("tbody tr");

for (let i = 0; i < count; i++) {
    //console.log(await teams.nth(i).innerText());
    //console.log(await teams.nth(i).innerText());
    //const team = await teams.nth(i).innerText();
    //const rows =
    const team = await rows.nth(i).locator("h2").innerText();
    console.log("Team:", team);
}

});