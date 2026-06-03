import { expect,Locator, Page} from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Garage extends BaseComponent {
    private readonly addCar: Locator;
    private readonly fuelExpense: Locator;
    private readonly instructions: Locator;
    

 constructor(page: Page){//запускається коли ми свторюємо комопонет
        const root = page.locator('.modal-dialog'); // adjust selector to match the app
        super(page, root);
       
        this.addCar =this.page.getByRole('button', { name: 'Add Car' });
        this.fuelExpense =this.root.locator('');
        this.instructions =this.root.locator('');

}

async clickAddCarButtom() {
    await this.addCar.click();
}

}