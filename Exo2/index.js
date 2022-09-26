var nombre = parseInt(window.prompt (" Entrez un nombre dont vous voulez afficher la table")); 

function tableMultiplication (nombre){
for(let i = 1; i <= 10; i++) {

    const resultat = i * nombre;

   document.write(`${nombre} * ${i} = ${resultat} <br> `);
}
return nombre;
}
tableMultiplication(nombre);
