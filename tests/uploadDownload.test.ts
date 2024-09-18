import { test } from "@playwright/test"

test("Download files", async ({ page }) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Like, Share, comment & subs");
    await page.click("id=create")

    const download = await Promise.all([ // Promise to wait for an event and [download] destructuring way of executing it
        page.waitForEvent("download"), //download should occue when click on the id:link-to-download
        page.click("#link-to-download")

    ])
    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName); //to give the path of the downloaded file
}) //download first set of data that is inputted