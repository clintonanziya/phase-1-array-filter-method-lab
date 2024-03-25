// Function to find matching drivers (case insensitive)
function findMatching(drivers, query) {
    return drivers.filter(driver =>
        driver.toLowerCase() === query.toLowerCase()
    );
}

// Function to find drivers whose names begin with the provided letters
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver =>
        driver.toLowerCase().startsWith(query.toLowerCase())
    );
}

// Function to match drivers based on provided name
function matchName(drivers, query) {
    return drivers.filter(driver =>
        driver.name.toLowerCase() === query.toLowerCase()
    );
}


const drivers = ["John", "Jane", "Mary", "Michael"];

console.log(findMatching(drivers, "jOhn")); // Output: ["John"]
console.log(fuzzyMatch(drivers, "m")); // Output: ["Mary", "Michael"]
console.log(matchName([{ name: "John", hometown: "New York" }, { name: "Jane", hometown: "Los Angeles" }], "Jane")); // Output: [{ name: "Jane", hometown: "Los Angeles" }]
