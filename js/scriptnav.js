let modal = document.getElementById("modalConcerts");

function openModal() {
modal.style.display = "block";
}

function closeModal() {
modal.style.display = "none";
}

function openNav(){
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("hero-image").style.marginLeft = "250px";
  document.getElementById("footer").style.marginLeft = "250px";
  document.getElementById("name").style.marginLeft = "250px";
  document.getElementById("Portfolio").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav(){
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("hero-image").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
  document.getElementById("name").style.marginLeft = "0";
  document.getElementById("Portfolio").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

document.onclick = function(e) {
   if(e.target.id != "open"){
    closeNav();
  }else{
    openNav();
  }
}

let date = new Date();
let year = date.getFullYear();
document.getElementById("date").innerHTML = "Copyright © " + year + " Poizot Danny Tous Droits Réservés.";

let birthday = new Date("1991,11,19");
let currentYear = new Date();
let age = currentYear.getFullYear() - birthday.getFullYear();
let month = currentYear.getMonth() - birthday.getMonth();
let day = currentYear.getDate() - birthday.getDate();

  if (month < 0) {
    age--
  } else if (month === 0 && day < 0){
    age--
  }
  document.getElementById("birthdate").innerHTML = "Agé de "+ age + " ans, " + "passionné de musique et également musicien dans un groupe, " + "de culture " + "et de partage de connaissance, " + "le domaine du numérique m'apporte de nouveaux horizons " + "tout en gardant ces notions de culture.";

function myFunction() {
  alert("Merci !");
}
