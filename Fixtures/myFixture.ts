import { test as myTest } from "@playwright/test" //mytest is an ally

type manaswi = {
    age: number,
    email: string
} //manaswi is a datatype where age and email are properties/type

const myFixtureTest = myTest.extend<manaswi>({
    age: 27,
    email:"manaswijadhav25@gmail.com"
})
// within extend hook giving generic datatype , reuse the original functionality of the base test

export const test = myFixtureTest;