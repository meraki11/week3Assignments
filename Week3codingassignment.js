/*1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
 (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
 Print the result to the console.*/

var ages = [3,9,23,64,2,8,28,93];
/* Coding step 1a: subtract value of first element from last element*/

let firstAge = ages[0];
let lastAge = ages[ages.length - 1]; {       
    console.log('Coding Step 1a Answer: ' + (lastAge - firstAge));
}
/* Coding step 1b: Add a new age to your array and repeat the step above to ensure it is dynamic 
(works for arrays of different lengths).*/

ages.push(99);
    console.log(ages);
let newFirstAge = ages[0];
let newLastAge = ages[ages.length - 1]; {       
        console.log('Coding Step 1b Answer: ' + (newLastAge - newFirstAge));
    }    

/*remove added age from 1b*/

ages.pop(ages.length - 1);
    console.log(ages);

/* Coding step 1c: Use a loop to iterate through the array and calculate the average age. Print the result to the console.*/

var sumAges = 0;
    for (let i = 0; i < ages.length; i++){
        sumAges += ages[i];
    }
    averageAge = (sumAges / ages.length);{  
        console.log('Coding Step 1c Answer: ' + averageAge);
    }

/*Coding step 2a: Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.*/

var names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var totalLetters = 0;
    for (let i = 0; i < names.length; i++){
        totalLetters += names[i].length;                      
    } 
console.log('Coding Step 2a Answer: ' + (totalLetters / names.length));

/* Coding step 2b: Use a loop to iterate through the array again and concatenate all the names together, 
separated by spaces, and print the result to the console.*/

let namesJoined = ''
for (let i = 0; i < names.length; i++){
    namesJoined += (names[i] + " ");
}
    console.log('Coding Step 2b Answer: ' + namesJoined);

/*note for later: could also use names.join(" "));*/

/* Coding step 3: How do you access the last element of any array? Access using "[arrayName.length-1]".*/
/*Will demonstrate using names array as example*/

console.log('Coding Step 3 Answer: The last name in the array is: ' + names[names.length - 1]);

/* Coding step 4: How do you access the first element of any array? Access using "arrayName[0]" as the first element of an array is at position 0
Will demonstrate using names array as example*/

console.log('Coding Step 4 Answer: The first name in the array is: ' + names[0]);

/*Coding step 5: 5.	Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.*/

var nameLengths = [];
    for (let i = 0; i < names.length; i++){
        nameLengths[i] = names[i].length;
    }
console.log('Coding Step 5 Answer: ' + nameLengths);

/*Coding step 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
Print the result to the console.*/

let sum = 0;
    for (let i = 0; i < nameLengths.length; i++){
        sum += names[i].length;
    }
    console.log('Coding Step 6 Answer: ' + sum);    

/*Coding step 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself 
n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/

function wordRepeater(word, n) {
    let words = "";
    for (let i = 0;i < n;i++){
        words += word;
    }
    console.log('Coding Step 7 Answer: ' + words);
}    

wordRepeater('coding', 6);    
 
/*Coding step 8: Write a function that takes two parameters, firstName and lastName, and returns a full name 
(the full name should be the first and the last name separated by a space).*/

function writeFullName(firstName, lastName) {
    console.log('Coding Step 8 Answer: ' + (firstName + ' ' + lastName));
}
writeFullName('Willy', 'Wonka');

/*Coding step 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/
var numSetOne = [3,5,10,11,16,44,76];

function areNumbersGreaterThan100(array) {
    let sumSetOne = 0;
    for (let i = 0; i < array.length; i++)
    sumSetOne += array[i];      
        if (sumSetOne > 100) {  
            console.log('Coding Step 9 Answer: ' + 'true');
        }   else { console.log('Coding Step 9 Answer: sum not greater than 100')}
}        
        
areNumbersGreaterThan100(numSetOne);

/*Coding step 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

var numSetTwo = [8,28,11,16,94]

function aveOfNumInArray(array){
    var sumSetTwo = 0;
    var averageOfNum = 0;
    for (let i = 0; i < array.length; i++){
        sumSetTwo += array[i];
    }
    averageOfNum = (sumSetTwo / array.length);{  
        console.log('Coding Step 10 Answer: ' + averageOfNum);
    }
}
aveOfNumInArray(numSetTwo);

/*Coding step 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
first array is greater than the average of the elements in the second array.*/

function comparingAverages(array1, array2) {
    var sumArray1 = 0;
    var sumArray2 = 0;
    for (let i = 0; i < array1.length; i++){
        sumArray1 += array1[i];
        averageOfArray1 = (sumArray1 / array1.length)
    }
    for (let j = 0; j < array2.length; j++){
        sumArray2 += array2[j];
        averageOfArray2 = (sumArray2 / array2.length)
    }
    compareAve = (averageOfArray1 > averageOfArray2);{  
        console.log('Coding Step 11 Answer: ' + compareAve);
    }
}
comparingAverages(numSetOne, numSetTwo);

/*Coding step 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

function willBuyDrink(isHotOutside, moneyInPocket) {
    var willBuyDrink = isHotOutside = true && moneyInPocket > 10.50;{
        console.log('Coding Step 12 Answer: ' + willBuyDrink);
    }
}
willBuyDrink(true, 14);

/*Coding step 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/
/*The function I created evalutes the stock of an important item in my pantry and what the menu for the week includes and determines when 
more of the item should be ordered or if an overstock of the item should be used. This may seem like a minor issue but my family has started 
taking the occurence of chicken nuggets for dinner very seriously during the pandemic so I don't want to run out of panko. This function
could also be adapted for tracking of other stock items.*/

function shouldOrderPanko(boxOnShelf, chickenDinners) {

    if (boxOnShelf <= 2 && chickenDinners == true) {
        console.log('Coding Step 13 Answer: Tell alexa to order panko today');
        } else {
            if (boxOnShelf <= 2 && chickenDinners == false) {
            console.log('Coding Step 13 Answer: Tell alexa to order panko for next week');
        } else { 
            if (boxOnShelf >= 3 && chickenDinners == true) {
            console.log('Coding Step 13 Answer: Tell alexa to order panko tomorrow');
        } else { 
            if (boxOnShelf >= 3 && chickenDinners == false) {
                console.log('Coding Step 13 Answer: You should make chicken nuggets for dinner');     
        }        
    }   
    }
    }
}
   
shouldOrderPanko(2,false);