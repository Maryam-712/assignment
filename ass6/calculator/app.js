let operator = prompt("Enter the operator");
let num1= parseInt(prompt("Enter First number"));
let num2= parseInt(prompt("Enter Second number"));
console.log(num1 + operator + num2)

if(operator == "+"){
    let add = num1+num2;
    console.log(add)
}

else if(operator == "-"){
    let sub = num1-num2;
    console.log(sub)
}

else if(operator == "*"){
    let mul = num1*num2;
    console.log(mul)
}

else if(operator == "/"){
    let div = num1/num2;
    console.log(div)
}

else {
    console.log("Try again")
}



