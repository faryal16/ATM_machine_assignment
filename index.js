#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 9876;
let pinCode = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
//checking your pin
if (pinCode.pin === myPin) {
    console.log("Correct pincode!!!");
}
// if pin is correct it will run
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "select your operation",
        type: "list",
        choices: ["withdraw", "checkbalance", "Fast deposite"], //ask about desireable withdraw
    },
]);
if (operationAns.operation === "withdraw") // if withdraw selected
 {
    let amount = await inquirer.prompt([
        {
            name: "amount",
            message: "How much you want to withdraw?",
            type: "number",
        },
    ]);
    myBalance -= amount.amount;
    if (amount.amount <= 20000) {
        console.log("sorry! you have insufficent balance.");
    }
    else {
        console.log("Please enter a valid amount you have only 20000");
    }
}
else if (operationAns.operation === "checkbalance") {
    console.log(`your current balance is :${myBalance}`);
}
else if (operationAns.operation === "Fast deposite") {
    let MultipalAmount = await inquirer.prompt([
        {
            name: "cash",
            message: "please select your amount.",
            type: "list",
            choices: ["5000$", "10000$", "12000$", "150000$"],
        },
    ]);
    console.log(`take your cash.`);
    console.log("THANK YOU!!");
}
else {
    console.log("Enter you Pin cearfully.");
}
