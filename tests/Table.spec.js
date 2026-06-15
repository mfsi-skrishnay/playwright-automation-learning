const{test,expect}=require("@playwright/test")
test("Handling table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   const table= await page.locator('#productTable')

   //Total no. of columns
   const columns = await page.locator('#productTable th');
   console.log("Number of columns:" ,await columns.count())
   expect(await columns.count()).toBe(4);

   //Total no. of rows
   const rows = await page.locator('#productTable tbody tr')
   console.log("Number of rows:" ,await rows.count())
   expect(await rows.count()).toBe(5);

   // Select checkbox for product 4 
   const Smartwatch= rows.filter({
    has: page.locator('td'),
    hasText :'Smartwatch'
   })
   await Smartwatch.locator('input').check()
  
   //Select multiple products 
   await selectProduct(rows,page,'Smartphone');
   await selectProduct(rows,page,'Smartwatch');
   await selectProduct(rows,page,'Tablet');

   //Print all product details 
   /*for(let i=0;i<await rows.count();i++){
    const row=rows.nth(i);
    const tds=row.locator('td')

    for(let j=0;j< await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent())
    }
   }
    */

   //Read data from all the pages 
  const pages= await page.locator('.pagination li a')
   console.log("Number of pages:",await pages.count());
   for(let p=0;p<await pages.count();p++){
    if(p>0){
        await pages.nth(p).click()
    }
    for(let i=0;i<await rows.count();i++){
    const row=rows.nth(i);
    const tds=row.locator('td')

    for(let j=0;j< await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent())
    }
   }
    await page.waitForTimeout(3000) 
}
})

async function selectProduct(rows,page,name){
    const products= rows.filter({
    has: page.locator('td'),
    hasText :name
   })
   await products.locator('input').check()
}