const hamburguer=document.querySelector('.hamburguer');
const menu=document.querySelector('.menua-nabigatzeko');

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})
/*honekin menua eta gure logo lotzen dugu*/