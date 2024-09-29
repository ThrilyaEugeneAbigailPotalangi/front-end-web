// Declare variables
var val1 = 3;
var val2 = 8;
var myName = "Thrilya Eugene Abigail Potalangi";

// Add event listener to the button with id "my-btn"
document.getElementById("my-btn").addEventListener("click", function() {
    myFunction(myName, val1, val2);
});

// Define the function
function myFunction(name, a, b) {
    var value = a * b;
    var join = name + ": " + value;
    document.getElementById("value-demo").innerHTML = join;
}
