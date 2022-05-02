function elkarrizketa() 
{
var izena = prompt('Zein da zure izena'); //izena aldagaian, lehen galderaren erantzuna gordetzen da.
var abizena = prompt('Zein da zure abizena'); //abizena aldagaian, bigarren galderaren erantzuna gordetzen da.
var dirua = prompt('Zein da zure aurrekontua kotxea erosteko?');//adina aldagaian, hirugarren galderaren erantzuna gordetzen da.
//Let eta var -en desberdintasuna, lokaltasunean dirau. Gure ariketak egiteko, beti var erabiltzea balio du.
//JavaScript-ek dituen funtzio batzuk erabiliko ditugu.
if (dirua > 56000){

document.getElementById("erantzuna").innerHTML = "<h2>Ongi etorri " + izena + " "+ abizena + " !!! Zure aurrekontua, " + dirua + " da.<h2/><h3> Ahal duzu BMW M2-a erosi  <h3> " ;
}

else{
document.getElementById("erantzuna").innerHTML = "<h2>Ongi etorri " + izena + " "+ abizena + " !!! Zure aurrekontua, " + dirua + " da.<h2/><h3> Ezin duzu BMW M2 erosi</h3>";
}
	
}