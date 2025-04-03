/*

    Assignment: JavaScript Fundamentals
    Student Name: Shayne McNeil
    Student ID: W0454809
    Date: April 3, 2025

*/

// PART 1

// Declare our variables

let studentName = "Shayne McNeil";
let studentAge = 30;
let isEnrolled = true;

// Display values using document.write()

document.write(studentName + "<br>");
document.write(studentAge + "<br>");
document.write(isEnrolled + "<br>");

// Display typeof studentAge before and after conversion to string;

document.write(`Type of studentAge before conversion: ${typeof(studentAge)}<br>`);
studentAge = studentAge.toString();
document.write(`Type of studentAge after conversion: ${typeof(studentAge)}<br>`);

// PART 2

// Ask user to enter 2 numbers using prompt()

let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");

// Convert inputs to numbers and perform the 5 main operations (including modulus)

num1 = parseInt(num1);
num2 = parseInt(num2);

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

// Write all results to webpage

document.write(`Number 1 is: ${num1}<br>`);
document.write(`Number 2 is: ${num2}<br>`);

document.write(`Result of addition: ${addition}<br>`);
document.write(`Result of subtraction: ${subtraction}<br>`);
document.write(`Result of multiplication: ${multiplication}<br>`);
document.write(`Result of division: ${division}<br>`);
document.write(`Result of modulus: ${modulus}<br>`);

// PART 3

// Ask user to enter their age

let userAge = parseInt(prompt("Enter your age: "));

// Display if user is eligible to vote or not based on age 

if(userAge >= 18) {
    document.write("You are eligible to vote!<br>");
} else {
    document.write("You are not eligible to vote yet.<br>");
}

// PART 4

// Print numbers 1 to 10 on webpage using for loop

for(let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Prompt user to enter a number greater than 10. Keep prompting until they enter a valid number

let userInput = 0;

while(userInput <= 10) {
    userInput = parseInt(prompt("Enter a number greater than 10: "));
}