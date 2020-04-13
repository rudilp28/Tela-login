


// funcao que pega o valor do input e joga no localStorage e se estiver todos os campos 
// corretos entra na pagina inicial
function logar(){

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    if(nome != "" && email != "" && senha != ""){
        window.location.href = "inicio.html"
    }else{
        alert("insira seus dados");
    }
    


}

function Nova()
{
location.href=" tela1.html"
};
