import { test as setup } from '@playwright/test';
import path from 'path';
import { BasePage } from '@pages/base.page';

const authFile = path.join(__dirname, '../../.auth/user.json');

// Should only be used with users with no MFA
setup('authenticate', async ({ page }) => {
  const basePage = new BasePage(page);
  
  await page.goto('/');
  await basePage.waitForPageToLoad();
  
  // Do whatever you need to create a login session.
  // If MFA is enabled, do not add it as dependency of your project, also it's recommended to use:
  // await.page.pause();
  // and manually authenticate the user.
  
  await page.context().storageState({ path: authFile });
});