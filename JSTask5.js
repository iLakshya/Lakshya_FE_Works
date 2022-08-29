// Task 1
// Remove duplicates of the array and return an array of only unique elements.

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
let dup = [...new Set(array)];
console.log(dup);


// Task 2
/* Find the intersection of two arrays. (An intersection would be the common elements that exist within both arrays).
The elements should be unique! */

const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];
let intersection = firstArray.filter(value=>secondArray.includes(value));
console.log(intersection);


// Task 3
// Remove empty values from the array.
const array1 = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,];
let filtered = array1.filter((el)=>{
    return el !== null && typeof el !== 'undefined' && el !== '';
});
console.log(filtered);


// Task 4
//Write a JavaScript program to display whether the player is retired (i.e. display player name, nationality, and playing status) of the following players.
const cricket = [
    {
        name: 'Sachin Tendulkar',
        nationality: 'India',
        retired: true
    },
    {
        name: 'Shane Warne',
        nationality: 'Australia',
        retired: true
    },
    {
        name: 'Virat Kohli',
        nationality: 'India',
        retired: false
    }
];

// let cricket1 = [];
// cricket1 = cricket.filter(c=>c.retired===true);
// console.log(cricket1);

console.log(cricket.filter(c=>c.retired===true));