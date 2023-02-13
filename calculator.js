import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Please enter your first number: "
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Please enter your second number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Which operation do you want to perform"
    }
]);
if (answer.firstNumber && answer.secondNumber && answer.operator) {
    let result = 0;
    if (answer.operator === "+") {
        result = answer.firstNumber + answer.secondNumber;
        console.log(`The result of first and second numbers are  ${result}`);
    }
    if (answer.operator === "-") {
        result = answer.firstNumber - answer.secondNumber;
        console.log(`The result of first and second numbers are  ${result}`);
    }
    if (answer.operator === "*") {
        result = answer.firstNumber * answer.secondNumber;
        console.log(`The result of first and second numbers are  ${result}`);
    }
    if (answer.operator === "/") {
        result = answer.firstNumber / answer.secondNumber;
        console.log(`The result of first and second numbers are  ${result}`);
    }
}
