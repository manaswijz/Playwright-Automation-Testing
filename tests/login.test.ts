import {chromium, test} from "@playwright/test"

test("Login test demmo", async () => {
     //Launching the browser
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage(); 

    //Hover the MyAccount dropdown and got to Login page
    await page.goto("https://ecommerce-playground.lambdatest.io/") 
    await page.hover("//a[@data-toggle='dropdown']//span[text()[normalize-space()='My account']]")
    await page.click("'Login'")

    //Input email and password
   await page.fill("input[name='email']","manaswi.jadhav@zeuslearning.com")
  await page.fill("input[name='password']","mjj@12345")
   await page.click("input[value='Login']");
    await page.waitForTimeout(5000);

    //Open the Login page in new tab with existing cache/session memory
    // const page1 = await context.newPage();
    // await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    // await page.waitForTimeout(5000);

    //Open the Login page in new tab without existing cache/session memory
    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    await page.waitForTimeout(5000);

 })