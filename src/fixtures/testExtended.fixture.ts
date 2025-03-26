import { test as base, Page } from '@playwright/test';
import { APP_URLS } from '@constants/url.constants';

type LoginFixture = {
  login: (page: Page) => Promise<void>;
};

export const test = base.extend<LoginFixture>({
  login: async ({ page }, use) => {
    await page.goto(APP_URLS.login);
    await use(async () => {});
  },
});