#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//we will push all todos in this loops.
let todos = [];
let condition = true;
// welcome msg
console.log(chalk.blue("\n\t\t WELCOME TO MY TODO,s LIST \t\t\n"));
// In this loop user will ask user  for adding their todos :
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.green("insert your task u wanna add..\n"),
        },
    ]);
    // if user won't add any todos it will print this message
    if (!answer.todo) {
        console.log(chalk.yellow("firstly add some think\nyour list is currently empty\nlet me know what you wanna add.."));
        condition = answer.todo;
    }
    else {
        // if user add or append their task then this message will print and while loop will start from here
        // it  will push in array whatever added in todos
        todos.push(answer.todo);
        console.log(chalk.green(`"${chalk.red(answer.todo)}"your task has been successfully added to the list.\n`));
    }
    // show  confirmation message that user wanna add  more todos or not .
    let addmoretodo = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blue("what do you wanna in your list?"),
            default: "false"
        }
    ]);
    if (condition = addmoretodo.addmore) {
        answer.todo;
    }
    else //(if they saelect no list will stop here)
     {
        console.log(chalk.yellow("\nyour todos list:\n"));
    }
    // it will print our data separatly line by line
    if (todos.length >= 0) {
        todos.forEach((list) => {
            console.log(chalk.rgb(222, 173, 237)("\n", list));
        });
    }
    else {
        console.log(chalk.greenBright("you add nothing in list..."));
    }
    // and our end
    console.log(chalk.gray("\n\t' list is now structured and finalized accordingly'!\n"));
    console.log(chalk.green("\n\t\tThank You !!\t\t\n"));
}
