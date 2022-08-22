// Task 1

/* Consider the below array:
const array = [1, 2, 3, 1, 4, 10, 15, 16, 5, 12, 18, 19, 2, 20]
a. Create a new array returning with multiples of 2, sorted in descending order and for every alternate multiple replace with an alphabet limited to 3 starting from “abc”, “def” [eg: [2,”ABC”,10, “DEF”.....]
b. What are all the possible ways to empty the above array?
c. The above array includes many repeating values, remove them using any ES6 method
d. Iterate the above array without mutating to check if the value 3 exists */

// a. Multiply each element by 2
const array = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
for(var i=0;i < array.length; i++)
{
    array[i]*=2;
}
console.log(array);

// Arrange Descending Order
array.sort(function(a,b){return b-a});
console.log(array);

// b. Possible ways to empty the array
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

// c. Above arrays include many repeating vales and remove them using any ES6 method
array1 = [1,2,3,1,4,10,15,16,5,12,18,19,2,20];
let a = [...new Set(array1)];
console.log(a);

// d. Iterate the above array without mutating to check if the value 3 exists
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