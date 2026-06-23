const{test}=require('@playwright/test');
test.describe.configure({mode:"parallel"});

test("Test1", async({page})=>{
    console.log("This is Test1")
});

test("Test2", async({page})=>{
    console.log("This is Test2")
});
test("Test3", async({page})=>{
    console.log("This is Test3")
});
test("Test4", async({page})=>{
    console.log("This is Test4")
});