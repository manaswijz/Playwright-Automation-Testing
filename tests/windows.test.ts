import {Page, test} from "@playwright/test";
let facebookPage: Page; //Page- to know the datatype


test("Interact with multiple tabs", async ({ page })=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    
    // console.log(page.url());

    // const [newWindow] = await Promise.all([ 
    //     page.waitForEvent('popup'),
    //     page.click("'Follow On Twitter'")
    // ]);
    // console.log(newWindow.url());

    const [multiPage] = await Promise.all([  // to find single page or multiple pages use await
        page.waitForEvent("popup"),
        page.click('#followboth')
    ])
    await multiPage.waitForLoadState(); //wait until all the pages are loaded

    const pages = multiPage.context().pages(); // to grab all the pages
    console.log('No. of tabs:' + pages.length);

    pages.forEach(tab =>{ // iterates over array of pages
        console.log(tab.url())
    })
    for(let index = 0; index < pages.length; index ++){
        const url = pages[index].url()
        if(url == "https://www.facebook.com/lambdatest/" ) {
            facebookPage = pages[index];
        }
    }

    const text = await facebookPage.textContent("//h1") //to get me the header text
    console.log(text);
})