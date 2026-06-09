const {expect, test}= require('@playwright/test');
test("Handling RadioButons", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.getByRole("radio",{name:"Male", exact:true}).check();
    await expect(await page.getByRole("radio",{name:"Male", exact:true})).toBeChecked();
    await expect(await page.getByRole("radio",{name:"Male", exact:true}).isChecked()).toBeTruthy();
    await expect(await page.locator('#female').isChecked()).toBeFalsy();

    

    

    await page.waitForTimeout(3000);

})