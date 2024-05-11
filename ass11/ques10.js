let age = prompt("Enter your age");

age = age.toLowerCase();

if (age < 12 && age >= 1 ){
    console.log("Child")
}

else if (age < 18 && age >= 12 ){
    console.log("Teenager")
}

else if (age < 65 && age >= 18 ){
    console.log("Adult")
}

else if (age >= 65 && age <= 150 ){
    console.log("Senior")
}

else if (age < 1 && age > 150 ){
    console.log("Invalid age")
}

else {
    console.log("Something went wrong")
}

 

