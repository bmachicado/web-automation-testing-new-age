import { Page } from '@playwright/test';
import config from '../config';

export class LoginPage {
  readonly page: Page;
  readonly email;
  readonly password;
  readonly loginBtn;
  readonly acceptCookiesBtn;

  constructor(page: Page) {
    this.page = page; // 👈 PRIMERO asignamos

    // 👇 Luego ya puedes usar this.page
    this.email = this.page.locator('//input[@type="email" and @id="form2Example1"]');// getByPlaceholder("Email");
    this.password = this.page.locator('//input[@type="password" and @id="form2Example2"]');//getByPlaceholder("Password");
    this.loginBtn = this.page.locator('(//button[text()="Sign in"])[2]');//getByRole("button", { name: "Sign In" });
    this.acceptCookiesBtn = this.page.locator('//*[@id="accept_cookies_btn"]');//getByRole("button", { name: "Sign In" });
  }

  async goto() {
    await this.page.goto(`${config.url}`);//await this.page.goto(`${config.baseUrl}/login`);
    //await this.acceptCookiesBtn.waitFor({timeout: 40000});
    await this.acceptCookiesBtn.click();
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

/*import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  email = '//input[@type="email" and @id="form2Example1"]';
  pass = '//input[@type="password" and @id="form2Example2"]';
  btnLogin = '(//button[text()="Sign in"])[2]';
  acceptCookiesButton ='#accept_cookies_btn';

  async open(url: string) {
     await this.page.goto(url);
     await this.page.click(this.acceptCookiesButton);
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.email, user);
    await this.page.fill(this.pass, pass);
    await this.page.click(this.btnLogin);
  }
}

*/
