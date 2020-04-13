
function verificar(){

    var nome = document.getElementById('nome').value;

    var localnome = localStorage.getItem('nome');

    if(nome != localnome ){
        alert("Dados incorretos");
    }else{
        window.location.href = "inicio.html"
    }

}




// var titulo = document.getElementById('titulo').innerHTML;

// alert(titulo);

// function Nova()
// {
// location.href=" tela1.html"
// };

function Voltar()
{
location.href=" index.html"
};

// function inicio(){
//     location.href=" Inicio.html"
     
// }


  

