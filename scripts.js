let name = "Katrina";
let age = 36;
let colors = ["green", "blue", "red"];
let numbers = [0, 1, 2, 3];
let bicycle = {
    color:"green", 
    electric: true,
    ride () {
        console.log("you began to pedal");
    },
};
bicycle.ride();
console.log(bicycle.color);
console.log(numbers[1]);

function outputArray(myarr){
    return console.log(myarr);
}

outputArray(colors);
outputArray(numbers);

console.log(typeof true);

let i = 1;
while(i<=5){
    console.log("The number is " + i);
    i++;
}


//let a = 6;
//while(i > 5){
    //console.log("The number is " + i);
    //i++;
//} do not do this. can crash server. Infinite.

let b = 1;
do{
    console.log("The number is " + b);
    b++;
}while(b ==5);

for(var c = 1; c <= 5; c++){
    console.log("The number is " + c)
}

var person = {"name" : "Katrina", "age" : "100"};

for(var prop in person){
    console.log(prop + "="  +person [prop]);
}

