import { test, expect } from '@playwright/test';

test('should modify user profile response', async ({ page }) => {
  await page.route('**/api/users/profile', async route => {
    const response = await route.fetch();
    const json = await response.json();

    json.data.name = 'Makar';

    await route.fulfill({// this is changed responce
      response,
      json,
    });
  });

  await page.goto('/');

  const data = await page.evaluate(async () => { // fetch from API, how we modified
    const response = await fetch('/api/users/profile');
    return response.json();
  });

  
  await page.goto('/panel/profile');
 
  await page.pause();
  expect(data.data.name).toBe('Makar'); // APi check, 

  await expect(page.getByText('Makar')).toBeVisible(); // UI check
});

test(' modify user profile response with a negative case', async ({ page }) => {
  await page.route('**/api/users/profile', async route => {
    const response = await route.fetch();
    const json = await response.json();

    json.data.name = 123;
    json.data.lastName = "";

    await route.fulfill({// this is changed responce
      response,
      json,
    });
  });

  await page.goto('/');

  const data = await page.evaluate(async () => {
    const response = await fetch('/api/users/profile');
    return response.json();
  });

  
  await page.goto('/panel/profile');
 
  await page.pause();

  await expect(page.getByText('123')).toBeVisible();
  await expect(page.getByText('Kotlarevsky')).toBeHidden();

  // API check

  expect (data.data.name).toBe('123');
  expect (data.data.lastName).toBe('');

});