

    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
     console.log(tab);
     
    var nom = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`)
    console.log(nom);

    if(tab.includes(nom)){
        tab.splice(tab.indexOf(nom),1);
        tab.push(" ");
        console.log(tab)
    }
    else{alert("erreur")}