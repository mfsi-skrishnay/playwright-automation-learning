const{expect , test}= require('@playwright/test')
test("Handle Checkboxes", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Single checkbox
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await expect(await page.getByRole('checkbox', { name: 'Sunday' })).toBeChecked();
    await expect(await page.getByRole('checkbox', { name: 'Sunday' }).isChecked()).toBeTruthy();
    await expect(await page.getByRole('checkbox', { name: 'Monday' }).isChecked()).toBeFalsy();
    
   //Multiple checkboxes
   const checkboxes = [
    'Sunday' ,
    'Monday' ,
    'Tuesday' ,
    
]
    for(const day of checkboxes){
        await page.getByRole('checkbox',{name:day}).check();
    }

    await page.waitForTimeout(3000);
//Unchecke the already selected checkboxes
    for(const day of checkboxes){
        if(await page.getByRole('checkbox',{name:day}).isChecked())
        {
        await page.getByRole('checkbox',{name:day}).uncheck;
        }
    }

    await page.waitForTimeout(3000);
})