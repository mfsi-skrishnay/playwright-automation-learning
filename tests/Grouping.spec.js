//const{test, expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("This is beforeAll Hook...")
})

test.afterAll(async ()=>{
    console.log("This is afterAll hook...")
})

test.beforeEach(async ()=>{
    console.log("This is beforeEach hook... ")
})

test.afterEach(async ()=>{
    console.log("This is afterEach hook...")
})

test.describe.only('Group1',()=>{
test('Test1', async ({page})=>{
    console.log("This is my test1...")
})

test('Test2', async ({page})=>{
    console.log("This is my Test2...")
})
})

test.describe('Group2', ()=>{

test('Test3', async ({page})=>{
    console.log("This is my Test3...")
})

test('Test4', async ({page})=>{
    console.log("This is my Test4...")
})
})

test.describe('Group3', ()=>{

test('Test5', async ({page})=>{
    console.log("This is my Test5...")
})

test('Test6', async ({page})=>{
    console.log("This is my Test6...")
})
})

