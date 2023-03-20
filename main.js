var formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // previene la recarga de la página

  var nombres = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var comentarios = document.getElementById("comentarios").value;
 

  if (nombres === "") {
    alert("Es obligatorio ingresar su nombre");
    document.getElementById("nombre").focus();
  } 
    else if (apellidos === "") {
    alert("Es obligatorio ingresar su apellido");
    document.getElementById("apellido").focus();
  }
    else if (correo === "") {
    alert("Es obligatorio ingresar su correo");
    document.getElementById("correo").focus();
  }
    else if (comentarios === "") {
    alert("Es obligatorio ingresar sus comentarios");
    document.getElementById("comentarios").focus();        
  }
    else {
    console.log(nombres + " " + apellidos + ", " + correo + ", " + comentarios);
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("comentarios").value = "";
    document.getElementById("nombre").focus();
  }
});

function saludar(nombre,apellido){
  console.log("Hola "+ nombre+" "+apellido);
  alert("Bienvenido "+ nombre+" "+apellido);
}
