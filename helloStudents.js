'use strict'

// 1. Read the JSON file into a variable called students

const students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

students.forEach(student => {
    console.log(`Hello ${student.firstName}`);
});

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

let count = 0;
students.forEach(student => {
    if(student.lastName[0] === 'D'){
        count = count + 1;
    }
})
console.log('Count of last names starting with D is ' + count);

