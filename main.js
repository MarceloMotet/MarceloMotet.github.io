const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav-menu_visible");

if (navMenu.classList.contains("nav-menu_visible")) {
  navToggle.setAttribute("aria-label", "Cerrar menú");
} else {
  navToggle.setAttribute("aria-label", "Abrir menú");
}
});




  var formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // previene la recarga de la página

  var nombres = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var contraseña = document.getElementById("contraseña").value;

  if (nombres === "") {
    alert("Es obligatorio ingresar su nombre");
    document.getElementById("nombre").focus();
  } else if (apellidos === "") {
    alert("Es obligatorio ingresar su apellido");
    document.getElementById("apellido").focus();
  }
    else if (correo === "") {
    alert("Es obligatorio ingresar su apellido");
    document.getElementById("correo").focus();
    }
    else if (contraseña === "") {
    alert("Es obligatorio ingresar su apellido");
    document.getElementById("contraseña").focus();
    

  } else {
    console.log(nombres + " " + apellidos+ ", " + correo + ", " + contraseña);
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("nombre").focus();
  }
});

