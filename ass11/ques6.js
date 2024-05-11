let age = prompt("Enter your age");
let car = prompt("do you have a car?");

age = age.toLowerCase();
car  = car.toLowerCase();


if (age > 17 && car  === "yes"){
    console.log("you can drive and you own a car")
}

else {
    console.log("you can not drive a car.")
}