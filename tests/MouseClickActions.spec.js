const{test, expect}=require('@playwright/test')
test('Mouse RightCLick', async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    const Rightbutton=await page.getByText('Right Click Me', { exact: true });
    const clickButton=await page.getByText('Click Me', { exact: true });
    const DoubleClickBtn=await page.getByText('Double Click Me', { exact: true });

    //Click action
    await clickButton.click();    
    //Right Click Action 
    await Rightbutton.click({button:'right'})
    //Double click Action 
    await DoubleClickBtn.click({clickCount:2})        //Method 1 
    await DoubleClickBtn.dblclick()                   //Method 2





})