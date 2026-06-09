const { test,expect}= require('@playwright/test')
test('Builtin Locators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // const logo= await page.getByAltText('company-branding');
    // await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole('button',{type:'submit'}).click()

   // const name = await page.locator("//p[@class='oxd-userdropdown-name']");
   // await expect(page.getByText(name)).toBeVisible();
      await expect(page.getByText("Rajesh userrr")).toBeVisible();

})
