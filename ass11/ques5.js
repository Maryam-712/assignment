let paying = prompt("Is your father paying? ");
let sale = prompt("Is there  a sale?");

paying =paying.toLowerCase();
sale =sale.toLowerCase();


if (paying === "yes"){
    console.log("You will go shopping")
}

else if (sale === "yes"){
    console.log("You will go shopping")
}

else {
    console.log("You will not go shopping");
}