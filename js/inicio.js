

// funcao voltar para o index inicial de cadastro 
function Voltar()
{
location.href=" index.html"
};


// funcao de click que faz a dic verde ter movimeto lateral
let valor = 1;

function slide(){
    if(valor == 1){
        document.getElementById('zezinho').style.width = "210px"
        document.getElementById("sumir").style.display = "block"
        valor = 0;
    }
    else{
        document.getElementById('zezinho').style.width = "30px"
        document.getElementById("sumir").style.display = "none"
        valor = 1;
    }
   
}


// funcao que pega o valor do localStorage e joga na div de texto 
window.onload = function(){
    var nome1 = document.getElementById('titulo').innerHTML = localStorage.getItem('nome');

}

// funcao de animacao 

//  target = document.getElementById('anime');


// target.addEventListener('click', function (){
//         this.style.backgroundColor = 'blue';
// }) 

// function animation(){
//     target.addEventListener('load', function (){
//         this.classList.add('animate');
//     })
// }

// window.onload = function(){
//     animation();
// }



    


