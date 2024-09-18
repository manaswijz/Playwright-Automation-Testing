import{test, expect}from "@playwright/test"

test("Interact with frames", async ({ page }) =>{
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames: " + allframes.length);  //arry of frames thus .length

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Manaswi")
    await frame.locator("input[name='lname']").fill("Jadhav")

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("manaswi.jadhav@zeuslearning.com")
    await frame.locator("input[name='fname']").fill("Mann")

    // const myFrame = page.frame("firstFr") 
    // await myFrame?.fill("(//input[contains(@class,'input ng-untouched')])", "Manaswi") 
    // await myFrame?.fill("//label[text()='Last Name']/following::input", "Jadhav") //?. is used instead if-else loop
    await page.waitForTimeout(3000);
})