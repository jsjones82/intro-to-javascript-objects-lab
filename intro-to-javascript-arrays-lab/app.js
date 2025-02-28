//Exercise 1: Define an empty array

// const foods = [`foods`];  
// console.log('Exercise 1 result:', foods);


//Exercise 2: Add strings to the array

// const foods = [`pizza`, `cheeseburger`]; 
// console.log('Exercise 2 result:', foods);

//Excercise 3:Adding to the front of an array

// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// console.log('Exercise 3 result:', foods);

//Excercise 4: Access an array element

// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1]; 
// console.log('Exercise 4 result:', favFood);

//Excercise 5: Insert an element between two others

// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu') 
//console.log('Exercise 5 result:', foods);

//Excercise 6: Replace elements

// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu') 
// foods.splice(1, 1, 'sushi', 'cupcake');
// console.log('Exercise 6 result:', foods);

//Exercise 7: Using the slice() method


// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu') 
// foods.splice(1, 1, 'sushi', 'cupcake');
// console.log('Exercise 6 result:', foods);

//Exercise 8: Finding an index


// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu') 
// foods.splice(1, 1, 'sushi', 'cupcake');
// const soyIdx = foods.indexOf('tofu');
// console.log('Exercise 8 result:', soyIdx);

//Exercise 9: Joining elements

// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu') 
// foods.splice(1, 1, 'sushi', 'cupcake');
// const soyIdx = foods.indexOf('tofu');
// const allFoods = foods.join(' -> '); 
// console.log('Exercise 9 result:', allFoods);

//Exercise 10: Check for an element


// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu') 
// foods.splice(1, 1, 'sushi', 'cupcake');
// const soyIdx = foods.indexOf('tofu');
// const allFoods = foods.join(' -> '); 
// const hasSoup = foods.includes('soup');
// console.log('Exercise 10 result:', hasSoup);


//Exercise 11: Odd numbers from an array

// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu') 
// foods.splice(1, 1, 'sushi', 'cupcake');
// const soyIdx = foods.indexOf('tofu');
// const allFoods = foods.join(' -> '); 
// const hasSoup = foods.includes('soup');
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// const odds = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//       odds.push(nums[i]);
//     }
//   }
//   console.log('Exercise 11 result:', odds);


//Exercise 12: FizzBuzz with arrays


// const foods = ['pizza', 'cheeseburger']; 
// foods.unshift('taco'); 
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu') 
// foods.splice(1, 1, 'sushi', 'cupcake');
// const soyIdx = foods.indexOf('tofu');
// const allFoods = foods.join(' -> '); 
// const hasSoup = foods.includes('soup');
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// const odds = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//       odds.push(nums[i]);
//     }
//   }
//   const fizz = [];
//   const buzz = [];
//   const fizzbuzz = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 3 === 0) {
//       fizz.push(nums[i]);
//     }
//     if (nums[i] % 5 === 0) {
//       buzz.push(nums[i]);
//     }
//     if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
//       fizzbuzz.push(nums[i]);
//     }
//   }
//   console.log('Exercise 12 Results:');
//   console.log('  fizz:', fizz);
//   console.log('  buzz:', buzz);
//   console.log('  fizzbuzz:', fizzbuzz);

  //Exercise 13: Retrieve the last array

  const numArrays14 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
  ];
  const num = numArrays14[2][1];
  console.log('Exercise 14 result:', num);

//  Exercise 15: Nested array sum

const numArrays15 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
  ];
  let total = 0;
  numArrays15.forEach(nestedArray => {
    nestedArray.forEach(number => {
      total += number;
    });
  });
  console.log('Exercise 15 result:\n', total);