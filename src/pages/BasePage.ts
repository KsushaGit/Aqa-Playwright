import {Page} from "@playwright/test";

export class BasePage {
protected readonly page: Page;

constructor(page:Page){//constr is a method, Runs automatically when you create a new page object
    this.page =page;
}//page is not global — it's created fresh for each test
//You must pass it to every class that needs it
//Просто зберігає page і вміє відкривати URL

async open(path:string){
    await this.page.goto(path);
}


}
