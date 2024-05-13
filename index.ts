#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//print a welocme message
console.log(chalk.magenta.bold("\n\t\t>>>>>>>> WELCOME TO MY PROJECT<<<<<<<\t\n"));
console.log(chalk.magenta.bold("\t\t~~~~ ATM-Automated_Teller_Machine ~~~~\t\t\n"))
console.log("~".repeat(50))

let myBalance = 10000;

let myPinCode = 12345;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.rgb(255, 102, 204)("Enter your pin"),
    type: "number",
  },
]);
if (pinAns.pin === myPinCode) {
  console.log(chalk.yellowBright("\nCorrect pincode!!!\n"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: chalk.rgb(0 ,255, 0)("\nSelect your operation\n"),
      type: "list",
      choices: ["withdraw", "checkbalance","deposite"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let withdrawAns =await inquirer.prompt(
      [
        {
          name:"withdraw_method",
          type:"list",
          message:chalk.rgb(0,255, 0)("\n Select an operation!!\n "),
          choices:["Fast Cash", "Enter Amount"]
        },
      ]
    );
    if(withdrawAns.withdraw_method === "Enter Amount"){
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: chalk.rgb(255, 102, 204)("\nEnter your amount to Withdraw:\n"),
          type: "number",
        },
      ]);
      myBalance -= amountAns.amount
      if(amountAns.amount <=10000 ){
        console.log(chalk.green(`\n ${amountAns.amount}$ withdraw successfully!\n`))
      console.log(chalk.green(`\nyour remaining amount is ${myBalance}$\n`));
      }else{
        console.log(chalk.red("\nPlease enter a valid amount you have only 10000\n"));
        
      }
    } else if(withdrawAns.withdraw_method === "Fast Cash"){
      let fastcashAns = await inquirer. prompt(
        [
          {
            name:"Fast_Cash",
            type:"list",
            message:chalk.rgb(255, 102, 204)("\nSelect Amount:\n"),
            choices:["500$", "1000$", "1500$","5000$", "20000$"]
          }
        ]
      );
      if(fastcashAns.Fast_Cash > myBalance){
        console.log(chalk.red.bold("\nInsufficient Balance\n"))
      }else{
        myBalance -= fastcashAns.Fast_Cash
        console.log(chalk.green(`\n ${fastcashAns.Fast_Cash} withdraw successfully!\n`))
        console.log(chalk.green(`\nyour remaining amount is ${myBalance}$\n`));
      }
    }
    
  }
  else if(operationAns.operation === "checkbalance"){
    console.log(chalk.blue(`\nyour balance is: ${myBalance}$\n`) );
    
  }
  else if(operationAns.operation === "deposite"){
    let cashAns = await inquirer.prompt(
    [
      {name:"cash",
       message:chalk.rgb(25, 102, 204)("\nwhich amount you want to deposite?\n"),
       type:"list",
       choices:[5000,10000,15000,20000],
      }   
    ]
    )
    console.log(chalk.green(`\ntoday you deposite ${cashAns.cash} cash in your bank account so now your total amount is ${myBalance + cashAns.cash}\n`));
    
  }
  
}else{
    console.log(chalk.redBright.bold("INcorrect Pin!!"))
  }

  console.log("~".repeat(50))
