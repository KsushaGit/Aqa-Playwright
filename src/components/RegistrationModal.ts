import { expect,Locator, Page} from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class RegForm extends BaseComponent {
    private readonly nameInput: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator;
    private readonly regButton: Locator;
    private readonly errorMessageName: Locator;
    private readonly errorUnique: Locator;
    
    //readonly errorEmail: Locator;
    //readonly errorPassword: Locator;
    

    constructor(page: Page){//запускається коли ми свторюємо комопонет
        const root = page.locator('.modal-dialog'); // adjust selector to match your app
        super(page, root);
       
        this.nameInput =this.root.locator('#signupName');
        this.lastName =this.root.locator('#signupLastName');
        this.email =this.root.getByRole('textbox', { name: 'Email' });
        this.password =this.root.getByRole('textbox', { name: 'Password', exact: true });
        this.confirmPassword =this.root.getByRole('textbox', { name: 'Re-enter password' });
        this.regButton =this.root.getByRole('button', { name: 'Register' });
        this.errorMessageName =this.root.locator('div.invalid-feedback > p');
        this.errorUnique =this.root.locator('div.invalid-feedback > p');
        

    }
//actions
    async fillName(name: string) {
    await this.nameInput.fill(name);
    }

    async fillLastName(lastName: string){
        await this.lastName.fill(lastName);
    }

     async clickRegButton() {
    await this.regButton.click();
}
   async clickName() {
    await this.nameInput.click();
}
async clickLastName(){
    await this.lastName.click();
}

    async fillEmail(email: string){
        await this.email.fill(email)
    }
     async fillPassword(password: string){
        await this.password.fill(password)
    }

    async fillConfirmPassword(confirmPassword: string){
        await this.confirmPassword.fill(confirmPassword)
    }

   /* async clickRegButton(regButton){
        await this.clickRegButton(regButton).click()
    } */

//assertions

    async checkErrorMessageName(message: string) {
    await expect(this.errorMessageName).toHaveText(message);

}
// unique assert for all error messages 
async checkUniqueError(message: string) {
await expect(this.errorUnique.filter({ hasText: message })).toBeVisible();    
}
}
