const {test,expect}= require('@playwright/test')

//only
test.only('Test1', async({page})=>{
    console.log("This is Test1")
})

//skip
// test.skip('Test2', async({page})=>{
//     console.log("This is Test2")
// })


// test('Test2', async({page,browserName})=>{
//     console.log("This is Test2")
//     if(browserName==='chromium'){
//         test.skip()
//     }
// })

//Fixme
test('Test2', async({page})=>{
    test.fixme()
    console.log("This is test2 , its open with bug")
})

//test.fail()
// test('Test3', async({page})=>{
//     test.fail()  //expectation is to fail
//     console.log("This is test3")
//     expect(1).toBe(2) //if both exp and Actual is failed then test pass
// })

//test.fail with condition 
test('Test3', async({page,browserName})=>{
     console.log("This is test3")
     if(browserName==='chromium'){
        test.fail()  //exp
     }
})

//slow x3 times slow
test('Test4', async({page})=>{
    test.slow();
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log("This is test2 , its open with bug")
})