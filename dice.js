// random numbers in Javascript basics:

// Math.random() will provide a random number rangin from 0 (including 0) and 1 (not including 1)

// let randomNumber = Math.random() * 6 will provide the range of 0 - 5.999

// console.log(randomNumber)

// Math.floor takes some input and registers it as a whole number, ignoring the decimels.

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber) ==> 3

// so taking all of this together, we can make a random number with whole numbers instead
// of decimels by combining the two ==>
// let randomNumber = Math.floor(Math.random()*6)
// This however only adds up to 5, and includes 0, which is not ideal.
// So we have to shift the addition by one to include 6 and exclude 0. see below

// let randomNumber = Math.floor(Math.random()*6) + 1

// console.log(randomNumber)

// lets create a function, rollDice(), that returns a random number between 1 and 6 now

function rollDice() {
    let randomNumber = Math.floor(Math.random() + 6) + 1
    return randomNumber
}


//  Just to check, always remember to console.log

console.log(rollDice());