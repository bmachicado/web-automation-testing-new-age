import { test } from "@playwright/test";
import config from "../../config";

test("setup auth: generar storageState", async ({ page }) => {
  await page.goto(config.url);

  await page.fill("#email", config.user);
  await page.fill("#password", config.pass);
  await page.click('button[type="submit"]');

  await page.waitForURL(/dashboard/);

  await page.context().storageState({
    path: "storage/auth.json"
  });
});
