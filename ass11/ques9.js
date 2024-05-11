let day = prompt("Enter a day");

day = day.toLowerCase();


if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday")
{
    console.log("Weekday")
}

else if (day === "saturday" || day === "sunday" )
{
    console.log("Weekend")
}

else {
    console.log("Invalid Input")
}

