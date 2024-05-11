let color = prompt("choose color (Red, Yellow or Green)");

color = color.toLowerCase();

if (color === "red"){
    console.log("Stop!")
}

else if (color === "yellow"){
    console.log("Slow down")
}

else if (color === "green"){
    console.log("Go")
}

else {
    console.log("Invalid Input")
}