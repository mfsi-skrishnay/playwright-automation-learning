const { test, expect } = require('@playwright/test');

test("Handling Frames", async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/iframe/');

    //Total frames
    const allFrames= await page.frames();
    console.log("No of frames: ", allFrames.length)

    //Approach1 - using name or URL of frame
   // const frame1= await page.frame('name') 
    const frame1=await page.frames({url:'https://vinothqaacademy.com/webtable/'})
    frame1.fill('#nameInput','Krishna');
   

    //Approach 2- Using framelocator
    const inputBox=await page.frameLocator('iframe[name="employeetable"]').locator('#roleInput')
    await inputBox.fill("Yadav")

});
