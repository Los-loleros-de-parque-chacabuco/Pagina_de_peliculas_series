alert ("Registrese o inicie sesión, por favor")
// V A R I A B L E S
var nombre
var contrasena
var gmail
function registrarse(){
    nombre = window.prompt("Ingrese su nombre")
    gmail = window.prompt("Ingrese su gmail")
    contrasena = window.prompt("Ingrese un contraseña")
    alert ("Te registraste con éxito.")
}
function iniciar_sesion(){
    let i_gmail = window.prompt("Ingrese su gmail")
    let i_contrasena = window.prompt("Ingrese su contraseña")
        if (i_gmail == gmail && i_contrasena == contrasena) {
            alert("Su gmail y/o contraseña son correctos.owo")
            window.location.replace("./pagina_principal.html")
        } else {
            alert("Su gmail y/o contraseña son incorrectos.")
}
}