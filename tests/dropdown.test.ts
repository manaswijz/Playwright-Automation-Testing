import test from "@playwright/test";


test("handling dropdown" , async({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo" , {
        // label: "Tuesday"
        // value: "Friday"
        index: 5
    })
    await page.waitForTimeout(3000);

    await page.selectOption("#multi-select", [
        {
            label: "Texas"
        }, {
            index: 2
        }, {
            value: "Washington"
        }
    ])
})