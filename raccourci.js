//Aller sur la barre de tâche à chaque reload de la page.
document.getElementById("inputId").focus();

//Raccourcie pour ajouter une tâche en appuyant sur la touche entrée.
window.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress(key) {
	if (key.keyCode == "13") {
		document.getElementById("entrer").click();
	}
}