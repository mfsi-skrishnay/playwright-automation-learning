const{test,expect}= require('@playwright/test')
test("Mouse Hover Actions",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const element= await page.getByText('Point Me')
    await element.hover();
})
