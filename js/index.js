
function enviar() {
    var formulario = document.getElementById("myform");
    var nombre = formulario[0];
    var apellido = formulario[1];
    var mail = formulario[2];
    var telefono = formulario[3];
    var mensaje = formulario[4];
    if (nombre.value != "" && apellido.value != "" && mail.value != ""&& telefono.value != ""&& mensaje.value != "") {
      alert("Enviando el formulario");
      formulario.submit();
      return true;
    } else {
      alert("No se envía el formulario, por favor complete todos los campos");
      return false;
    }
  }