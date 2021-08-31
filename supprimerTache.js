function supprimerTache(x){
//Supprimer du DOM.
    var supprimer = document.getElementById("tache"+x);
    var parent = document.querySelector("ul");
    parent.removeChild(supprimer);
//Supprimer du localStorage.    
    localStorage.removeItem("tache"+x);

//Mise à jour du compteur.
    var compteurTache = localStorage.getItem("compteurTache");
    localStorage.setItem("compteurTache", compteurTache-1);
    location.reload();
}

//Bon à savoir : supprimer.className = "NoN";
//localStorage.setItem("supprimer", []+x);
/*if(localStorage.getItem('supprimer') == null) {
    localStorage.setItem("supprimer", []);
}*/

//aaaaaaaaaaaaaaaaaaaaaaaaaaa