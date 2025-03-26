import { Page } from "@playwright/test";
import { BasePage } from "@pages/base.page";

export class LoginPage extends BasePage {
  readonly page: Page;

  constructor (page: Page) { 
    super(page);
    this.page = page;
  }

}