let colors = ["pink", "yellow", "orange", "red"];
let numbers = [10, 20, 30, 40];
let house = {
    color:"blue", 
    solar: true,
    neighborhood () {
        console.log("you bought in the city");
    },
};

house.neighborhood();
console.log(house.color);
console.log(house.solar);
console.log(numbers[0]);
console.log(colors);

function outputArray(myarr){
    return console.log(myarr);
}

outputArray(colors);
outputArray(numbers);

console.log(typeof true);



