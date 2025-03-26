import { test as base, Page } from '@playwright/test';
import { APP_URLS } from '@constants/url.constants';
import { ApiCalls } from '@utils/apiCalls.utils';

type LoginFixture = {
  login: (page: Page) => Promise<void>;
};

type PrintStarWarsQuoteFixture = {
  printStarWarsQuote: (page: Page) => Promise<void>;
};

export const test = base.extend<LoginFixture & PrintStarWarsQuoteFixture>({
  login: async ({ page, baseURL }, use) => {
    // Implement login logic here
    console.log(`Logging in to: ${baseURL}`, APP_URLS.login);    
    await use(async () => {});
  },

  printStarWarsQuote: async ({ request }, use) => {
    const apiCalls = new ApiCalls();
    const response = await apiCalls.starWarsQuote(request);
    console.log(response);
    await use(async () => {});
  }
});

export { expect } from '@playwright/test';