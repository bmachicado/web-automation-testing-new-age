import { test, expect } from "../../fixtures/base.fixture";
import { loginFlow } from "../../steps/login.steps";

test("Dashboard visible after login", async ({ loginPage, homePage, dashboardPage }) => {
  await loginFlow(loginPage, homePage);
  await dashboardPage.validateDashboard();
});
