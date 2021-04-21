function ajoutTODO(){

    //Récupérer la saisie utilisateur
    let newTache = document.getElementById("inputId").value;
    const nouvelleEmplacementTache = document.createElement("div");
    
    //Récupérer le local Storage
    let localStorage = window.localStorage;

    //Si le local storage existe
    if(localStorage!=null){
        if(localStorage.getItem('compteur') == null) {
            localStorage.setItem("compteur", 0);
        }
        let compteur = parseInt(localStorage.getItem("compteur"));
        localStorage.setItem("tache" + compteur, newTache);
        localStorage.setItem("compteur", compteur + 1);
        nouvelleEmplacementTache.innerHTML = `<div class="liste" id="${compteur}">
                                                  <li>${compteur+1}) ${newTache}</li>
                                                  <span onclick="supprimerTache()"><i class="fas fa-trash"></i></span>
                                              </div>`;
        document.querySelector("ul").appendChild(nouvelleEmplacementTache);
        //Ajouter du plus grand au plus petit

        //Afficher le nombre de tâches
        /*let nbtache = document.getElementById('nbtache');
        if (compteur = 0) {
            nbtache.innerHTML = "Il y a une tâche";
        }else {
            nbtache.innerHTML = `Il y a ${compteur + 1} tâches`;
            location.reload();
        }*/

        var nbtache = document.getElementById("nbtache");
        if (compteur == 0) {
            nbtache.innerHTML = `<span>Il y a ${compteur+1} tâche</span>`;
        }else{
            nbtache.innerHTML = `<span>Il y a ${compteur+1} tâches</span>`;
        }
    }
    //Vider l'inputPrenom
    document.getElementById("inputId").value = "";
}

function supprimerTache(){
    //Récupérer le local Storage
    let localStorage = window.localStorage;
    if(localStorage!=null){
        //Supprimer l'item ayant la clé "prenom"
        localStorage.removeItem("id");
    }
}

function toutSupprimer(){
    localStorage.clear();
    location.reload();
}
