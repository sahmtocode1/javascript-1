let a = 1;
while(a<=100){
    console.log("The number is " + a);
    a++;
}

let b = 1;
do{
    console.log("The number is " + b);
    b++;
}while(b <= 100);

for(var c = 1; c <= 100; c++){
    console.log("The number is " + c)
}

for (let d = 2; d <= 100; d+=2) {
    console.log("even numbers: " + d)
}

let names = ["Cheyenne", "Alaina", "Summer", "Maddie", "Olivia", "Amanda", "Sadie", "Ru", "Shells", "Lish"];

for (let name of names) {
    console.log(name);
}

