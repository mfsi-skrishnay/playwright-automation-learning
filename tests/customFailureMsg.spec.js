const{expect, test}= require('@playwright/test')
test("Custom expect failure msg",async({page})=>{
    page.goto("https://www.google.com/");
    await expect(page.locator('[name="btnI"]').first(),"This is custom msg for failure").toBeVisible()
})