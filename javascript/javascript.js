"use strict" 

let quantCartas;
let srcArray = [];
let contArray= 0;
let contCardId=0;
let cont=0;
let randomNumber=0;
let setShuffle= [];

let caminhoImg = new Array ("./img/bobrossparrot.gif",    // criando um vetor de locais de img
                           "./img/explodyparrot.gif",
                           "./img/fiestaparrot.gif",
                           "./img/metalparrot.gif",
                           "./img/revertitparrot.gif",
                           "./img/tripletsparrot.gif",
                           "./img/unicornparrot.gif");



 while(quantCartas != 4 ||quantCartas != 6 ||quantCartas != 8 ||quantCartas != 10 ||quantCartas != 12 ||quantCartas != 14 ){
   
     quantCartas=prompt("com quantas cartas você quer jogar (4 a 14 apenas)");
     quantCartas=parseInt(quantCartas);

     if (quantCartas === 4 ||quantCartas === 6 ||quantCartas === 8 ||quantCartas === 10 ||quantCartas === 12 ||quantCartas === 14 ){
        break;
     }

 }

for(let cont=0;cont < quantCartas; cont++){
    document.addEventListener('DOMContentLoaded', function setarCard(){ 
       
        let div=document.createElement('div');
        div.className='card';
        div.id =`card${cont}`;
        div.style.background = "#fffff";
        document.body.appendChild(div); 
        setVerse();
        
    },false);

}


caminhoImg.sort(randomizar); 
shuffleCards(); 
setShuffle.sort(randomizar);


function setVerse(){
    while (contCardId < quantCartas){
   
                let card = document.getElementById(`card${contCardId}`);
                let divVerso = document.createElement('div');
                divVerso.className="back-face";
                divVerso.classList.add('face');
                divVerso.setAttribute ("onClick","viraCards(this)"); // tem que setar um onclick aqui 
                card.appendChild(divVerso);
                setaImgVerse(divVerso); // vou  mandar as duas divs frente e verso para adicionar imagens
                setFront(card, contCardId);
                contCardId++;
    }
   
}

function setFront(card, contCardId){
         document.getElementById(`card${contCardId}`);     
        
         let divFrente = document.createElement('div');
        divFrente.className="front-face";
        divFrente.classList.add('face');
        divFrente.id=`frente`;
        divFrente.style.background = "#a7e9af";
        divFrente.style.border = "1px #96caa5 solid";
        card.appendChild(divFrente);
        setaImgFront(divFrente, contCardId);
}


function setaImgVerse(divVerso){
    
     var imgVerso = document.createElement('img');
     imgVerso.src = "./img/back.png";
     imgVerso.style.width = "100px";
     imgVerso.style.height = "100px";
     imgVerso.style.position = "relative";
     imgVerso.style.Top = "14px";
     imgVerso.style.Left = "1px";
     imgVerso.style.objectFit="cover";
     divVerso.appendChild(imgVerso); 
     contArray++;  // ?????? // 

}

function setaImgFront(divFrente , contador){
    
        var imgFrente = document.createElement('img');
        imgFrente.setAttribute ('src',`${setShuffle[contador]}`);
        imgFrente.id ="imgFrente";
        imgFrente.style.width = "100px";
        imgFrente.style.height = "100px";
        imgFrente.style.position = "relative";
        imgFrente.style.Top = "14px";
        imgFrente.style.right = "10px";
        imgFrente.style.objectFit="cover";
        divFrente.appendChild(imgFrente); 
        contArray++;
}




function randomizar() { 
	return Math.random() - 0.5; 
}



function shuffleCards(){
    for (let i = 0; i < quantCartas/2; i++){
       setShuffle.push(caminhoImg[i]);
       setShuffle.push(caminhoImg[i]);
    }
 
}


function viraCards(divClicada) { 
  let img_SRC= divClicada.parentNode.querySelector('.front-face').querySelector('img').src; //pegando a  SRC DA img; 
  
  //TODO FAZER O ON CLICK AQ
  
 divClicada.classList.remove("back-face");
 divClicada.classList.add("front-face");

 comparaSRC (img_SRC, divClicada);



} 

function comparaSRC (img_SRC,divClicada){
    let flag = false;
    srcArray.push(img_SRC);
    if(srcArray.length > 1){
        if(srcArray[0]===srcArray[1]) {
          console.log("sao iguais");    
            srcArray.splice(0, 1);  // removendo primeiro elemento da posição  zero 
            srcArray.splice(0, 1);   // removendo o segundo elemento que agora esta na posicao zero
            flag = true;
        }
    


    }

    /// deixa as cartas viradas pra cima se flag for igual a true;


    /// se as cartas forem diferentes ou flag for falso  vira pra baixo tudo .





}
