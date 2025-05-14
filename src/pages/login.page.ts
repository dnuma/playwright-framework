import { Locator, Page } from "@playwright/test";
import { BasePage } from "@pages/base.page";
import { User } from "../interfaces/user.interface";

export class LoginPage extends BasePage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor (page: Page) { 
    super(page);
    this.page = page;
    this.username = this.page.locator('[data-test="username"]');
    this.password = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
  }

  async login(user: User) {
    await this.username.fill(user.username);
    await this.password.fill(user.password);
    await this.loginButton.click();
  };

}