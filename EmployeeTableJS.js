// employee.js
// This script creates an object using form data.

// Create a global array to store all employees as they are added
   var employees=[];

// Function called when the form is submitted.
// Function creates a new object.
function process() {
    'use strict';

    // Get form references:
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;
    // add a employeeId variable here to store a randomly generated 
    // 8 digit employee id number
    // Look back on page 164 if you need help generating a random number
    var employeeId = parseInt(Math.random() * 100000000);

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // Create a new object:
	var employee = {
	    firstName: firstName,
	    lastName: lastName,
	    department: department,
        // random employeeId to this employee object
        employeeId: employeeId,
	    hireDate: new Date()
	}; // Don't forget the semicolon!
  
    // add each newly created employee object to your employees array
    employees.push(employee);
	
	console.log(employee);
    // show your employees array in the console
    console.log(employees);

    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.lastName + ', ' + employee.firstName + '<br>';
    message += 'Department: ' + employee.department + '<br>' + 'Employee ID: ' +
    // add the employeeId to the generated message
    employee.employeeId + '<br>' +
     'Hire Date: ' + employee.hireDate.toDateString() + '<br>' +
    // display the total number of employees in your array here
    'Number of employees: ' + employees.length; 
    
    // Display the employee object:
    output.innerHTML = message;
        
    // Return false:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;
// Browser detection
if (document.all && !window.opera)
{
        Internet Explorer
}
else if (window.opera)
{
       // Opera
}
else if (navigator.userAgent.indexOf("Safari") != -1)
{
       // Safari
}
else if (!document.all && !window.opera)
{
       // Firefox/Mozilla, Netscape and other browsers
}