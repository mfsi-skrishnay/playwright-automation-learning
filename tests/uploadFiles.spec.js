const{test,expect}= require('@playwright/test');
test('Upload Single File', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles('tests\\Upload-File\\file-sample_1.pdf')
    await page.getByText('Upload Single File', { exact: true }).click();
})

test.only('Upload Multipe Files', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#multipleFilesInput').setInputFiles(['tests\\Upload-File\\file-sample_1.pdf' , 'tests\\Upload-File\\file-sample_1.pdf'])
    await page.getByText('Upload Multiple Files', { exact: true }).click();

    await page.locator('#multipleFilesInput').setInputFiles([])           //Removing Files



})