function submitData(){
    document.getElementById("min,max");
    if (min < 1, max > 100){
    updateDOM("ERROR", "red");
} else {
    numberGuessGame(min,max)
}
}

function updateDOM(value,color){
    document.getElementById("output").innerHTML=value;
    element.style.backgroundColor = "#00FF00";
}

function numberGuessGame(min,max){
    let num = randomNumber(min, max)
    let guess = null;
    do {
        guess = parseInt(prompt("I'm thinking of a number between 1-100. Try to guess it."));
        document.getElementById("guessForm");
        if (min < 1) {
            console.log("Your guess is too low"); 
        }
        if (max > 100) {
            console.log("Your guess is too high");
        }
                
    } while (min >= 1 , max <=100)
    updateDOM("Congratulations!", "green");
}


function randomNumber(min,max){
    return Math.random() * (max-min) + min;
}