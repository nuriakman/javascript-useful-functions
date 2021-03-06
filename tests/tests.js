import {
    findKeyByValue,
    sleep,
    objSize,
    randomNumber,
    shuffle,
    genCh,
    range,
    choice,
    zip,
    sortChars,
    sortByKeys
} from "../functions"

var a = ["one","two","three","four","five"]

var b = [1,2,3,4,5,6,7,0]

console.log(choice(a))

console.log(genCh("D","M"))

console.log(zip(a,b))

console.log(shuffle(a))

console.log(range(5,11))

console.log(sortChars(["v","z","a",2,"w","t","r","R",3],false))

console.log(sortChars(["v","z","a",2,"w","t","r","R",3],true))

var keyArr = ["new","basic","member","regular","leader"]
var rawArr = ["member","basic","new","kjfghjkgl","regular","leader","regular","asdasd","leader","member"]

console.log(sortByKeys(keyArr,rawArr,true))
console.log(sortByKeys(keyArr,rawArr,false))

var o = {
    "name":"abdullah",
    "surname":"veliyev",
    "age":16
}

console.log(objSize(o))

console.log(randomNumber(4,9))

async function trial(){
    await sleep(2000)
    console.log(findKeyByValue(o,"abdullah"))
}

trial()