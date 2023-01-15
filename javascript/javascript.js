"use strict" 
let acertos=0;
let erros=0;
let quantCartas;
let srcArray = [];
let contArray= 0;
let contCardId=0;
let cont=0;
let randomNumber=0;
let setShuffle= [];
let arrayDivClicada = [] ;
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
                divVerso.classList.add('virada');
                divVerso.setAttribute ("onClick","viraCards(this)"); 
                card.appendChild(divVerso);
                setaImgVerse(divVerso); 
                setFront(card, contCardId);
                contCardId++;
    }
   
}

function setFront(card, contCardId){
        
        document.getElementById(`card${contCardId}`);      
        let divFrente = document.createElement('div');
        divFrente.className="front-face";
        divFrente.classList.add('escondida');
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
     contArray++; 

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
    arrayDivClicada.push(divClicada.parentNode.querySelector('.front-face').querySelector('img').src);
        divClicada.classList.add("escondida");
        divClicada.classList.remove("virada");
        divClicada.parentNode.querySelector('.front-face').classList.add("virada");
        divClicada.parentNode.querySelector('.front-face').classList.remove("escondida");
   comparaSRC ();

} 

function comparaSRC (){
 
    if(arrayDivClicada.length === 2 ){

        if (arrayDivClicada[0] === arrayDivClicada[1]){
                acertos++;
                arrayDivClicada.splice(0,1);
                arrayDivClicada.splice(0,1);

        }
        else{
                const cardVirada=document.querySelectorAll('div[class*="front-face virada"]');
                const cardEscondida=document.querySelectorAll('div[class*="back-face escondida"]');
                erros++; 
            
                setTimeout(() => {
                cardVirada[0].classList.remove("virada");
                cardVirada[0].classList.add("escondida");
                cardVirada[1].classList.remove("virada");
                cardVirada[1].classList.add("escondida");

                cardEscondida[0].classList.add("virada");
                cardEscondida[0].classList.remove("escondida");
                cardEscondida[1].classList.add("virada");
                cardEscondida[1].classList.remove("escondida");
                }, 1000);
                

                arrayDivClicada.splice(0,1);
                arrayDivClicada.splice(0,1);
        
        
            
        }     
        

    } 
}