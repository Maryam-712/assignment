let prefer = prompt("What would you prefer, tea or coffee? ");

prefer =prefer.toLowerCase();


if (prefer === "tea"){
    console.log("Here's your tea")
}

else if (prefer === "coffee"){
    console.log("Here's your coffee")
}

else {
    console.log("Somethinng went wrong")
}