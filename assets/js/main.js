// Ask the user for the number of kilometers to travel.
const km = prompt("How many kilometers do you need to travel?");

// Ask the user for their age.
const age = prompt("How old are you?");

// Define the price per kilometer.
const pricePerKm = 0.21;

// Check the age to calculate the appropriate discount.
if (age < 18) {
  // Apply a 20% discount for minors and display the discounted price.
  let minorDiscount = (pricePerKm * km * 0.2).toFixed(2);
  console.log(minorDiscount);
} else if (age >= 65) {
  // Apply a 40% discount for passengers over 65 and display the discounted price.
  let seniorDiscount = (pricePerKm * km * 0.4).toFixed(2);
  console.log(seniorDiscount);
} else {
  // Calculate the regular price for adults and display it.
  let result = (pricePerKm * km).toFixed(2);
  console.log(result);
}
//Answer: for example in I put age 19 and 100 km the price is going to be 21.00
