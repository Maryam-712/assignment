let membership = prompt("do you have a membership?");
let student = prompt("are you a student?");

membership = membership.toLowerCase();
student = student.toLowerCase();


if (membership === "yes" || student === "yes"){
    console.log("You qualify for a discount.")
}

else {
    console.log("Sorry, no discount for you.")
}