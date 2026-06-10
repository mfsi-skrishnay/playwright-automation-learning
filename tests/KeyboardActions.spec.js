const{test,expect}= require('@playwright/test');
test('Keyboard Actions', async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")
    //await page.locator('[name="text1"]').fill("Welcome to Automation");
    await page.type('[name="text1"]','Welcome to Automation')

    //Ctrl +A
    await page.keyboard.press('Control+A')

    //Ctrl+C
    await page.keyboard.press('Control+C')

    //tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Ctrl+V
    await page.keyboard.press('Control+V')

})