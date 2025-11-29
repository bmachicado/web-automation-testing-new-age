import { Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly title;

  constructor(page: Page) {
    this.page = page; // 👈 SIEMPRE PRIMERO
    this.title = this.page.getByRole("heading", { name: "Dashboard" });
  }

  async validateDashboard() {
    await this.title.waitFor();
  }
}
