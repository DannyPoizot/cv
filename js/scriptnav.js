function openNav(){
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("hero-image").style.marginLeft = "250px";
  document.getElementById("footer").style.marginLeft = "250px";
  document.getElementById("name").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav(){
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("hero-image").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
  document.getElementById("name").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
let date = new Date();
let year = date.getFullYear();
document.getElementById("date").innerHTML = year;

let birthday = new Date("1991,11,19");
let currentYear = new Date();
let age = currentYear.getFullYear() - birthday.getFullYear();
let month = currentYear.getMonth() - birthday.getMonth();
let day = currentYear.getDate() - birthday.getDate();

function calculAge(){
  if (month < 0) {
    age--
  } else if (month === 0 && day < 0){
    age--
  }
  document.getElementById("birthdate").innerHTML = "Je suis agé de "+ age + " " + "ans";
}
function myFunction() {
  alert("Merci !");
}
