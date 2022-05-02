function elkarrizketa() 
{
var izena = prompt('Zein da zure izena'); //izena aldagaian, lehen galderare erantzuna gordetzen da.
let abizena = prompt('Zein da zure abizena?');//abizena aldagaian, bigarren galderaren erantzuna gordetzen da.
//Let eta var -en desberdintasuna, lokaltasunean dirau. Gure ariketak egiteko, beti var erabiltzea balio du.

//JavaScript-ek dituen funtzio batzuk erabiliko ditugu.
const currentDate = new Date();
const urtea = currentDate.getFullYear() - Number(adina);	

document.getElementById("erantzuna").innerHTML = "<h2>Ongi etorri " + izena + " !!! Zure abizena, " + abizena + " da.<h2/>";
}

