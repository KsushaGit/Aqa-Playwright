import { test, expect } from '@playwright/test';

test ( 'Clicking the Sign Up button', async ({page}) =>{

    await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");
    //ACTION — clicks the button
    await page.getByRole('button',{name: 'Sign up'}).click();
    // assert
    await page.waitForTimeout(3000);
    await expect (page.getByRole('heading', {name: 'Registration'})).toBeVisible();

})

test ('registration user -positive ', async({page}) =>{
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').click();
  await page.locator('#signupLastName').fill('Kotlarevskyi');
  await page.getByRole('textbox', { name: 'Name Last name Email' }).click();
  await page.getByRole('textbox', { name: 'Name Last name Email' }).fill('smth@ukr.net');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Qwerty12');
  await page.getByRole('textbox', { name: 'Re-enter password' }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Qwerty12');
  await page.getByRole('textbox', { name: 'Re-enter password' }).fill('Qwerty12');
  await page.getByRole('button', { name: 'Sign up' }).click();;
}); 

test ('registration user -First name assertions ', async({page}) =>{
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('a');
  await page.locator('#signupLastName').click();
     await expect(page.getByText('Name has to be from 2 to 20')).toBeVisible();

     await page.locator('#signupName').clear()
     await page.locator('#signupName').fill('@#$');
     await page.locator('#signupLastName').click();
     await expect(page.getByText('Name is invalid')).toBeVisible();

});

test ('registration user -Last name assertions', async({page})=>{
     await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
     await page.getByRole('button', { name: 'Sign up' }).click();
     
     await page.locator('#signupLastName').click();
     await page.getByRole('textbox', { name: 'Name Last name Email' }).click();
     await expect(page.getByText('Last name required')).toBeVisible();

})

test ('registration user -Email assertions', async({page})=>{
     await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
     await page.getByRole('button', { name: 'Sign up' }).click();
    
     await page.getByRole('textbox', { name: 'Name Last name Email' }).click();
     await page.getByRole('textbox', { name: 'Name Last name Email' }).fill("ghhjhj");
     await page.getByRole('textbox', { name: 'Password', exact: true }).click();
     await expect(page.getByText('Email is incorrect')).toBeVisible();

})

test.only ('registration user -Passwords assertions', async({page})=>{
     await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
     await page.getByRole('button', { name: 'Sign up' }).click();
    
     await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Qwerty12');
  await page.getByRole('textbox', { name: 'Re-enter password' }).click();
  await page.getByRole('textbox', { name: 'Re-enter password' }).fill('weertty45W');
   await page.locator('#signupLastName').click();
     
     await expect(page.getByText('Passwords do not match')).toBeVisible();

})
  

