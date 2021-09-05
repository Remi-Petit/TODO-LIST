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
    //location.reload();
    if(localStorage!=null){
    	//Pas logique mais ça fonctionne xD
    	if (compteurTache == 0) {
        	nbtache.innerHTML = `<span>Il y a `+ (compteurTache-1) +` tâche</span>`;
    	}else if(compteurTache > 1){
        nbtache.innerHTML = `<span>Il y a `+ (compteurTache-1) +` tâches</span>`;
    	}else if(compteurTache == 1){
    		nbtache.innerHTML = `<span>Il n'y a aucune tâche</span>`;
    	}
	}
	//Redirige sur la zone de texte.
    document.getElementById("inputId").focus();
}

//Bon à savoir : supprimer.className = "NoN";
//localStorage.setItem("supprimer", []+x);
/*if(localStorage.getItem('supprimer') == null) {
    localStorage.setItem("supprimer", []);
}*/

//aaaaaaaaaaaaaaaaaaaaaaaaaaa