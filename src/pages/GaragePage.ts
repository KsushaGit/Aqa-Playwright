import { Page} from "@playwright/test";
import {Garage} from '../components/Garage.ts';

export class GaragePage {
    private form: Garage;

    constructor (private readonly page: Page){

        this.form = new Garage(page);
    }

      async clickAddCarButton(){
        await this.form.clickAddCarButtom();
    }
}