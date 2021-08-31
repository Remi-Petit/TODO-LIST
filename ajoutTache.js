function ajoutTODO(){

    //Récupérer la saisie utilisateur.
    let newTache = document.getElementById("inputId").value;
    const nouvelleEmplacementTache = document.createElement("div");
    nouvelleEmplacementTache.className = "liste";

    //Récupérer le local Storage.
    let localStorage = window.localStorage;

    //Si le local storage existe.
    if(localStorage!=null){
        if(localStorage.getItem('compteur') == null) {
            localStorage.setItem("compteur", 0);
            localStorage.setItem("compteurTache", 0);
        }
        let compteur = parseInt(localStorage.getItem("compteur"));
        let compteurTache = parseInt(localStorage.getItem("compteurTache"));
        localStorage.setItem("tache" + compteur, newTache);
        localStorage.setItem("compteur", compteur + 1);
        localStorage.setItem("compteurTache", compteur + 1);
        //Afficher la tâche.
        nouvelleEmplacementTache.id = "tache"+compteur;
        nouvelleEmplacementTache.innerHTML = `<li>${compteur+1}) ${newTache}</li>
                                                  <span onclick="supprimerTache(this.id), test()" id="${compteur}"><i class="fas fa-trash"></i></span>`;
        document.querySelector("ul").appendChild(nouvelleEmplacementTache);
        //compteur total.
        var nbtache = document.getElementById("nbtache");
        if (compteurTache == 0) {
            nbtache.innerHTML = `<span>Il y a ${compteurTache+1} tâche</span>`;
        }else{
            nbtache.innerHTML = `<span>Il y a ${compteurTache+1} tâches</span>`;
        }
    }
    //Vider l'inputPrenom.
    document.getElementById("inputId").value = "";
    //Redirige sur la zone de texte.
    document.getElementById("inputId").focus();
}

//refresh le compteur.
if(localStorage!=null){
    compteur = localStorage.getItem("compteur");
    compteurTache = localStorage.getItem("compteurTache");
    if (compteurTache == 1) {
        nbtache.innerHTML = `<span>Il y a `+ compteurTache +` tâche</span>`;
    }else if(compteurTache > 1){
        nbtache.innerHTML = `<span>Il y a `+ compteurTache +` tâches</span>`;
    }
        
//refresh les tâches existantes.
    for(i=0; i<compteur; i++){
        tache = localStorage.getItem("tache" + i);
        if(tache != null){
            const nouvelleEmplacementTache = document.createElement("div");
            nouvelleEmplacementTache.id = "tache"+i;
            nouvelleEmplacementTache.className = "liste";
            nouvelleEmplacementTache.innerHTML = `<li>`+ (i+1) + `) ` + tache +`</li>
            <span onclick="supprimerTache(this.id), test()" id="`+ i +`"><i class="fas fa-trash"></i></span>`;
            document.querySelector("ul").appendChild(nouvelleEmplacementTache);
        }
    }
}