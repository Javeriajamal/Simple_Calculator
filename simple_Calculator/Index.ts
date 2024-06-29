//#!/usr/bin/env node

import inquirer from "inquirer";

//printing a welcome message to users
console.log("\n\t Welcome to \Javeria Jamal's\ -CLI Simple Calculator \n" );

// Asking questions from users through inquirer

let answers = await inquirer.prompt([

    {message : "Enter first number", type: "number", name: "firstNumber"},
    {message : "Enter second number", type: "number", name: "secondNumber"},
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operators",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },

]);

// performing task using the operators and numbers that user selects

if (answers.operators === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
    else if (answers.operators === "Subtraction"){ 
        console.log(answers.firstNumber - answers.secondNumber) 
    }
        else if(answers.operators === "Multiplication"){
            console.log(answers.firstNumber * answers.secondNumber)
        }
        else if(answers.operators === "Division"){
            console.log(answers.firstNumber / answers.secondNumber)
        }
        else {
            console.log("Invalid Input!");
        }