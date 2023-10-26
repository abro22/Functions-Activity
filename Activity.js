

//1. Create a function called myFunction that console logs the text Hello World




function myFunction () {
    console.log ("Hello World")

}

//-----------------------------------------------------------------

//2. Execute the function declared above

myFunction ()

//-----------------------------------------------------------------

//3. Create a function that takes a number as a parameter. This function should return a number that is double the number in the parameter 

function aFunction (aNumber) {
    return aNumber * 2

}

let answer = aFunction ( 6 )

console.log (answer)

//--------------------------------------------------------------

//4. Create a function that takes 2 numbers and multiplies them together

function twoNumbers (number1, number2) {
    return number1 * number2
}

let question = twoNumbers ( 10, 15 )
console.log (question)

//--------------------------------------------------------------

//5. Create a function that takes a string and IF the string is rainy, console logs "Bring an umbrella!"

// let weather = ["rainy ", "sunny", "windy", "snowy"]

function aString () {
    if (aString === "rainy") 
console.log (aString)

}



//--------------------------------------------------------------


// 6. Write out what you think this will print

// 1, 2 , 4, 5, 3, 6, 3 , 7

console.log(1)
console.log(2)

function callMe() {
console.log(3)
}

console.log(4)
blondie()
callMe()

function blondie() {
console.log(5)
}

console.log(6)
callMe()
console.log(7)