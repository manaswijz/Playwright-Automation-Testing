import { test } from "@playwright/test";
import moment from "moment";

// test("Calender demo using fill function", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

//     // let date = "04-12-1994" // in console type "doucment.getElementById("birthday").value which will return the value(format) the code is accepting

//     let date = "1994-12-04"
//     await page.fill("#birthday", date);
//     await page.waitForTimeout(3000)
// })

test("Calender demo using moment", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await selectDate(25, "December 2017");
    await page.reload();

    await selectDate(29, "November 2023");
    await page.reload();

    await selectDate(2, "July 2022");
    await page.waitForTimeout(3000)
    
    async function selectDate(date: number, dateToSelect: string) { // identify the data and datatype
        await page.click("//input[@placeholder='Start date']")

        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

        // await prev.click();
        // await page.click("(//td[@class='day']//td[text()='6'])[1]")
        //    let dateToSelect: string = "December 2022"
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore(); // to check if the month is before current month
        console.log("this month? " + thisMonth);

       while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click();
            } else {
                await next.click();
            }
        }
        await page.click(`//td[@class='day'][text()='${date}']`);
    }
})

//isBefore will return us a boolean


