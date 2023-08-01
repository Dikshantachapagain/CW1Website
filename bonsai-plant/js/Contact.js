

/* This is a JavaScript function that validates a form with three fields: "name", "email", and "message".
The function starts by using the "document.getElementById()" method to select the values of the three fields from the HTML document.
Then it checks if any of the fields are empty by checking if the value of each field is equal to an empty string "". If any of the fields are empty, the function displays an alert message saying "Name, Email and Message must be filled out" and returns "false".
If all the fields are filled, the function displays an alert message saying "Form submitted successfully!" and returns "true".
This function could be called when the form is submitted, and the returned value can be used to determine whether the form should be submitted to the server or not*/ 

function validateForm() {
    // selecting the fields from html
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // check if the values are not null
    if (name == "" || email == ""|| message=="") {

        // give alert if fields are empty
      alert("Name, Email and Message  must be filled out");
      return false;
    }

    // display success message if form submitted
    alert("Form submitted successfully!");
  return true;

  }
  
