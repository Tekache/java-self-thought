console.log('hello');
//alert('xup')

// var b = 'smothei';
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// var age = prompt('what is your age?');

// document.getElementById('sometext').innerHTML = age;

// var num1 = 10;

// num1++;

// num1--;

// console.log(num1 % 6);

// num1 += 10;
// console.log(num1);

// function fun(params) {
//     console.log('this is badoor');
// }

// fun();



// function greeting(yourName) {
//     var result ='hello' + ' ' + yourName;
//     console.log(result);
// }

// var name = prompt('what is your name');
// greeting(name);

function someNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

someNumbers(10, 10);


// var num = 0;
// while (
//     num < 0.5) {
//     num += 1;
//     console.log(num)
// }

for (let num = 0; num <= 100; num++) {
    console.log(num);
}

let yourAge = 18;
let yourName = 'bob';
let name ={first: 'jane', last:'Doe'};
let truth = false;
let groceries = ['apple', 'banana', 'orange'];
let random;
let nothing = null;

let fruit = 'banana';
let morefruit = 'banana\napple';
console.log(morefruit);


console.log(fruit.length);
console.log(fruit.indexOf('q'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('anan', '419'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(5));
console.log(fruit [0]);
console.log(fruit.split(','));
console.log(fruit.split(''));


let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array ('banana', 'apple', 'orange', 'pineapples');

console.log;(fruit[2]);
fruits[0] = 'wwere';
console.log(fruits);


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('to string', fruits.toString());

console.log(fruits.join(' # '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberry'), fruits);
console.log(fruits[4]);
fruits[fruits.length] = 'new fruits';
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi')
console .log(fruits);
let vegetables = ['aspeagus', 'tomato', 'broccoli'];
let allGrosreies = fruits.concat(vegetables);
console.log(allGrosreies);
console.log(allGrosreies.slice(1, 4));
console.log(allGrosreies.reverse());
console.log(allGrosreies.sort());

let someNumber = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumber.sort(function(a, b) {return a-b}));
console.log(someNumber.sort(function(a, b) {return b-a}));

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);

let student = {first:'nasir', last: 'tekache', age:25, hight:170, 
studentInfo: function () {
    return this.first + '\n' + this.last + '\n' + this.age + '\n' + this.hight;
}};
// console.log(student.first);
// console.log(student.last);
// student.last = 'alabi';
// console.log(student.last);
student.age++;
console.log(student.studentInfo());

var age = 45;

if ( (age >= 18) && (age <= 35) ) {
    status = "target demo";
    console.log(status);
} else{
    status = 'not my audence';
    console.log(status);
}
switch (2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
            Text = 'weekday';
}
console.log(text);