const {expect,test} = require('@playwright/test')
test("Autosuggest DropDown",async({page})=>{
    
    await page.goto('https://www.redbus.in/');
    await page.getByText('From', { exact: true }).fill('Delhi');
    await page.waitForSelector(".listItem___942b1e .leftContent___922a07  :first-child ");
    const fromCity=await page.$$(".listItem___942b1e .leftContent___922a07  :first-child ")
    for(let option of fromCity){
        const value=await option.textContent();
        //console.log(value)
        if(value.includes('Anand Vihar, Delhi')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
    
})