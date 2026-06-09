import { test as base, expect, Page } from '@playwright/test';
import path from 'path';
import { GaragePage } from '../../src/pages/GaragePage';

type userGaragePage = {
  userGaragePage: GaragePage;
};

export const test = base.extend<userGaragePage>({
  userGaragePage: async ({ browser }, use) => {
    const authFile = path.resolve(__dirname, '../../.auth/user.json');

      const context = await browser.newContext({
      storageState: authFile,
    });
    const page = await context.newPage();
    const garagePage = new GaragePage(page);
    await page.goto('/panel/garage');
    await expect(page).toHaveURL(/panel\/garage/);


    await use(garagePage);
     await context.close();
  },
  
});

export { expect };