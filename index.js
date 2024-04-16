#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPinCode = 12345;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAns.pin === myPinCode) {
    console.log("Correct pincode!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select your operation",
            type: "list",
            choices: ["withdraw", "checkbalance", "deposite"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        if (amountAns.amount <= 10000) {
            console.log(`your remaining amount is ${myBalance} $`);
        }
        else {
            console.log("Please enter a valid amount you have only 10000");
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(`your balance is: ${myBalance}$`);
    }
    else if (operationAns.operation === "deposite") {
        let cashAns = await inquirer.prompt([
            { name: "cash",
                message: "which amount you want to deposite",
                type: "list",
                choices: [5000, 10000, 15000, 20000],
            }
        ]);
        console.log(`today you deposite ${cashAns.cash} cash in your bank account so now your total amount is ${myBalance + cashAns.cash}`);
    }
}
else {
    console.log("INcorrect Pin!!");
}
