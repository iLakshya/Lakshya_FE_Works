// Task 1
/* Consider the below array:
const array = [1, 2, 3, 1, 4, 10, 15, 16, 5, 12, 18, 19, 2, 20]
a. Create a new array returning with multiples of 2, sorted in descending order and for every alternate multiple replace with an alphabet limited to 3 starting from “abc”, “def” [eg: [2,”ABC”,10, “DEF”.....]
b. What are all the possible ways to empty the above array?
c. The above array includes many repeating values, remove them using any ES6 method.
d. Iterate the above array without mutating to check if the value 3 exists. */

// a. Multiply each element by 2.
const array = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
for(var i=0;i < array.length; i++)
{
    array[i]*=2;
}
console.log(array);

// Arrange Descending Order
array.sort(function(a,b){return b-a});
console.log(array);

// b. Possible ways to empty the array.
// Creating a new array and storing all the elements in that array, making first array null & printing it.
var array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
var array2 = [];
array2 = array1;
array1=[];
console.log(array1);
// Setting length of array to zero
array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
array1.length = 0;
console.log(array1.length);
// Using splice() function
array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
array1.splice(0,array1.length);
console.log(array1);
// Using pop() function
array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
while(array1.length > 0)
{
    array1.pop();
}
console.log(array1);

// c. Above arrays include many repeating vales and remove them using any ES6 method.
array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
let a = [...new Set(array1)];
console.log(a);

// d. Iterate the above array without mutating to check if the value 3 exists.
array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
array2 = array1;
if(array2.indexOf(3)!==-1)
{
    console.log("Value Exists");
}
else
{
    console.log("Value doesn't Exists");
}


// Task 2
/* Analyze the below data representing the college students' information
const students = [
{ name: "A", age: 17, college: "UVCE", stream: 'CSE', currentYear: 1 },
{ name: "B", age: 19, college: "KEAM", stream: 'ECE', currentYear: 2 },
{ name: "C", age: 23, college: "UVCE", stream: 'EEE', currentYear: 4 },
{ name: "D", age: 18, college: "UVCE", stream: 'CSE', currentYear: 3 },
{ name: "E", age: 22, college: "KEAM", stream: 'AEI', currentYear: 4 },
{ name: "F", age: 21, college: "NETE", stream: 'EEE', currentYear: 3 }
]
a. There is election voting for the post of Chairperson, for which only final year students are eligible. Create a list satisfying the above condition.
b. Student B seems to have the wrong college name in the above data. Return an above array with the college name replaced as “NETE”
c. Find the total number of students that would be eligible for placements this year.
d. Create an array with students with stream ‘EEE' and in the order of their currentYear
e. Create a new array for the students above the age of 21, add a new property ‘cgpa’ */

const students = [
    {
    name: "A",
    age: 17,
    college: "UVCE",
    stream: 'CSE',
    currentYear: 1
    },
    {
    name: "B",
    age: 19,
    college: "KEAM",
    stream:'ECE',
    currentYear: 2
    },
    {
    name: "C",
    age: 23,
    college: "UVCE",
    stream: 'EEE',
    currentYear: 4
    },
    {
    name: "D",
    age: 18,
    college: "UVCE",
    stream: 'CSE',
    currentYear: 3
    },
    {
    name: "E",
    age: 22,
    college: "KEAM",
    stream: 'AEI',
    currentYear: 4
    },
    {
    name: "F",
    age: 21,
    college: "NETE",
    stream: 'EEE',
    currentYear: 3
    }
];

// a. Only final students are eligible. Create a list satisfying the above conditions.
console.log(students.filter(fy => fy.currentYear === 4));

// b. B has wrong college. Replace the name of the college to NETE
var val = [];
val = students.filter((na) => na.name === 'B');
console.log(val);
console.log(val.length);

let change = students.filter((clg) => clg.name === 'B')[0].college;
console.log(change);
let ch = change.replace(/KEAM/g, 'NETE');     //using RegEx method
console.log(ch);

// c. Total number of students eligible for placements
console.log(students.filter((pla) => pla.currentYear === 4));
let counter = 0;
for(let i=0;i<students.length;i++)
{
    if(students[i].currentYear === 4)
    {
        counter++;
    }
}
console.log(counter);

// d. Array with students with stream 'EEE' & in order of current year
let array3 = [];
for(let i=0;i<students.length;i++)
{
    if(students[i].stream === "EEE")
    {
        array3.push(students[i].name);
    }
}
console.log(array3);

// e. Array with students above age of 21 with a new property 'CGPA'
let array4 = [];
for(let i=0;i<students.length;i++)
{
    if(students[i].age === 21)
    {
        array4.push(students[i].age);
    }
}
console.log(array4);
var a1 = [];
a1 = students.filter(g => g.age === 21);
console.log(a1);
a1['CGPA'] = 10;
console.log(a1);