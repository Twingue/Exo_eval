var prix = parseInt(window.prompt("Donner un prix"));
var qtecom = parseInt(window.prompt("Donner la quantité"));
var tot = (prix*qtecom);

console.log(tot);
console.log(prix);
console.log(qtecom);

function remise() {

if (tot <=200 && tot >=100) {
    var tot1 = (tot*0.05);
     tot = (tot-tot1);
}  else if (tot>200 ) {
    var tot1 = (tot*0.1);
    tot = (tot-tot1);
}
return tot
}  

var total = remise(tot);
console.log(total);


function port() {
    if (total<500 && total>300){
        var portPayer = (total*0.02);
        total = (total + portPayer);
    } else if (total>0 && total<=300 ){
        total = (total+6);
    }   
    console.log(total);
    return portPayer;
}
 port();
document.write("Le prix après remise est de  " + tot + " € <br>");
document.write("Le prix avec frais de port est de " + total + " € ");
