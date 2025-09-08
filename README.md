## 1. What is the difference between var, let, and const?

- **_var:_**
  'var' is function scoped. If we declare a variable using var inside a function, we cannot access the variable from the outside of the function.
  After declaring a variable using var reassignment or updating the value is allowed.
  If we want to access the variable before initialization which is declared using var, we will get it undefined. It means var is hoisted at the top but initialized with undefined.
- **_let:_**
  ES6 introduced us with let variable. 'let' is block scoped. It means we can only access let in the block where it is declared. Outside the block we cannot access the let variable. No matter which block it is. If we see a let variable inside any curly braces we cannot access it outside that curly braces, means we cannot access them outside that block. If we declare a variable globally we can access them from anywhere. Like we can access the global variable inside a function scope or block scope. But the let variable inside a block scope we cannot access them from outside of that block.
  After declaring a variable using let reassignment or updating the value is allowed.
  let variable is hoisted at top but kept in a 'temporal dead zone'. It means if we want to access the let variable before initialization it will give us a reference error that it cannot access the variable before initialization because it kept in the temporal dead zone.
- **_const:_**
  ES6 also introduces us with 'const' variable. We can say 'let' and 'const' are almost same but only a difference we can see is we cannot reassign value into a const variable. It will give us a 'type error'.
  Except this one difference everything is same like let. Like const is block scope, cannot access the variable outside the block where it is declared. Hoisted at the top but kept in 'temporal dead zone'.

## 2. What is the difference between map(), forEach(), and filter()?

All these three are the array methods introduced in ES6 feature. Let's how they are different from each other.

- **_map():_** Let's say we have an array numbers `const arr = [1,2,3,4,5];` Now we want a new array `const newArr = [1,4,6,8,10];` which has the doubled value of each element of this array. Using 'map()' method on the 'arr' array we can get this easily. `const newArr = arr.map(element => element * 2);` It means map() method loop through every element of 'arr' array and perform the double operation and keeps it into a new array and finally it return a new array after performing the double operation.
  In short we can say that 'map()' method perform an operation on each element of an array and return a new array with the new value.
- **_forEach():_** 'forEach()' method does not return anything like 'map()' method does. Sometimes we are in a situation we to only see the each element of an array in our website. Here we use 'forEach()' method.

```
const friends = ['nafis','faiyaz','fahad'];
friends.forEach(friend => console.log(friend));
```

This will only print the every element of of friends array and does not return anything.
So, in short 'forEach()' method is used to perform any operation on each element of an array based on our use-case and does not return anything.

- **_filter():_** 'filter()' method is used to filter an array under a condition. Let's say we have an array of numbers. Now we want an array which does not have the number '3'. Here we use 'filter()' method and we filter this array under a condition that 'number !== 3'. Like this

```
const numbers = [1,2,3,3,3,3,3,4,5,6,7,8,9,10];
const newNumbers = numbers.filter(number => number !== 3);
console.log(newNumbers); //returns this array [1,2,4,5,6,7,8,9,10]
```

So, 'filter()' method loop through each element of an array and checking a condition to filter the element. If the element matches the condition 'filter()' method keeps that element into a new array and after looping each element 'filter()' method return a new array

## 3. What are arrow functions in ES6?

This is the shorter version of traditional function introduced in ES6. Arrow functions does not need the 'function' keyword like we used to declare a function in a traditional way. If the function operation in one line then we do not need write return keyword like the traditional one. Let's have a look two of them.

```
//traditional function
function traditionalSum(a,b){
    const add = a + b;
    return add;
}
const result1 = traditionalSum(10,20);
console.log(result1);

//arrow function
const arrowSum = (a,b) => a + b ;
const result2 = arrowSum(30,40);
console.log(result2);

```

Arrow functions are easy to write. Specially when we use array higher order methods like map(), filter(), forEach(), reduce() we use arrow functions as their parameter. Previous we have seen them in the map(), filter(), and forEach() method example. In those example we used arrow functions as their parameter.

## 4. How does destructuring assignment work in ES6?

Sometimes we need the array elements and object key as a variable so that we can use them as our need. Destructuring makes it easier. Destructuring help us to make array element and object key into a variable. In ES6 we introduced with two types of destructuring. Let's see them with example how they make array element and object keys into a variable;

**1.Array Destructuring :**

```
const numbers = [100,200,300];
const [first,second,third] = numbers ;

console.log(
`First Element: ${first}
Second Element: ${second}
Third Element: ${third}`
);
```

```
//This is the output after array destructuring.
First Element: 100
Second Element: 200
Third Element: 300
```

**2.Object Destructuring :**

```
const obj = {
  firstName: "nafis",
  lastName: "faiyaz",
  age: 26,
  salary: 10000,
};
const {firstName,lastName,age,salary} = obj;

console.log(
`First Name: ${firstName}
Last Name: ${lastName}
Age:${age}
Salary:${salary}`);
```

```
//this is the output after object destructuring, makes each object key into a variable that has the value of the key

First Name: nafis
Last Name: faiyaz
Age:26
Salary:10000
```

## 5. Explain template literals in ES6. How are they different from string concatenation?

Let's see string concatenation first.

```
const firstName = 'Nafis';
const lastName = 'Faiyaz';
const age = 26;
//we start the string concatenation with 'singleQuote' or "doubleQuote"
console.log('My fisrt name is ' + firstName + ' and my last name is ' + lastName + '.' +  '\nMy age is ' + age + '.')
```

```
//output of the string concatenation
My fisrt name is Nafis and my last name is Faiyaz.
My age is 26.
```

We have to write a very complex things for this string concatenation. To access the variable we have to write '+' (we can use other things also like ',' or '-' or '\*' etc.) operator and for maintaining the space we have to insert a space after each variable accessed and also we have to use this '\n' before a string to start a new line. Template literal makes it easier for us. Let's see an example for template literal introduced in ES6.

```
const firstName = 'Nafis';
const lastName = 'Faiyaz';
const age = 26;
//we start the template literal using `backtics`
console.log(`My fist name is ${firstName} and my last name is last name ${lastName}.
My age is ${age}.`)
```

```
//output of the string concatenation using template literal
My fist name is Nafis and my last name is last name Faiyaz.
My age is 26.
```

Template literal makes the string concatenation easier to read, easier to understand and no complex writing to start a new line. Just press the enter to start a new line.
