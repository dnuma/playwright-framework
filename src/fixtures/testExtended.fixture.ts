import { test as base, Page } from '@playwright/test';
import { APP_URLS } from '@constants/url.constants';
import { ApiCalls } from '@@/src/utils/apiCalls.utils';

type LoginFixture = {
  login: (page: Page) => Promise<void>;
};

type PrintRandomQuoteFixture = {
  printRandomQuote: (page: Page) => Promise<void>;
};

type HelloWorldFixture = {
  helloWorld: (page: Page) => Promise<void>;
};

export const test = base.extend<LoginFixture & HelloWorldFixture & PrintRandomQuoteFixture>({
  login: async ({ page, baseURL }, use) => {
    // Implement login logic here
    console.log(`Logging in to: ${baseURL}`, APP_URLS.login);    
    await use(async () => {});
  },

  helloWorld: async ({ }, use) => {
    console.log('Hello World!');
    await use(async () => {});
  },

  printRandomQuote: async ({ request }, use) => {
    const apiCalls = new ApiCalls();
    const response = await apiCalls.randomQuote(request);
    console.log(response);
    await use(async () => {});
  }
});

export { expect } from '@playwright/test';