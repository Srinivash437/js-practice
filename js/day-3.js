//get base and height from user
const base=prompt("enter the base value");
const height=prompt("enter the height value");
//calculate the area of the triangle
const area=(base*height)/2;
//display area of the triangle in console.log
console.log("area of the triangle is:"+area);

//get values from user
const s1=prompt("enter the side 1 value");
const s2=prompt("enter the side 2 value");
const s3=prompt("enter the side 3 value");
//calculate the semi-perimeter
const s=(s1+s2+s3)/2;
//calculate the area
const ans=Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
//display are of the triangle in console.log
console.log("area of the triangle is:"+ans);