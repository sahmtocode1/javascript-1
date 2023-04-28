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

let letters = ["g", "h", "k"];

for (let letter of letters) {
    console.log(letter);
}

