
var name = document.getElementById("name");
var mail = document.getElementById("mail");
var mensaje = document.getElementById("mensaje");
var enviar = document.getElementById("enviar");

enviar.onclick = function () {
	saveData();
};

setInterval(saveData, 3000);

function saveData() {
	if (name.value != null || name.value != "") {
		localStorage.setItem("nombre", nombre.value);
	}
	if (mail.value != null || mail.value != "") {
		localStorage.setItem("mail", mail.value);
	}
	if (mensaje.value != null || mensaje.value != "") {
		localStorage.setItem("mensaje", mensaje.value);
	}
}

if (storedText != null) {
	//Si estamos aquí significa que existe un dato almacenado en localStorage.
	//Colocamos el datos almacenado en el elemento de la página con id storedTextContainer.

	//Volver a cargar el dato almacenado en el campo de texto
	name.value = storedText;
	mail.value = storedCountry;
	mensaje.value = storedmensaje;
}