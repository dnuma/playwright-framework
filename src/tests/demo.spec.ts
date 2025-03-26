import { test, expect } from '@fixtures/testExtended.fixture';
import { LoginPage } from '@pages/login.page';
import { User } from '@interfaces/user.interface';

test.beforeEach(async ({ page, helloWorld }) => {
  await page.goto('/');
});

test.afterEach(async ({ page }) => {
  const timestamp = Date.now();
  const path = `./src/screenshots/screenshot-${timestamp}.png`;
  await page.screenshot({ path: path });
});

test.describe('Test Suite', {
  tag: ['@suite', '@smoke'],
  annotation: [ 
    { type: 'issue', description: 'JIRA-1234' },
  ]
}, () => {

  test('has title', async ({ page }) => {  
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const user: User = {
      username: process.env.PLAYWRIGHT_USERNAME || 'standard_user',
      password: process.env.PLAYWRIGHT_PASSWORD || 'secret_sauce'
    };

    await loginPage.login(user);

    await expect(page).toHaveTitle('Swag Labs');
  });

});



