

 /**document.getElementById("boton").onclick = function (){
 console.log("capturamos el evento click");
 document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento de js"}**/

 
 document.getElementById('boton').addEventListener ('click', function() {
    console.log("hola mundo desde Eventlisterner");
    document.getElementById("demo").innerHTML = "estamos provando nuestro primer evento de Js"
 });

 document.getElementById ('boton_color').addEventListener('click', function() {
   document.body.style.backgroundColor = '#ff000';
});

document.getElementById ('boton_default').addEventListener('click', function() {
   document.body.style.backgroundColor = 'blue';
});
document.getElementById('boton_ocultar').addEventListener ('click', function() {
   document.getElementById("demo").style.display = 'none';
});
document.getElementsByClassName('párrafo')