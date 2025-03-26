import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForPageToLoad() {
    await Promise.all([
      this.page.waitForLoadState('domcontentloaded'), // Wait for DOM to be ready
      this.page.waitForLoadState('networkidle')      // Wait for all network activity to stop
    ]);
  }
}