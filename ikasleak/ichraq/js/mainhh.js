document.querySelector(".menu-btn").addEventListener("click", () => {
	/*Menua itxiarazi edozein lekutan joz*/
  document.querySelector(".nav-menu").classList.toggle("show");/*Itzuli egiten da, baldin eta ezaugarri jakin bat atributu elkartuan badago.*/
  });

ScrollReveal().reveal('.showcase');/*Showcase elementua leiho grafikotik sartu edo irten ahala erraz animatzeko*/
ScrollReveal().reveal('.news-cards', { delay: 500 });/*news-cards elementua leiho grafikotik sartu edo irten ahala erraz animatzeko*/
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });/*cards-banner-one elementua leiho grafikotik sartu edo irten ahala erraz animatzeko*/
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });/*cards-banner-two elementua leiho grafikotik sartu edo irten ahala erraz animatzeko*/
ScrollReveal().reveal('.cards-banner-three', { delay: 500 });/*cards-banner-three elementua leiho grafikotik sartu edo irten ahala erraz animatzeko*/
ScrollReveal().reveal('.cards-banner-four', { delay: 500 });/*cards-banner-four elementua leiho grafikotik sartu edo irten ahala erraz animatzeko*/
/*delay-->Efektuen ilarako funtzioak egikaritzearen artean itxarote-tarte bat sortzeko balio du.*/
/*orriaren antolakuntza*/