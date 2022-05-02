function vaciarIzena () {
  document.getElementById("Izena").value = ""; // izena ezabatzen du
}
function vaciarAbizena () {
  document.getElementById("Abizena").value = ""; // abizena ezabatzen du
}
function vaciarUrteak () {
  document.getElementById("Urteak").value = ""; // urteak ezabatzen ditu
}
function vaciarAltuera () {
  document.getElementById("Altuera").value = ""; // altuera ezabatzen du
}
function erantzuna () {
  var Izena = document.getElementById("Izena").value; // definitu bariable izena eta hartu izena id balorea
  var Abizena = document.getElementById("Abizena").value;// definitu bariable abizena eta hartu izena id balorea
  var Urteak = document.getElementById("Urteak").value; // definitu bariable urteak eta hartu izena id balorea
  Urteak = Number(Urteak); // barible urteak zenbakira pasatu
  var Altuera = document.getElementById("Altuera").value; // definitu bariable altuera eta hartu izena id balorea
  Altuera = Number(Altuera); // barible altuera zenbakira pasatu
  
// kanpo guztiak informazioa jaso behar dute
if ( Izena == "" ) {
   alert("kanpo guztiak informazioa jaso behar dute"); // bariable izena jaso behar du
}  else if ( Abizena == "" ) {
   alert("kanpo guztiak informazioa jaso behar dute"); // bariable abizena jaso behar du
} else if ( Urteak == "" ) {
   alert("kanpo guztiak informazioa jaso behar dute"); // bariable urteak jaso behar du
} else if ( Altuera == "" ) {
   alert("kanpo guztiak informazioa jaso behar dute"); // bariable altuera jaso behar du
} else if ( Urteak < 16 || Urteak > 40 || Altuera < 1.5 ) {
		document.getElementById("erantzunFinala").innerHTML = "Kaixo " + Izena + " " + Abizena + " " + "ezin dozu jolastu NBAn"; // 16 urte baino gutxiagoa edo 40 urte gehiago edo altuera 1.50 baino gutxiago bada 
} else {
		document.getElementById("erantzunFinala").innerHTML = "Kaixo " + Izena + " " + Abizena + " " + " oso ondo jolastuko dozu NBAn"; // 16 urte baino gehuago eta 40 urte gutxiago eta altuera 1.50 baino gehiago bada 
}  
}