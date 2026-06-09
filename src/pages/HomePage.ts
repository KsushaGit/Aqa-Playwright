import { BasePage } from "./BasePage";
import {RegForm} from "../components/RegistrationModal";

export class HomePage extends BasePage {

     // кнопка на головній сторінці

     private SignUpButton = this.page.getByRole('button',{name: 'Sign up'});



}