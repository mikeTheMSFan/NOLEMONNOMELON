'use strict';

//Get values from UI
function getValues() {
  const inputValue = document.getElementById('userString').value;
  const isPalindromeCheck = palindromeCheck(inputValue);
  displayResults(isPalindromeCheck);
}
//Check to see if word is palindrome
function palindromeCheck(inputVal) {
  //Matches anything that is A-Z, a-z, and 0-9. Also searches globally.
  const sub = /[^A-Za-z0-9]/g;

  //Assigns input string for parsing
  let formattedString = inputVal;
  //Changes all letters to lower case
  formattedString = formattedString.toLowerCase();
  //Uses the regEx expression to remove anything that doesnt match.
  formattedString = formattedString.replace(sub, '');

  //splits the formmating string into an array of characters, reverses the array,
  //and joins the reverse array to form the reversed string
  const reverseFormattedString = formattedString.split('').reverse('').join('');

  //returns true or false based on the result of the comparison.
  return formattedString === reverseFormattedString;
}
//Display result to user
function displayResults(isPal) {
  if (isPal) {
    document.getElementById('msg').innerHTML = `A palindrome! 🎉🎉🎉🎉`;

    //show the alert box
    document.getElementById('alert').classList.remove('alert-danger');
    document.getElementById('alert').classList.add('alert-success');
    document.getElementById('alert').classList.remove('invisible');
  } else {
    document.getElementById('msg').innerHTML = `Not a palindrome 😟😟😟😟`;

    //show the alert box
    document.getElementById('alert').classList.remove('alert-success');
    document.getElementById('alert').classList.add('alert-danger');
    document.getElementById('alert').classList.remove('invisible');
  }
}
