console.log("Hello world");


// tem que usar esses trambolhos pra verificar se uma variavel contem letras maiusculas ou numeros
var maiusculas = /[A-Z]/;
var numeros = /\d+/;

let nome = document.getElementById("input_nome");
let email = document.getElementById("input_email");
let confirmar_email = document.getElementById("input_confirmar");
let senha = document.getElementById("input_senha");
let telefone = document.getElementById("input_telefone");
let cpf = document.getElementById("input_cpf");

nome.addEventListener("keyup", function(event){
    var erro = document.getElementById("nome_erro");

    if (nome.value.length >= 4)
    {
        erro.classList.add("hidden");
    }

    else{
        erro.classList.remove("hidden");
    }
})

confirmar_email.addEventListener("keyup", function(event){
    var erro = document.getElementById("email_erro");

    if (confirmar_email.value == email.value){
        erro.classList.add("hidden");
    }

    else{
        erro.classList.remove("hidden");
    }
})

senha.addEventListener("keyup", function(event){
    var erro = document.getElementById("senha_erro");

    if (!senha.value.match(maiusculas) && !senha.value.match(numeros) && !senha.value.length >= 8){
        erro.classList.add("hidden");
    }

    else{
        erro.classList.remove("hidden");
    }
})