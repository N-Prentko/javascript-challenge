// Declare a variable named table and assign it the value
// of the data within data.js
let table = data;
console.log(table);

// Declare a variable, tbody, and assign it the value of the table body 
let tbody = d3.select("tbody");

// Use forEach method to call a function for each element in array
table.forEach(function(UFO_Info) {
    
    // Display in console
    console.log(UFO_Info);
   
    // Append/add one table row for each individual UFO sighting
    let row = tbody.append("tr");

    // Use Object.entries() method to return an array of given objects
    // enumerable [key, value] pairs
    Object.entries(UFO_Info).forEach(function([key, value]) {
      console.log(key, value);
     
      // Add a cell to the row for each value
      var newCell = row.append("td");
      newCell.text(value);
    });
  });


// Create button
let button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Declare a variable, input, and filter data by datetime 
    let input = d3.select("#datetime");
    
    // Get the value property of the input's date, state, shape of sighting
    let valueProperty = input.property("value");
    
    // Invoke valueProperty
    console.log(valueProperty);

    // Filter Data with datetime equal to valueProperty
    let filtered = table.filter(sighting => sighting.datetime === valueProperty);
   
    // console.log filtered
    console.log(filtered);

    // Invoke specified function forEach respective function
    filtered.forEach(function(selections) {

    // Display in console
    console.log(selections);
   
    // Append one table row `tr` for each UFO sighting object
    let row = tbody.append("tr");
    
    // Use `Object.entries` to display UFO sighting value in console
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        
        // Append a cell to the row for each value
        let newCell = row.append("td");
        newCell.text(value);
    });
});
});