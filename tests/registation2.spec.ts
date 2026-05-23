import { test, expect,} from '@playwright/test';
import { RegistrationPage } from '../src/pages/RegistrationPopup';
//import {RegForm} from '../src/components/RegistrationModal';


test.describe ('Registration Form', () => {
     let registrationPage: RegistrationPage;

      test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await page.goto('/');
        await page.getByRole('button',{name: 'Sign up'}).click();
        await page.locator('.modal-dialog').waitFor({ state: 'visible' });
    });

test('register User', async() =>{
    await registrationPage.fillName("Ivan");
    await registrationPage.fillLastName("Kotlarevsky");
    await registrationPage.fillEmail("smth@ukr.net");
    await registrationPage.fillPassword("Qwerty12");
    await registrationPage.fillConfirmPassword("Qwerty12");
    await registrationPage.clickRegButton();

});

test ('Empty Nname field error', async()=>{
    await registrationPage.clickName();
    await registrationPage.clickLastName();
    await registrationPage.checkErrorMessageName("Name required");
});

test ('Short Name field error', async()=>{
    await registrationPage.fillName("A");
    await registrationPage.clickLastName();
    await registrationPage.checkErrorMessageName("Name has to be from 2 to 20 characters long");
});

test ('Wrong symbols Last Name field error', async()=>{
    await registrationPage.fillLastName("ˆ*&ˆ");
    await registrationPage.clickName();
    await registrationPage.checkErrorMessageName("Last name is invalid");
});

test ('Different passwords', async()=>{
    await registrationPage.fillPassword("QWerttyuu35");
    await registrationPage.fillConfirmPassword("Qwertyu1234");
    await registrationPage.clickName();
    await registrationPage.checkErrorMessageName("Passwords do not match");
});
test ('Email wrong messages', async()=>{
    await registrationPage.fillEmail("Qhkhg");
    await registrationPage.clickName();
    await registrationPage.checkErrorMessageName("Email is incorrect");
});


})

