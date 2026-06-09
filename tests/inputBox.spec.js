const {expect,test} = require('@playwright/test')
test("Elements Interaction",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //InputBox- Name
    const nameField=page.locator('#name');
    await expect(nameField).toBeVisible();
    await expect(nameField).toBeEmpty();
    await expect(nameField).toBeEditable();
    await expect(nameField).toBeEnabled();

    await page.getByPlaceholder('Enter Name').fill('Test User');
    await page.fill("#email",'Test@gmail.com');
       
    await page.waitForTimeout(3000);
})

