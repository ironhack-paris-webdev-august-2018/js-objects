var theUser = [
  "Hugh Jackman",
  "hugh@wolverine.com",
  "October 12, 1968",
  "0666666666",
  "555 Rue Australie"
];

console.log(theUser[0]);
console.log(theUser[3]);
console.log(theUser[99]);

var theUser = {
  "full name": "Hugh Jackman",
  email: "hugh@wolverine.com",
  birthdate: "October 12, 1968",
  phone: "0666666666",
  address: "555 Rue Australie"
};

console.log(theUser["full name"]);
console.log(theUser.phone);
console.log(theUser.height);

// does the "height" key exist?
if (theUser.height) {
  console.log("height exists");
}
else {
  console.log("height doesn't exist");
}


// Creating new keys
theUser.nationality = "Australian";

// Updating existing keys
theUser.address = "555 Wolverine St, Sydney, Australia";

// Remove existing keys
delete theUser.email;

console.log(theUser);

// Gives you an array of the KEYS as strings
console.log( Object.keys(theUser) );
// [ "full name", "birthdate", "phone", "address", "nationality" ]

// Gives you an array of the VALUES
var hughValues = Object.values(theUser);

console.log("Hugh object's VALUES:");
// for (var i = 0; i < hughValues.length; i++) {
//   console.log("- " + hughValues[i]);
// }

hughValues.forEach(function (oneValue) {
  console.log("- " + oneValue);
});
