

    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
     console.log(tab);
     
    var nom = window.prompt(`Veuillez choisir un prénom à retirer parmi ceux de la liste ${[...tab]}.`)
    console.log(nom);

    if(tab.includes(nom)){
        tab.splice(tab.indexOf(nom),1);
        tab.push(" ");
        document.write(tab);
        console.log(tab);
    }
    else{alert("erreur")}