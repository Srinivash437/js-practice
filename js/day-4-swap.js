//get inputs from user
var a=prompt("enter first number");
var b=prompt("enter second number");
//store value as temporary
var temp;
//swap the variables
temp = a;
a = b;
b = temp;
//display the swaped values
console.log("the value after swapping a:"+a);
console.log("the value after swapping b:"+b);

//get inputs from user
var x=prompt("enter first number");
var y=prompt("enter second number");
//using destructuring assignment
[x,y]=[y,x];
//display the swaped values
console.log(`The value of x after swapping: ${x}`);
console.log(`The value of y after swapping: ${y}`);

//get inputs from user store values in let function
let c=parseInt(prompt("enter first number")); 
let d=parseInt(prompt("enter second number"));
//using addition subtraction operators
c=c+d;
d=c-d;
c=c-d;
//display the swaped values
console.log("the value of c after swapping:"+c);
console.log("the value of d after swapping:"+d);

//get inputs from user store values in let function
let e=parseInt(prompt("enter first number")); 
let f=parseInt(prompt("enter second number"));
//using Xor operators
e=e^f;
f=e^f;
e=e^f;
//display the swaped values
console.log("the value of e after swapping:"+e);
console.log("the value of f after swapping:"+f);