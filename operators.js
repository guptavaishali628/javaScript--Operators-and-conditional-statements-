//(1)Arthematic operators:

let a=5;
let b=2;

//addition
console.log("a+b = ", a+b) // output-->7

//substration
console.log("a+b = ", a-b) // output-->7

//multiplication
console.log("a+b = ", a*b) // output-->7

//devision
console.log("a+b = ", a/b) // output-->7

//note-->there are some special arthematic operators in js are :

//1--> modulus : % (remender value)
console.log("a%b =",a%b) // output-->1

//2-->Exponential : power(**)
console.log("a**b =",a**b) // a to the power b output: 25

//3-->increament & decreament --> unary operator which operate on the single value

// increament --> a++ = a+1;
let x=2;
console.log('increament of a', x++);// it returns current value of x, then increase x by 1, so output--> 2, after execution, x=3

let y=3
// creament --> a-- = a-1; 
console.log('decreament of a', y--);// it returns current value of x, then decrease y by 1, so output--> 3, after execution, x=2


//(2)-->Assignment operators:

// (=)
let n=5;
let m=4;
console.log(n,m)

// (+=) : n+= -->n=n+m;
n+=m;
console.log(n) //output-->9

// (-=) : n-=m --> n=n-m;
n=5;
m=4;
n-=m;
console.log(n)  // output-->1

// (*=) : n*=m -->n=n*m
n=5;
m=4;
n*=m;
console.log(n) //o/p-->20

// (/=) : n/=m -->n=n/m
n=5;
m=4;
n/=m;
console.log(n) //o/p-->1.25

// (**=) : n**=m -->n=n**m (m to the power n)
n=5;
m=4;
n**=m;
console.log(n) //o/p 625

//(3)--> Comparision Operators:

//equal to (==)
a=5;
b='5';
console.log("a==b", a==b); // return 'true' boolean value:

//equal to and type (===)
a=5;
b='5';
console.log("a===b", a===b); // return 'false' boolean value ye type bhi check krta hai

//not equal to (!=)
a=5;
b=4;
console.log("a!=b", a!=b); // return 'false' boolean value.

//not equal to and type (!==)
a=5;
b='5';
console.log("a!==b", a!==b); // return 'false' boolean value ye type bhi check krta hai

// <, <=, >, >=
console.log(a>b) // o/p ->true
console.log(a>=b)// o/p ->true
console.log(a<b) // o/p ->false
console.log(a<=b) // o/p ->flase

//(4)-->Logical opertaors:

//AND(&&)

a=6;
b=5;
let cond1 = a>b; //true;
let cond2 = a!=b // true;
console.log("cond1 && cond2 =", cond1 && cond2);//o/p->true

//OR(||)-->jab hmari ek bhi condition true ho jaye to ans true hi ata hai

a=6;
b=4;
cond1 = a>b; //true;
cond2 = a!=b // true;
console.log("cond1 || cond2 =", cond1 || cond2); //o/p->true

//NOT(!)--> true=false; false=true
a=6;
b=5;console.log("!(a<b) =", !(a<b)); //true










