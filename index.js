/* 1
function sum(...numbers) {
    let newNumberSum = 0;
    for (let item of numbers) {
      newNumberSum += item
    }
    return newNumberSum;
}

let sumResult = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(sumResult);
*/

/* 2

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};


function check (user) {
  if (user.isloggedin == true) {
  return `${user.firstname} ${user.lastname}`
} else {
  return false;
}
}

console.log(check(user));
*/

/* 3 -- ? 
function max(list) {
    let max = 0;
    for (let item of list) {
        if (max < item) max = item;
    }
    return max;
}
console.log(max([10, 50, 6, 7, 8, 11, 6, 3, 9,51]));
*/

/* 4 
function isEven(n) {
    return (n % 2 == 0);
}
 
// Driver code
let n = 100;
 
isEven(n) ? console.log("Even") : console.log("Odd");
*/

/* 5
const array = [1,2,3,4,5]; 

const reversedArray = []

for(let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
*/

// Initialize an object


/* 6
function testfunc (number) {
  if (number >= 18) {
  return('სრულწლოვანი');
} else if (number < 18) {
  return('არასრულწლოვანი');
} 
}

let result = testfunc (17);
console.log(result);
*/



