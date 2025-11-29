import { test, expect } from "../../fixtures/base.fixture";
import { loginFlow } from "../../steps/login.steps";

test("Login valid user", async ({ loginPage, homePage }) => {
  await loginFlow(loginPage, homePage);
  await expect(homePage.welcomeText).toBeVisible();
});
