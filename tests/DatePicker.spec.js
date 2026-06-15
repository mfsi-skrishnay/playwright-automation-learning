const { test, expect } = require('@playwright/test');

test("Handling DatePicker", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
   // Method 1
   // await page.fill('#datepicker', '06/26/2026')
    
    //Method 2 
    const year="2027"
    const month="June"
    const day="26"

    await page.click('#datepicker') //opens calender
    while(true){
        const currYear= await page.locator('.ui-datepicker-year').textContent();
        const currMonth= await page.locator('.ui-datepicker-month').textContent();
        if(currYear== year && currMonth==month){
             break;
        }

        await page.locator('[title="Next"]').click();
    }
    //  const dates= await page.$$('//a[@class="ui-state-default"]')
    //  for(const dt of dates){
    //     if(await dt.textContent()==day){
    //         await dt.click();
    //         break
    //     }
    //  }

     //Date selection without loop
     await page.click(`//a[@class="ui-state-default"][text()='${day}'] `)
     await page.waitForTimeout(3000);
});
