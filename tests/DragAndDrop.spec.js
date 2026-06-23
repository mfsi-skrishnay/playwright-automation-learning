const{test, expect}=require('@playwright/test')
test('Drag and Drop', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const source = await page.getByText('Drag me to my target',{exact:true});
    const target = await page.getByText('Drop here',{exact:true})

    //Method1 
    await source.hover();
    await page.mouse.down();
    await target.hover();
    await page.mouse.up();

    //Method2
    await source.dragTo(target);

    
})