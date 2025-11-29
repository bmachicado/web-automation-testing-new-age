import { test as base } from "@playwright/test";
import config from "../config";

export const authSetup = base.extend({
  page: async ({ page }, use) => {
    await page.goto(config.url);
    await page.fill("#email", config.user);
    await page.fill("#password", config.pass);
    await page.click("button[type=submit]");
    await page.context().storageState({ path: 'storage/auth.json' });
    await use(page);
  }
});
