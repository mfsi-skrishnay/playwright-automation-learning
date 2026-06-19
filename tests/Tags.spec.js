const{test, expect}= require('@playwright/test');
test("Test 1@Sanity", async ({page})=>{
    console.log("This is my test 1..")
})

test("Test 2@Sanity", async ({page})=>{
    console.log("This is my test 2..")
})

test("Test 3@Regression", async ({page})=>{
    console.log("This is my test 3..")
})

test("Test 4@Regression", async ({page})=>{
    console.log("This is my test 4..")
})

test("Test 5@Sanity@Regression", async ({page})=>{
    console.log("This is my test 5..")
})

