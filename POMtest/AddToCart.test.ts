import { test, expect } from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import SpecialHotPage from "../pages/specialHotPage"
import HomePage from "../pages/homePage"

const password = "mjj@123";
const email = "manswijadhav@zeuslearning.com";
test.describe("Page object test demo", async() => {
    
test("Register test_01", async ({ page, baseURL }) => {
    // console.log('TITLE: ' + testInfo.title);

    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Manaswi");
    await register.enterLastName("Jadhav")
    await register.enterEmail(email);
    await register.enterTelephone("1234567890")
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);;
    expect(register.isSubscribeChecked()).toBeChecked();
    //playwright with first assertion
    await register.clickTermandConditon();
    await register.clickContinueToRegister();
})

test("Login test_02", async ({ page, baseURL }) => { //02 test case id
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`)
    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.clickLoginBtn();
    expect(await page.title()).toBe("My Account"); //expect My Account tile page to load
})

test("Add to cart test_03", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const special = new SpecialHotPage(page); // this is the correct variable

    await page.goto(`${baseURL}route=account/login`)
    await login.login(email, password);
    await homePage.clickOnSpecialHotMenu();
    await special.addFirstProductToTheCart();
    const isCartVisible = await special.isToastVisible();
    expect(isCartVisible).toBeVisible();
});
});