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
    console.log(hours);
     let currentTime = hours + ":" + currentDate.getMinutes();
     console.log(currentTime);
     if(am){
        currentTime += " AM";
     }else{
        currentTime += " PM";
     }
     console.log(currentTime);
     document.getElementById("time").innerHTML = currentTime;
}