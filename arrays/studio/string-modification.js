const input = require('readline-sync');
let str = "LaunchCode";
let variable1 = str.slice(0,3);
let variable2 = str.slice(3,str.length);

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
str.slice(0,3);
console.log(str.slice(0,3));
console.log(`${variable2}${variable1}`);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} turned into ${variable2} because we somehow know what we're doing.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let question = input.question("How many letters will be relocated? ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (question > str.length) { question = 3;
    console.log(`ERROR: Number provided is larger than length of ${str}.`);
} 