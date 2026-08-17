import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('s');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('selenium testing');
  await page.getByText('selenium testing with java').click();
});
//
/* test2('test2', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('notebook ruled');
  await page.goto('https://www.amazon.com/s?k=notebook+ruled+spiral&crid=2IH4Q0K5VCU9G&sprefix=notebook+ruled%2Caps%2C341&ref=nb_sb_ss_p13n-expert-pd-ops-ranker_2_14');
});
 */
