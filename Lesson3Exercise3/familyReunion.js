function addAttendee(){
    let firstName = reunionForm.fname.value;
    let lastName = reunionForm.lname.value;
    if (firstName =="" || lastName == "") {
        alert("Full Name has to be entered");
        return false;
    } 
    let guestAge = reunionForm.gage.value;
    let name = firstName + " " + lastName + " " + guestAge;
    let ul = document.getElementById("attendees");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
    return false;
}
