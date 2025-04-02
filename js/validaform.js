const formulario = document.getElementById('formulario');


var email = document.getElementById("email");

var fone = document.getElementById("fone");

var cpf = document.getElementById("cpf");

var senha = document.getElementById("senha");

var cadastrar = document.getElementById('cadastrar');

var resetar = document.getElementById('resetar');

console.log(formulario, cadastrar, resetar, email, fone, cpf, senha);

cadastrar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicou com event listener");
})

resetar.addEventListener("click", function(event){
    event.preventDefault();
    alert("resetou tudokkkkkkkkkkkkkkkk")
})

const botao2 = document.getElementById("botao2");

botao2.addEventListener("dblclick", function(event){
    event.preventDefault();
    console.log("aaaa");
})


const container = document.getElementById("container");

container.addEventListener("mouseover", function(event){
    container.style.backgroundColor = "yellow";
})

container.addEventListener("mouseout", function(event){
    container.style.backgroundColor = "blue";
})

// cpf.addEventListener("keypress", function(event){
//     console.log(cpf.value);
// })

cpf.addEventListener("keyup", function(event){
    if (cpf.value.length >= 8){
        cpf.style.backgroundColor = "green"
        cpf.classList.add("teste");
        cpf.classList.remove("dromedario");
    }
    else{
        cpf.style.backgroundColor = "red"
    }
    console.log(cpf.value.length);
})