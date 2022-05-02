

let loadMoreBtn = document.querySelector('.packages .load-more .btn'); /*jarri botoia aldagai gisa*/
let currentItem = 3; /*hasieran erakutsiko diren esperientziak*/

function gehiago(){
   let boxes = [...document.querySelectorAll('.packages .box-container .box')]; /*dokumentu horretan dauden esperientziak*/
  /*Kode-bloke bat hainbat aldiz zeharkatzen du*/ for (var i = currentItem /* gauzatu aurretik exekutatzen da (behin).*/; i < currentItem + 3 /*exekutatzeko baldintza definitzen du*/; i++ /*exekutatu ondoren exekutatzen da (aldi guztietan)*/){ 
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3; /*esperientziak +3*/
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

function myFunction(){ /*aldagai guztiekin errepikatu prozesua*/
	let izena = document.getElementById("izena").value; /*aldagaiaren balioa hartu dokumentutik*/
	let izenaondo = (izena !== "" )? "":"izena jarri mesedez"; /* konprobatu eta balioa jarri (ondo : txarto)*/
	document.getElementById("izenaerr").innerHTML = izenaondo;	 /* p-n idatzi*/
	let emaila = document.getElementById("emaila").value;
	let emailaondo = (emaila !== "" )? "":"emaila jarri mesedez";
	document.getElementById("emailaerr").innerHTML = emailaondo;
	let telefonoa = document.getElementById("telefonoa").value;
	let telefonoaondo = (telefonoa !== "" )? "":"telefonoa jarri mesedez";
	document.getElementById("telefonoaerr").innerHTML = telefonoaondo;
	let helbidea = document.getElementById("helbidea").value;
	let helbideaondo = (helbidea !== "" )? "":"helbidea jarri mesedez";
	document.getElementById("helbideaerr").innerHTML = helbideaondo;
	let lekua = document.getElementById("lekua").value;
	let lekuaondo = (lekua !== "" )? "":"lekua jarri mesedez";
	document.getElementById("lekuaerr").innerHTML = lekuaondo;
	let pertsonak = document.getElementById("pertsonak").value;
	let pertsonakondo = (pertsonak !== "" )? "":"pertsonak jarri mesedez";
	document.getElementById("pertsonakerr").innerHTML = pertsonakondo;	
	let hasiera = document.getElementById("hasiera").value;
	let hasieraondo = (hasiera !== "" )? "":"hasiera jarri mesedez";
	document.getElementById("hasieraerr").innerHTML = hasieraondo;
	let amaiera = document.getElementById("amaiera").value;
	let amaieraondo = (amaiera !== "" )? "":"amaiera jarri mesedez";
	document.getElementById("amaieraerr").innerHTML = amaieraondo;	
	
	if(izena === ""){ /*amaierako abisua, aurreko aldagaiak konprobatu eta horren arabera mesu bat idatzi edo bestea*/
		document.getElementById("konfirmazioa").innerHTML = "Zerbait ez da ondo joan, begiratu datuak eta saiatu berriro."
	} else if(emaila === ""){
		document.getElementById("konfirmazioa").innerHTML = "Zerbait ez da ondo joan, begiratu datuak eta saiatu berriro."
	} else if(telefonoa === ""){
		document.getElementById("konfirmazioa").innerHTML = "Zerbait ez da ondo joan, begiratu datuak eta saiatu berriro."
	} else if(helbidea === ""){
		document.getElementById("konfirmazioa").innerHTML = "Zerbait ez da ondo joan, begiratu datuak eta saiatu berriro."
	} else if(lekua === ""){
		document.getElementById("konfirmazioa").innerHTML = "Zerbait ez da ondo joan, begiratu datuak eta saiatu berriro."
	} else if(pertsonak === ""){
		document.getElementById("konfirmazioa").innerHTML = "Zerbait ez da ondo joan, begiratu datuak eta saiatu berriro."
	} else if(hasiera === ""){
		document.getElementById("konfirmazioa").innerHTML = "Zerbait ez da ondo joan, begiratu datuak eta saiatu berriro."
	} else if(amaiera === ""){
		document.getElementById("konfirmazioa").innerHTML = "Zerbait ez da ondo joan, begiratu datuak eta saiatu berriro."
	} else{
		document.getElementById("konfirmazioa").innerHTML = "Eskerrik asko zure erreserbagaitik";
	}
		
}
		
