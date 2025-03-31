var lista = [17,18,16,90,123,412];

console.log(lista[0]);

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

lista.push("55");

for (let x = 0; x < lista.length; x++){
    document.write("<br>" + lista[x]);
}