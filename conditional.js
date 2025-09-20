//conditional-statements ==> they are the statements which excute the condition to check it is true and false:


//(a)--> if statement(condition):

//Que1-->
let age=18;
if(age>=18){
    console.log("you can vote");
}

if(age<18){
    console.log("sorry! you cannot vote");
}

//Que1-->
let mode = "dark";  // variable mode conatin value dark
let color; // color is variable which assign color acc to condition;

if(mode==="dark"){
    color="black";  // cond 1
}
if(mode === 'light'){ 
    color="white"    // cond 2
}

console.log(color); // o/p--> black

//(b)--> if-else statement:

//Que1-->
mode = "blue";  // variable mode conatin value blue
color; // color is variable which assign color acc to condition;

if(mode==="dark"){
    color="black"; 
}
else{ 
    color="white"    
}

console.log(color); // o/p--> white

//Que2--> check number is even or odd;
let num=10;
if(num%2==0){
    console.log(num + " " + " is" + " " + "even");
}
else{
    console.log(num + " " + "odd");
}

//(c)--> else-if(condition);

//Que3-->
mode = "pink";  // variable mode conatin value dark
color; // color is variable which assign color acc to condition;

if(mode==="dark"){
    color="black";  // cond 1
}
else if(mode === 'blue'){ 
    color="blue";    // cond 2
}
else if(mode === 'pink'){ 
    color="pink";   // cond 2
}
else{
    color="white";
}
console.log(color); // o/p--> pink

//note--> Ternary Operators: they are the special type of operator work with 3 operands:
// syntax: cond ? true o/p : false o/p;

age>=18 ? console.log("adult") : console.log("not adult")