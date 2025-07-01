/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

dapatkan element id dari input value, unit type, convert button, dan show result (const variable)

step by step
1. input number
2. choose unit type
- user memilik unit type
- akan menghasilkan output perkalian dari pilihan unit type
3. click convert button
- jika user tidak memasukkan input number maka akan error
- mengambil value dari input number
- mengambil value dari unit type
- melakukan perhitungan berdasarkan unit dipilih
- show the result
4. show the result

- bila user click convert tanpa pilih unit maka akan muncul error pada shouw result

*/

const inputNumber = document.getElementById("input-number")
const unitType = document.getElementById("unit-type")
const convertButton = document.getElementById("convert-btn")
const showResult = document.getElementById("show-result")
let result = 0
let showComplateResult = ""

convertButton.addEventListener("click", ()=> {
    let inputValue = inputNumber.value
    if(inputValue === ""){
        showResult.textContent = "Please enter a number to convert."
        return
    }
    if(unitType.value === "none"){
        showResult.textContent = "Please select a unit type to convert."
        return
    }
    showResult.textContent = showComplateResult

})

    unitType.addEventListener("change", () =>{
    let typeNumber = 1
    if(unitType.value === "Mft") {
        typeNumber = 3.281
        result = inputNumber.value * typeNumber
        showComplateResult = result.toFixed(2) + " feet"
    } else if(unitType.value === "ftM"){
        typeNumber = 1 / 3.281
        result = inputNumber.value * typeNumber
        showComplateResult = result.toFixed(2) + " meters"
    } else if(unitType.value === "Kglbs") {
        typeNumber = 2.204
        result = inputNumber.value * typeNumber
        showComplateResult = result.toFixed(2) + " pounds"
    } else if(unitType.value === "lbsKg"){
        typeNumber = 1 / 2.204
        result = inputNumber.value * typeNumber
        showComplateResult = result.toFixed(2) + " kilograms"
    } else if(unitType.value === "CF"){
        typeNumber =  1.8
        result = (inputNumber.value * typeNumber) + 32
        showComplateResult = result.toFixed(2) + " Fahrenheit"
    } else if(unitType.value === "FC") {
        typeNumber = 1 / 1.8
        result = (inputNumber.value - 32) * typeNumber
        showComplateResult = result.toFixed(2) + " Celsius"
    } else if(unitType.value === "Lgal") {
        typeNumber = 0.264
        result = inputNumber.value * typeNumber
        showComplateResult = result.toFixed(2) + " gallons"
    } else if(unitType.value === "galL") {
        typeNumber = 1 / 0.264
        result = inputNumber.value * typeNumber
        showComplateResult = result.toFixed(2) + " liters"
    } else {
        typeNumber = 1
    }
    return showComplateResult
    })
