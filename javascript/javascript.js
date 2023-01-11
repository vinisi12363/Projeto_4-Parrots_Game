"use strict" 

let quantCartas;
let divArray = [];
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
                           "./img/triplesparrot.gif",
                           "./img/unicornparrot.gif");



 while(quantCartas != 4 ||quantCartas != 6 ||quantCartas != 8 ||quantCartas != 10 ||quantCartas != 12 ||quantCartas != 14 ){
   
     quantCartas=prompt("com quantas cartas você quer jogar (4 a 14 apenas)");
     quantCartas=parseInt(quantCartas);

     if (quantCartas === 4 ||quantCartas === 6 ||quantCartas === 8 ||quantCartas === 10 ||quantCartas === 12 ||quantCartas === 14 ){
        
        break;
     }

 }

for(let cont=0;cont < quantCartas; cont++){
  
    document.addEventListener('DOMContentLoaded', function setarCard(){ // criando os cards dinamicamente.
       
        let div=document.createElement('div');
        div.className='card';
        div.id =`card${cont}`;
        div.style.background = "#fffff";
        div.style.border = "1px #96caa5 solid";
        document.body.appendChild(div); 
        setVerse();
        //addNoArray(div);  // adicionando a divPai (card) completo no array.
       
    },false);


}

shuffleCards(); 

function setVerse(){
    while (contCardId < quantCartas){
   
                let card = document.getElementById(`card${contCardId}`);
                let divVerso =document.createElement('div');
                divVerso.className="back-face";
                divVerso.classList.add('face');
                divVerso.style.background = "#a7e9af";
                divVerso.style.border = "1px #96caa5 solid";
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
     imgVerso.style.Left = "10px";
     imgVerso.style.objectFit="cover";
     divVerso.appendChild(imgVerso); 
     contArray++;  // ?????? // 

}

function setaImgFront(divFrente , contador){
    
        var imgFrente = document.createElement('img');
        imgFrente.src = `${setShuffle[contador]}`; //fazer uma função sort e chamar ela aqui  ela tem que retornar uma string 
        imgFrente.style.width = "100px";
        imgFrente.style.height = "100px";
        imgFrente.style.position = "relative";
        imgFrente.style.Top = "14px";
        imgFrente.style.Left = "10px";
        imgFrente.style.objectFit="cover";
        divFrente.appendChild(imgFrente); 
        contArray++;
}


caminhoImg.sort(randomizar); 

function randomizar() { 
	return Math.random() - 0.5; 
}
console.log ("caminho img ARRAY : "+caminhoImg);

function shuffleCards(){
    for (let i = 0; i < quantCartas/2; i++){
       setShuffle.push(caminhoImg[i]);
       setShuffle.push(caminhoImg[i]);
    }
    for (let i = setShuffle.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
   
     const j = Math.floor(Math.random() * (i + 1));
    
        // Reposicionando elemento
        [setShuffle[i],setShuffle[j]] = [setShuffle[j],setShuffle[i]];
    }

    console.log("valor de set shuffle:"+setShuffle);
}


function addNoArray(div) {
    divArray.push(div);

}

// tem que criar uma função que atribui uma imagem a div criada e  aloca num vetor global.
