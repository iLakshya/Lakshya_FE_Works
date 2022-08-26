const teams = [
    {
        name: "Chelsea",
        id: 1,
        groupId: [1, 2],
        points: 10,
    },
    {
        name: "Liverpool",
        id: 2,
        groupId: [2, 3],
        points: 20,
    },
    {
        name: "Manchester United",
        id: 3,
        groupId: [3, 4],
        points: 50,
    },
    {
        name: "Arsenal",
        id: 4,
        groupId: [1, 4],
        points: 20,
    },
];

//Task 1
// Remove the first element of the teams array using spread operator.

let remone = ([a, ...teams])=>teams;
console.log(remone(teams));


// Task 2
// Remove the last element of the Teams array (hint use array slice).

let remlast = teams.slice(0,-1);
console.log(remlast);


// Task 3
// Find total points of all the teams.

let sum = teams.reduce((b,p)=>{
    return b + p.points;
},0);
console.log(sum);


// Task 4
// Create an object with group ids as keys and an array of team names in it as values.

var gidname = teams.map(({groupId, name})=>({groupId, name}));
console.log(gidname);
// let gidname1 = Object.entries(gidname).map(([key, value])=>({key, value}));
// console.log(gidname1);