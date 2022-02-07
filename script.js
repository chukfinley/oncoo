"use strict";



function summonCustom(){
  var wahl = document.getElementById("option").value;

  if (wahl == "custom"){
    document.getElementById("customs").style.display = "block";
  }
  else{
    document.getElementById("customs").style.display = "none";
  }
}


function farbe(){
  var farbe = document.getElementById("farbe").value;

  switch(farbe){
    case("blau"):
      document.getElementById("farbe").style.background = "#ADD8E6";
      document.getElementById("farbe").style.color = "#333333";
      break;
    case("gelb"):
      document.getElementById("farbe").style.background = "#FFD700";
      document.getElementById("farbe").style.color = "#FFFFFF";
      break;
    case("gruen"):
      document.getElementById("farbe").style.background = "#9ACD32";
      document.getElementById("farbe").style.color = "#FFFFFF";
      break;
    case("weiss"):
      document.getElementById("farbe").style.background = "#FFFFFF";
      document.getElementById("farbe").style.color = "#333333";
      break;
    case("rosa"):
      document.getElementById("farbe").style.background = "#FFAAAA";
      document.getElementById("farbe").style.color = "#FFFFFF";
      break;
    case("rot"):
      document.getElementById("farbe").style.background = "#A52A2A";
      document.getElementById("farbe").style.color = "#FFFFFF";
      break;
    case("gemischt"):
      document.getElementById("farbe").style.background = "linear-gradient(90deg, rgba(173,216,230,1) 14%, rgba(255,215,0,1) 28%, rgba(154,205,50,1) 42%, rgba(255,255,255,1) 56%, rgba(255,170,170,1) 70%, rgba(165,42,42,1) 84%)";
      document.getElementById("farbe").style.color = "#333333";
      break;
  }
}



setInterval(summonCustom, 100);
setInterval(farbe,100);
