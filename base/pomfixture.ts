import {test as baseTest} from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import SpecialHotPage from "../pages/specialHotPage"

type pages = {
    registerPage : RegisterPage;
    loginPage : LoginPage;
    homepage: HomePage;
    specialPage: SpecialHotPage;
} // className: allies(object name)

const testPages = baseTest.extend<pages>({
    registerPage: async ({ page }, use) => {

    }
}) // async, page within the fixture then await
export const ytest = testPages;