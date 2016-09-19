function greetings(name) {
    console.log("Weekend is near ")
}

greetings("dear");

function helloWorld(name){
    console.log("Hello World");
}
helloWorld("Amanda");
//create a function that adds 2 numbers together then return the result



//function add(num1, num2){
    //return num1 + num2 ;
//}
//add(78,50);



//write a function that will return true if the number passed in is even,false otherwise
//write a min function that takes to numbers and returns the smaller of the two


function isEven(num){
  return num % 2 == 0;
}
var result = isEven(47);
console.log(result ? "Even" : "Odd");

function smallerNumber(num1, num2){
    if(num1 < num2){
     return num1;
 } else{
    return num2;
   }
}  
var minProblem = smallerNumber(3, 5);
console.log(minProblem);

//write a function that takes in an array of numbers and have it return the average array:{10,20,30,40}

function average(array){
    var totalArray = 0;
    for ( var i = 0; i < array.length; i++){
        totalArray = totalArray + array[i];
 }
   return totalArray / array.length
}
var arrayNumbers = [10,20,30,40];
var bob = average(arrayNumbers);

console.log(bob);

//using a function, reverse the string "kentucky" then write out the solution

var h = "hello";
var reverse = "";
for(var i = h.length -1; i >=0; i--){
    reverse = reverse + h[i];
}

console.log(reverse);