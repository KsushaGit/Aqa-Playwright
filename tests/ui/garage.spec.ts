import { test, expect,} from '../fixtures/userGaragePage';
import { GaragePage } from '../../src/pages/GaragePage';
//import { RegistrationPage } from '../src/pages/RegistrationPopup';

test.describe ('Garage Page navigation', () => {
     

test('Click Add car pop-up', async({ userGaragePage }) =>{
    await userGaragePage.clickAddCarButton();
})

})
;