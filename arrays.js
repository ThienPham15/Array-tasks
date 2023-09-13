// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
const names = ['David', 'Ann', 'Leia', 'Mathew', 'Mark'];
const task1 = document.querySelector('#task1');
task1.textContent = names.join(', ');

// Task 2
// Print the second item of the array from the task 1.
document.querySelector('#task2').textContent = `The second name is: ${names[1]}`;

// Task 3
// Print the length of the array.
document.querySelector('#task3').textContent = `The length of the names array is ${names.length}`;

// Task 4
// Print the last item of the array.
document.querySelector('#task4').textContent = `The last name of array names is ${names[names.length-1]}`;

// Task 5
// Add Peter as the last item to the array and print the whole array
names.push('Peter');
document.querySelector('#task5').textContent = `After adding 'Peter' at the end of array, ${names.join(', ')}`;

// Task 6
// Print the array with spaces, not commas
const task6 = names.join(' ');
document.querySelector('#task6').textContent = task6;

// Task 7
// Replace Mathew in the array with Lisa and Abraham
names.splice(3,1,'Lisa','Abraham');
document.querySelector('#task7').textContent = names.join(', ');

// Task 8
// Sort the array in the alphabetical order and print it
names.sort();
document.querySelector('#task8').textContent = names.join(', ');

// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
let numbers = [1, 7, 45, 32, 27, 86];
let numbers1 = numbers.sort((a,b) => a-b);
document.querySelector('#task9').textContent = numbers1.join(', ');

// Task 10
// Randomize the numbers array.
let numbers2 = numbers.sort((a,b) => 0.5 - Math.random());
document.querySelector('#task10').textContent = numbers2.join(', ');

// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.
let numbers3 = numbers.sort((a,b) => a-b); 

document.querySelector('#task11').textContent = `Smallest number is ${numbers3[0]} and largest number is ${numbers3[numbers.length-1]}`;


