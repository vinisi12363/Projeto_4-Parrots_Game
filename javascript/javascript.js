let quantCartas;
let divArray = [];
let contArray= 0;
let contCardId=0;


 while(quantCartas != 4 ||quantCartas != 6 ||quantCartas != 8 ||quantCartas != 10 ||quantCartas != 12 ||quantCartas != 14 ){
   
     quantCartas=prompt("com quantas cartas você quer jogar (4 a 14 apenas)");
     quantCartas=parseInt(quantCartas);

     if (quantCartas === 4 ||quantCartas === 6 ||quantCartas === 8 ||quantCartas === 10 ||quantCartas === 12 ||quantCartas === 14 ){
        
        break;
     }

 }

let cont=0;

for(let cont=0;cont < quantCartas; cont++){
  
    document.addEventListener('DOMContentLoaded', function setarCard(){ // criando os cards dinamicamente.
       
        let div=document.createElement('div');
        div.className='card';
        div.id =`card${cont}`;
        div.style.background = "#fffff";
        div.style.border = "1px #96caa5 solid";
        document.body.appendChild(div); 
       
         setarFrenteVerso();
         console.log("chamou o seta frente verso "+cont+" Vez");  
         addNoArray(div);  // adicionando a divPai (card) completo no array.
       
    },false);


}


function setarFrenteVerso(){


    while (contCardId < quantCartas){
          
             console.log ("contador do setaFrente e verso vale: " +contCardId);
               let card = document.getElementById(`card${contCardId}`);

                
                let divVerso =document.createElement('div');
                divVerso.className="back-face";
                divVerso.classList.add('face');
                divVerso.style.background = "#a7e9af";
                divVerso.style.border = "1px #96caa5 solid";
                
                card.appendChild(divVerso);
                console.log("setou no card: " + card.id);

                let divFrente =document.createElement('div');
                divFrente.className="front-face";
                divFrente.classList.add('face');
                divFrente.style.background = "#a7e9af";
                divFrente.style.border = "1px #96caa5 solid";

                card.appendChild(divFrente);

                
                setaImg(divVerso, divFrente); // vou  mandar as duas divs frente e verso para adicionar imagens

                break;
       
    }
    contCardId++;
}




function setaImg(divVerso, divFrente){
    

    
   
     var imgVerso = document.createElement('img');
     imgVerso.src = "./img/back.png";
     imgVerso.style.width = "100px";
     imgVerso.style.height = "100px";
     imgVerso.style.position = "relative";
     imgVerso.style.Top = "14px";
     imgVerso.style.Left = "10px";
     imgVerso.style.objectFit="cover";
     divVerso.appendChild(imgVerso); 

     var imgFrente = document.createElement('img');
     imgFrente.src = "./img/bobrossparrot.gif";
     imgFrente.style.width = "100px";
     imgFrente.style.height = "100px";
     imgFrente.style.position = "relative";
     imgFrente.style.Top = "14px";
     imgFrente.style.Left = "10px";
     imgFrente.style.objectFit="cover";
     divFrente.appendChild(imgFrente); 

     contArray++; 

}

function addNoArray(div) {
    divArray.push(div);

}
// tem que criar uma função que atribui uma imagem a div criada e  aloca num vetor global.

console.log (divArray);
