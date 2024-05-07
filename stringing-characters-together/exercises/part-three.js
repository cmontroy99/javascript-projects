//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(`${language.slice(0,1)}${language.slice(4,5)}`);
//2. Without using slice(), use method chaining to accomplish the same thing.
let firstLetter = language[0];
let secondLetter = language[4];
let abb = firstLetter + secondLetter;
console.log(abb);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${abb}.`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let rocket = "  3...2...1... liFToFF!     "
console.log(rocket.toUpperCase().trim().slice(13, 20));
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
notTitleCase = notTitleCase.replace('title case', 'Title Case');
console.log(notTitleCase);
