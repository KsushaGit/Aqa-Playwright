import { test, expect } from '@playwright/test';
import path from 'path';

const authFile = path.resolve(__dirname, '../.auth/api-user.json');

test('login and save auth state', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.TEST_EMAIL!);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.TEST_PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  

  await expect(page).toHaveURL(/panel\/garage/);

  await page.context().storageState({ path: authFile });
});