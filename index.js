/*I ran the "tsc" command which created an equivalent .js file
 in the same directory and will now surface any errors found by
 the Typscript transcompiler.*/
/* I created an index.js and ran the resultant JavaScript file
with the node command.*/
//Type Inferences project
var aged = true;
var realAge = 0;
if (aged) {
    //I had to change the string '4 years' into the number 4.
    realAge = 4;
}
var dogAge = realAge * 7;
console.log("".concat(dogAge, " years"));
//Type Shapes project
var firstName = 'muriel!';
//There was a typo here. I changed "toUppercase" to "toUpperCase".
console.log(firstName.toUpperCase());
//There was also a typo here. I changed "lenght" to "length".
console.log(firstName.length);
//Any project
//Declare a variable with "let" named "guess" without assigning it a value.
var guess;
//On a new line, assign a color (as a string) to the "guess" variable.
guess = 'blue';
//Now we’re thinking of a number… Take a guess at what it is. On a new line, reassign the guess variable to your number guess.
guess = 4;
//I ran tsc and noticed the lack of error messages. 
// Variable Type Annotations project
// Here I added a type declaration to inform TypeScript that it should be a string.
var phoneNumber;
if (Math.random() > 0.5) {
    phoneNumber = '+61770102062';
}
else {
    phoneNumber = '7167762323';
}
//I ran tsc and there was an error in line 47. The reason was that there was a numeric value instead of string value.
