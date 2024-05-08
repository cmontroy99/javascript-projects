//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let elementTable = [];
elementTable.push(element1, element2, element26);
//console.log(elementTable);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
//console.log(elementTable[1]);
//console.log(elementTable[1][1]);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
// console.log(elementTable[0][2]);
// console.log(elementTable[1][0]);
// console.log(elementTable[2][1]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let list1 = ['dog', 'cat', 'bird', 'mouse'];
let list2 = ['are', 'was', 'am', 'is'];
let list3 = ['warm', 'hot', 'cold', 'cool'];

let phrase = [];
phrase.push(list1, list2, list3);
//console.log(phrase);
console.log(`${phrase[0][1]}s ${phrase[1][0]} ${phrase[2][3]}`);