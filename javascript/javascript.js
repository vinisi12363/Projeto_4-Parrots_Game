"use strict" 
let contJogadas=0;
let contCardVirado=0;
let acertos=0;
let erros=0;
let quantCartas;
let arrayDivClicada = [];
let srcArray = [];
let contArray= 0;
let contCardId=0;
let cont=0;
let randomNumber=0;
let setShuffle= [];

let cronTime = 0;

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
                div.setAttribute ("data-test", "card");
                div.id =`card${cont}`;
                div.style.background = "#fffff";
                document.body.appendChild(div); 
                setVerse();
                
    },false);

}

setInterval(cronometro, 1000);
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
                imgVerso.setAttribute("data-test","face-down-image");
                imgVerso.style.width = "100px";
                imgVerso.style.height = "100px";
                imgVerso.style.margin="24 10 7 22";
                imgVerso.style.objectFit="cover";
                divVerso.appendChild(imgVerso); 
                contArray++; 

}

function setaImgFront(divFrente , contador){
    
                var imgFrente = document.createElement('img');
                imgFrente.setAttribute ('src',`${setShuffle[contador]}`);
                imgFrente.id ="imgFrente";
                imgFrente.setAttribute("data-test","face-up-image");
                imgFrente.style.width = "100px";
                imgFrente.style.height = "100px";
                imgFrente.style.margin="24 10 7 22";
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
                contJogadas++;
                arrayDivClicada.push(divClicada.parentNode.querySelector('.front-face').querySelector('img').src);
                divClicada.classList.add("escondida");
                divClicada.classList.remove("virada");
                divClicada.parentNode.querySelector('.front-face').classList.add("virada");
                divClicada.parentNode.querySelector('.front-face').classList.remove("escondida");
            
                compararSRC ();

} 

function compararSRC (){
  
    if(arrayDivClicada.length === 2 ){

        if (arrayDivClicada[0] === arrayDivClicada[1]){
                contCardVirado +=2;
                acertos++;
                const cardVirado = document.querySelectorAll('div[class*="front-face virada"]');
                cardVirado[0].classList.add('encontrada');
                cardVirado[0].id = "encontrada";
                cardVirado[0].parentNode.querySelector('div[class*="back-face escondida"]').removeAttribute("onclick");
                cardVirado[1].classList.add('encontrada');
                cardVirado[1].parentNode.querySelector('div[class*="back-face escondida"]').removeAttribute("onclick");
                cardVirado[1].id = "encontrada";
                arrayDivClicada.splice(0,1);
                arrayDivClicada.splice(0,1);

                if (contCardVirado === quantCartas){
                    finalizarJogo();
                }

        }
        else{   

                const cardVirada=document.querySelectorAll(".front-face.virada:not(.encontrada)");
                const cardEscondida=document.querySelectorAll('div[class*="back-face escondida"]');
          

                    console.log (cardVirada);
                
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

function finalizarJogo(){
    setTimeout(() => {alert (`Você ganhou em ${contJogadas} jogadas! no tempo de ${cronTime-2} segundos`);
    
    
    let resposta;
    while(resposta !=="sim" || resposta !== "não"){
             resposta=prompt("Deseja jogar novamente ? (responda: sim ou não)");
             if (resposta ==="sim"||resposta==="não"){
                break;
             }
            
    }
    if(resposta=="sim"){
             window.location.reload(true);
    }else{
             alert("Obrigado por jogar o Parrots Game.");
    }
}, 2000);
}

function cronometro(){

       cronTime++;
       document.getElementById("timer").innerText = `${cronTime}s`;
       document.getElementById("timer").style.fontSize = "25px";
     
}
