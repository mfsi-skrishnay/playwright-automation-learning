const {expect,test} = require('@playwright/test')
test("Handle DropDown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");


   await page.locator("#country").selectOption({label:'India'});  //Using label
   await page.locator("#country").selectOption('India');  //Using visible text
   await page.locator("#country").selectOption({value:'uk'});  //Using value
   await page.locator("#country").selectOption({index:3});  //Using value
   await page.selectOption("#country",'India')    //By text 
    
    //Assesrtions 
    //1) Total no. of options in a dropdown 
    const options= await page.locator('#country oprion')
    await expect(options).toHaveCount(10);

//    2) Check no of optioms in dropdown
//     const options= await page.$$('#country option')
//     console.log("Number of options", options.length)
//     await expect(options.length).toBe(10)

    //3) Check Presence of value in dropdown
   const content= await page.locator('#country').textContent()
   await expect(content.includes('India')).toBeTruthy();



    await page.waitForTimeout(3000);
   
})