/* Irudiak click egiterakoan, handi ikusteko   */
let imagenes = document.querySelectorAll('.gallery__img');
/* irudi guztiak hartzen ditu selector hori duena, hau da, gallery__img   */
let modal = document.querySelector('#modal');
/* modal-a gordetzeko    */
let img = document.querySelector('#modal__img');
/* modal_img elementua ere gordetzeko    */
let boton = document.querySelector('#modal__boton');
/* bariable guztiak gorde ditut     */

for (let i = 0; i < imagenes.length; i++ /* errepikaru egingo da irudien kopuru berdinean    */){
	imagenes[i].addEventListener('click', function(e)/* EDOZEIN iruditan klik egin bakoitzean akzio bat egingo du   */{
		modal.classList.toggle("modal--open"); /* klik egiterakoan modalari klsea modal open gehituko dio edo kenduko dio   */
		let src = e.target.src; /* src-ak gorde egingo du zein irudiari egin diot klik eta src atributoa lortuko dut    */
		img.setAttribute("src", src); /* html-an idatzitako img-ri src atributoa pasatzeko    */
	});
}
boton.addEventListener('click',function() /* x botoiari klik egitean modal open gehitu edo kendu egingo zaio    */{
	modal.classList.toggle("modal--open");
});