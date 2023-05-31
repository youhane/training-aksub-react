// Variable Types & Data Types
// var, let, const

// var == global variable
// let == local variable
// const == constant variable

var nama = "John Doe"; //string
var angka = 10; //number
let bener = true; //boolean
const pie = 3.14; //constant
let array1 = ["1", 1, true, ["aaaaa"], {}] //array
const car = {
    type:"Fiat",
    model:"500",
    color:"white",
    amount:1,
};

car.type

console.log(nama)
console.log(car.type)
console.log(car.amount)

// Scoping and Functions
// Global == bisa diakses dimana saja
// Local == hanya bisa diakses di dalam function atau didalem kurung kurawalnya

// int n = 10;
// int main(){
//     int m = 20;
// }

scoping(mid, "end")

// a = string
// b = 10
function print(a, b) {
    return console.log(a+b)
    // return a+b;
}

print("string", 10) //string10
print(10, 10) //20

var mid = "mid1"
function scoping(front, back){
    let mid = "mid"
    mid = "mid3"
    mid = 4
    mid = [123123]

    console.log("mid", typeof mid) //cek tipe data
    
    // var mid = "mid"
    // var mid = "mid2"
    // console.log(mid)
    // console.log(front+" "+back)
    
    // const mid = "mid"
    // console.log(mid)
    // mid = "mid2"
    // console.log(mid)

    variabel = "variabel ini di function"
    console.log(variabel)
    variabel = 10
    console.log(variabel)
}

scoping(mid, "end")

// Operator === == < > != !== + /  * % **
// "1" 1 // == true // === false
// 1 1 // == true // === true
// "1" "1" // == true // === true

// Variable Hoisting == mengangkat variabel ke atas
// mobil = "honda"
// console.log("nama mobilnya", mobil)
let mobil = "toyota"
console.log("nama mobilnya", mobil)

// Functions and How to Write Them
function function1(param1, param2) {
    // return param1+param2
}

// var function2 = (param1, param2) => {
// let function2 = (param1, param2) => {
const function2 = (param1, param2) => {
    // return param1+param2
}
// ^^
// () => {

// }

// function2 = "a"
// console.log(function2)
// Contoh function
function pakeReturn(satu, dua){
    return satu*dua
}

function gapakeReturn(nama){
    console.log("nama saya adalah "+nama)
}

// console.log(pakeReturn(10, 10))
var hasil = pakeReturn(10, 10)
console.log(hasil)

var hasil2 = gapakeReturn("John Doe")
console.log(hasil2)
console.log(gapakeReturn("John Doe 2"))
// ^^ sama dengan console.log(undefined) atau console.log()
// console.log("tampilin sesuatu")

// Spread and Rest Operator (...)
// let arrayTest = [1, 2, 3, 4, 5]
// Not A Number = NaN // array kosong
// console.log(arrayTest[0])

// function tambahinSemua(arg1, arg2, arg3, arg4){
//     return arg1+arg2+arg3+arg4
// }

// console.log(tambahinSemua(arrayTest[0], arrayTest[1], arrayTest[2], arrayTest[3]))

// Rest Operator
function tambahinSemua(arg1, arg2, ...arg3){
    console.log("arg1", arg1)
    console.log("arg2", arg2)
    console.log("arg3", arg3)
    console.log(arg1+arg2)
    console.log(arg1+arg2+arg3)
}

tambahinSemua(96, 1, 2, 3, 4)

function contohSpreadOperator(){
    let array1 = [1, 2, 3, 4, 5]
    let array2 = [6, 7, 8, 9, 10]
    let array3 = [...array1, ...array2]
    console.log(array3)
}
contohSpreadOperator()

// Destructuring ==> Destrukturisasi
let hewan = ["kucing", "anjing", "burung", "ikan", "kuda", {nama:"andi", umur:10}]
let [cat, dog, bird, fish, horse, human] = hewan
// console.log(hewan[0])
// console.log(hewan[1902])
console.log(cat)
console.log(dog)
console.log(horse)
console.log(human)

// Iterator Functions
// looping tapi keren
// for, foreach, map, filter
let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]

console.log("FOR")
for (let index = 0; index < hari.length; index++) {
    console.log(index, hari[index])
}

console.log("FOREACH")
// Parameter ketiga akan menyimpan nilai array yang diberikan pada awal
hari.forEach((day, idx, hariBaru) => {
    console.log(idx, day)
    // hariBaru[0] = "senin2"
    // console.log("hariBaru", hariBaru)
});
// alert("hai")

console.log("MAP")
let testDays = hari.map((day, idx) => {
    // return day + " hari ke "+(hari.indexOf(day)+1)
    return day + " hari ke "+ parseInt(idx+1)
    // return day + " hari ke "+ idx+1
})
console.log(testDays)

console.log("FILTER")
let testDays2 = hari.filter((day) => {
    // return day + " hari ke "+ parseInt(idx+1)
    return day.length < 5
})
console.log(testDays2)

function filterHari (day) {
    // day = day + " hari ke "+ parseInt(idx+1)
    console.log(day + " hari ke " + 1)
    return day.length < 5
}
console.log("FILTER 2")
let testDays3 = hari.filter(filterHari)
console.log(testDays3)

// Async, Callback, Promises
// Async == asynchronous == tidak berurutan
// Sync == synchronous == berurutan
// Callback == function yang dipanggil oleh function lain
// Promises == janji

async function asyncFunction(){
    console.log("1")
    await setTimeout(() => {
        console.log("2")
    }, 2000);
    console.log("3")
}
asyncFunction()