import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { UsersPage } from '../pages/UsersPage';

export class App {
  constructor(public page: Page) {
    this.login = new LoginPage(page);
    this.home = new HomePage(page);
    this.users = new UsersPage(page);
  }

  readonly login: LoginPage;
  readonly home: HomePage;
  readonly users: UsersPage;
}
