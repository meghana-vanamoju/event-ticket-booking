function bookTicket(){
alert("🎟 Ticket booking started!");
}

function toggleDetails(id){

let details=document.getElementById(id);

if(details.style.display==="block"){
details.style.display="none";
}
else{
details.style.display="block";
}

}

function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name==="" || email===""){
alert("Please fill all required fields");
return false;
}

alert("Booking Successful!");
return true;

}