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
