function envCom(){
    alert("Tu comentario ha sido enviado. Muchas gracias.");
    document.getElementById("TextArea").value="";
}
function iden(){
    let user=document.getElementById("Usuario").value;
    alert( user + " ha iniciado sesion");
    let div=document.getElementById("Sesion");
    div.innerHTML="<form>" +
    "<br><br>" +
    "<h2 id=\"sombra1\">Tu usuario</h2>" +
    "<br>" +
    "<p>Bienvenido </p>" + user +
    "<br><br>" + 
    "<input type=\"submit\" value=\"Cerrar Sesión\" id=\"Enviar\" onclick=\"cerrar()\">" +
    "</form>";
}
function cerrar(){
    let div=document.getElementById("Sesion");
    div.innerHTML="<form>" +
    "<br><br>" +
    "<h2 id=\"sombra1\">Identifícate</h2>" +
    "<br>" +
    "<label for=\"Usuario\">Usuario:</label>" + 
    "<input type=\"text\" name=\"Usuario\" id=\"Usuario\">" +
    "<br>" +
    "<br>" +
    "<label for=\"Contraseña\">Contraseña:</label>" +
    "<input type=\"text\" name=\"Contraseña\" id=\"Contraseña\">" +
    "<br><br>" +
    "<input type=\"submit\" value=\"Enviar\" id=\"Enviar\" onclick=\"iden()\">" +
    "<input type=\"reset\">" +
    "</form>";
}
