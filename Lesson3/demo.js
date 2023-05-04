document.getElementById("myHeading").innerHTML = "Hello World";
let headingContent = document.getElementById("myHeading").innerHTML;
console.log(headingContent);

const para = document.createElement("p");
const node = document.createTextNode("This is my text node");
para.appendChild(node);
let myDiv = document.getElementById("myDiv");
myDiv.appendChild(para);

function changeColor() {
    let colors =["green", "yellow", "blue"];
    let random = Math.floor(Math.random() * colors.length);
console.log(
    "The random number is: " +
    random +
    ", the random color is:" +
    colors[random]
);
    document.body.style.backgroundColor = colors[random];
}

function changeText(id){
    id.innerHTML = "This Element Text has changed!";
}

document.getElementById("myTime").addEventListener("click", displayTime);

function displayTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let am = true;
    console.log(hours);
    if(hours > 12){
        am = false;
        hours-=12;
     }
     //console.log(hours);
     let currentTime = hours + ":" + currentDate.getMinutes();
     //connsole.log(currentTime);
     if(am){
        currentTime += " AM";
     }else{
        currentTime += " PM";
     }
     //console.log(currentTime);
     document.getElementById("time").innerHTML = currentTime;
}

document.getElementById("myBtn").addEventListener("click", displayDate);
document.getElementById("myBtn").addEventListener("click", updateColor);

function displayDate(){
    document.getElementById("myDate").innerHTML = Date();
}

function updateColor(){
    document.getElementById("myDate").style.color = "green";
}

let myPara = document.querySelectorAll(".para-1"); 
let myPara2 = document.getElementsByTagName("p");
myPara[2].style.color = "red";
myPara2[0].style.color = "green";

function move(){
    let id = null;
    const elem = document.getElementById("animate");
    let position = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame(){
        if(position ==350){
            clearInterval(id);
        }else{
            position++;
            elem.style.top = position + "px";
            elem.style.left = positon + "px";
          
        }
    }
}