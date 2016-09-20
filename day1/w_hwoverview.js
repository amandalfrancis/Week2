//Problem 1

var numArray = [18,24,57,98,45,27,3,456,3,35,85];

var index = numArray.indexOf(27); //best practice
console.log(index);

var index2;
for(var i =0; i < numArray.length; i++){
    if(numArray[i] == 27) index2 = i;
}
console.log(index2);

//Problem 2

console.log(numArray.reduce((a,b) =>  a+b));//best practive

var sum = 0;
for(var i = 0; i < numArray.length; i++){//for this class skill level
    sum += numArray[i];
}

//Problem 3

var ary = [1,2,3,4,5,6,7,8,9,10];
ary.pop();
console.log(ary);
var ary2 = [];
for(var i = 1; i <= 10; i++){
    ary2[i-1]= i;
}
ary2.splice(9,1);
console.log(ary2);

//Problem 4

var testNoNoreThan25 = function(a,b){
    return (a+b <= 25);
}
if (sum <= 25){
    return true;
} else{
    return false;
}
}

//Problem 5

function combineStrings(a,b){
    var s = a + b;
    if (s.length > 12){
        return "Error, string too long";
    }
    return s;
}

//Problem 6

var num = 0;
do{
    if(num <= 5){
        console.log("Very low number");
    } else if(num <=10){
        console.log("High Number");
    } else{
        console.log("Very High Number")
    }
    num++;
}while(num<=20);
