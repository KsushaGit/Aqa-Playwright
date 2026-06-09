import { test, expect } from '@playwright/test';

test ( 'Login from the main page', async ({page})=>{
    await page.goto("/");
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.TEST_EMAIL!);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.TEST_PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  console.log('EMAIL:', process.env.TEST_EMAIL);
  console.log('PASSWORD:', process.env.TEST_PASSWORD);
});
