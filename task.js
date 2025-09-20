// Que1-->Get user to input a number using prompt("enter a number:").check if the number is a multiple of 5 or not:

let num=prompt("enter a number");
if(num%5===0){
    console.log(num, "is multiple of 5")
}
else{
    console.log(num, "is not multiple of 5")
}

//Que2-->Write a code which can give grades to students according to their scores:
//80-100, A;
//70-89, B;
//60-69, C;
//50-59, D;
//0-49, F

let marks = prompt("enter marks")
if(marks>=90 && marks<=100){
    console.log("Garde A")
}
else if(marks>=70 && marks<=89){
    console.log("Garde B")
}
else if(marks>=60 && marks<=69){
    console.log("Garde C")
}
else if(marks>=50 && marks<=59){
    console.log("Garde D")
}
else if(marks>=0 && marks<=49){
    console.log("Garde D")
}
