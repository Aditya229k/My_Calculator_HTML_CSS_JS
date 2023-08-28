// Initialize an empty string variable.
let string = "";

// Select all elements with the class 'button' and store them in the 'buttons' variable.
let buttons = document.querySelectorAll('.button');

// Convert the NodeList of buttons to an array and iterate through each button.
Array.from(buttons).forEach((button)=>{
  // Add a click event listener to each button.
  button.addEventListener('click', (e)=>{
    // Check if the clicked button's inner HTML is '='.
    if(e.target.innerHTML == '='){
      // If '=' is clicked, evaluate the 'string' and store the result in 'string'.
      string = eval(string);
      // Set the value of the input field to the new 'string' value.
      document.querySelector('input').value = string;
    }
    // Check if the clicked button's inner HTML is 'C'.
    else if(e.target.innerHTML == 'C'){
      // If 'C' is clicked, reset the 'string' to an empty string.
      string = "";
      // Set the value of the input field to an empty string.
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
        // If 'AC' is clicked, reset the 'string' to an empty string.
        string = "";
        // Set the value of the input field to an empty string.
        document.querySelector('input').value = string;
      }
    else{
      // If neither '=' nor 'C' is clicked, concatenate the button's inner HTML to 'string'.
      string = string + e.target.innerHTML;
      // Set the value of the input field to the updated 'string'.
      document.querySelector('input').value = string;
    }
  })
})
