import { Page} from "@playwright/test";
import {RegForm} from '../components/RegistrationModal';


//page actions , 
//is to describe what a user can do on that page — 
// fill fields, submit, check errors etc.
//Component → knows HOW to interact with elements (locators, fill, click)
//Page → knows WHAT a user can do on the page (delegates to component)
//Test → knows WHAT to test (calls page methods)

export class RegistrationPage {
    private form: RegForm ;

    constructor (page: Page){

        this.form = new RegForm(page);

    }

    async fillName(name: string) {
        await this.form.fillName(name);
    }

    async fillLastName(lastName: string){
        await this.form.fillLastName(lastName);
    }

    async fillEmail(email: string) {
        await this.form.fillEmail(email);

    }
    async fillPassword (password: string){
        await this.form.fillPassword(password);
    }
    async fillConfirmPassword (password: string){
        await this.form.fillConfirmPassword(password);
    }

  async clickRegButton() {
    await this.form.regButton.click();
}
async clickName() {
    await this.form.nameInput.click();
}
async clickLastName(){
    await this.form.lastName.click();
}

    async checkUniqueError(message: string) {
    await this.form.checkUniqueError(message);
}

async checkErrorMessageName(message: string) {
    await this.form.checkErrorMessageName(message);
}
}