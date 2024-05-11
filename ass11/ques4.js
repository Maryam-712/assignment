let age = prompt("Enter your age");
let id = prompt("do you have a valid iD?");

age = age.toLowerCase();
id  = id.toLowerCase();


if (age > 18 || id === "yes"){
    console.log("You are eligible.")
}

else {
    console.log("Sorry, you are not eligible.")
}