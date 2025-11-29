import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import config from "../config/config";

export async function loginFlow(loginPage: LoginPage, homePage: HomePage) {
  await loginPage.goto();
  await loginPage.login(config.defaultUser.email, config.defaultUser.password);
  //await homePage.isLoaded();
}
