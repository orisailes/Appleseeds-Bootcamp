const { test, expect } = require("@jest/globals")
const myFuncs = require(`./index`)
let myPoke = new Pokemon (`raichu`,`electric`,[`punch`,`sleep`])
test(expect(myPoke)
.toEqual({
name:`raichu`,
type:`electric`,
attackList:[`punch`,`sleep`]
}))