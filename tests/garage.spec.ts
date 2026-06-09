import { test, expect,} from './fixtures/userGaragePage.ts';
import { GaragePage } from '../src/pages/GaragePage';
//import { RegistrationPage } from '../src/pages/RegistrationPopup';

test.describe ('Garage Page navigation', () => {
     

test('Click Add car pop-up', async({ userGaragePage }) =>{
    const garagePage = new GaragePage(userGaragePage);
    await garagePage.clickAddCarButton()
})

})
;