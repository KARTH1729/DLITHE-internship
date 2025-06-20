//Simple calculator using switch.
 
 let num1 = 10, num2 = 5, operator = '*';
 switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
 }