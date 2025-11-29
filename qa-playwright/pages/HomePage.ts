import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly welcomeText;
  readonly menuButton;
  readonly logoutButton;

  constructor(page: Page) {
    this.page = page; // 👈 SIEMPRE PRIMERO

    // 👇 Luego recién creas los locators
    this.welcomeText = this.page.getByText("Welcome");
    this.menuButton = this.page.getByRole("button", { name: "Menu" });
    this.logoutButton = this.page.getByRole("button", { name: "Logout" });
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
