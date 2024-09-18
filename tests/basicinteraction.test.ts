import { expect, test } from "@playwright/test";


test("Interaction with Inputs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo?utm_source=medium&utm_medium=organic&utm_campaign=oct_26&utm_term=mg&utm_content=learning_hub");
    const messageInput = page.locator("//input[@id='user-message']");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log('Before entering the data: '+ await messageInput.inputValue());
    await messageInput.type("Hi Manaswi");
    console.log('After entering the data: '+ await messageInput.inputValue());
})

test("Sum", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo?utm_source=medium&utm_medium=organic&utm_campaign=oct_26&utm_term=mg&utm_content=learning_hub");
    const sum1input = page.locator("#sum1")
    const sum2input = page.locator("#sum2")
    
    const getSum = page.locator("//button[text()='Get Sum']")

    // await sum1input.type("121");
    // await sum2input.type("1231");
    //Alternate way
    let num1 = 121;
    let num2 = 1231;
    await sum1input.type("" + num1);
    await sum2input.type("" + num2);
    await getSum.click();
    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    // let expectedResult = num1 + num2;
    // expect(result).toHaveText("" + expectedResult)
})

test("Checkbox", async ({ page }) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const singleCheckbox = page.locator("id=isAgeSelected")
    expect(singleCheckbox).not.toBeChecked();
    expect(singleCheckbox).toBeChecked();
})