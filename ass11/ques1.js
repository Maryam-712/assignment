let country = prompt("Enter your country name: ");
let city = prompt("Enter your city name: ");
let area = prompt("Enter your area name: ");

country = country.toLowerCase();
city = city.toLowerCase();
area = area.toLowerCase();

if (country === "pakistan" && city === "karachi" && area === "defence"){
    console.log("Welcome.")
}

else {
    console.log("Invalid area")
}
