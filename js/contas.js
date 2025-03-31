// alert("contas");

var x = 5 * 5;

var y = 100 / 3;

var z = x + y -1;

console.log(z);

var comp = x > y;
console.log(comp);

if (x > y){
    console.log("X é maior que Y");
}
else{
    console.log("Y é maior que X");
}

var a = 2;
a++;
a++;
a++;

a *= 5;

console.log(a);

var b = 1;

var c = "1";

console.log(b == c);
console.log(b === c);

var teste1 = true;

var teste2 = true;

var resposta = teste1 && teste2;

console.log("resposta: " + resposta);

if (teste1 && teste2){
    console.log("é verdadeiro");
}

var i = 0;

while (i <= 10){
    console.log(i);
    i++;
}

for (let i = 0; i < 19; i++){
    document.write("<h1> Voltando: </h1>" + i);
}