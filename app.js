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
            alert("Su gmail y/o contraseña son correctos owo")
            window.location.replace("./pagina_principal.html")
        } else {
            alert("Su gmail y/o contraseña son incorrectos.")
}
}

// function chupetines(){
//     let eleccion = window.confirm("Queres comprar los chupetines?")
//      if (eleccion === true){
//          let cantidad = window.prompt("Cuantos queres?")
//          let precio = 30;
//          let total = parseInt(cantidad) * precio;
//          alert("Serian " + total + "$");
//          alert("Gracias vuelvas prontos saluda")
//      }
//      else{
//          alert("Gracias vuelvas prontos saluda")
//      }
//  }
//  function algodon(){
//      let eleccion = window.confirm("Queres comprar los algodones?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantos queres?")
//           let precio = 50;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function paletas(){
//      let eleccion = window.confirm("Queres comprar las paletas?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantas queres?")
//           let precio = 25;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function caramelos(){
//      let eleccion = window.confirm("Queres comprar los caramelos?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantos queres?")
//           let precio = 10;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function rosquillas(){
//      let eleccion = window.confirm("Queres comprar las rosquillas?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantas queres?")
//           let precio = 70;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function cereal(){
//      let eleccion = window.confirm("Queres comprar el cereal?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantos queres?")
//           let precio = 355;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function waffles(){
//      let eleccion = window.confirm("Queres comprar los waffles?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantos queres?")
//           let precio = 150;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }
//   function squisher(){
//      let eleccion = window.confirm("Queres comprar la legendaria Squisher?")
//       if (eleccion === true){
//           let cantidad = window.prompt("Cuantas queres?")
//           let precio = 250;
//           let total = parseInt(cantidad) * precio;
//           alert("Serian " + total + "$");
//           alert("Gracias vuelvas prontos saluda")
//       }
//       else{
//           alert("Gracias vuelvas prontos saluda")
//       }
//   }

/* INICIO DE CARRITO */

 const carrito = [];
 const peliculas = [];
 let valor1 = 250
 let valor2 = 300
 let valor3 = 500 
 let carritos = 0
let peli1 = "rapido y furioso"
let peli2 = "batman"
let peli3 = "jugo"

function carritoCompra() {
    do {  
    let compras = prompt("Ingrese el numero dependiendo de la pelicula \n 1:Rapido y furioso \n 2:Batman \n 3:jugo")
    switch (compras)  {
        case "1":
            var pelicula1 = confirm ("La pelicula cuesta 250$, Queres comprarla?")
            if (pelicula1 === true) {
                carritos += valor1
                peliculas.push(peli1)
            } else {
                alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
            }
            break;
    
            case "2":
                var pelicula2 = confirm ("La pelicula cuesta 300$, Queres comprarla?")
                if (pelicula2 === true) {
                    carritos += valor2;
                    peliculas.push(peli2)
                } else {
                    alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                }
                break;

                case "3":
                    var pelicula3 = confirm ("La pelicula cuesta 500$, Queres comprarla?")
                    if (pelicula3 === true) {
                        carritos += valor3;
                        peliculas.push(peli3)
                    } else {
                        alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                    
        default:
                alert ("Mastodonte ingresa un numero del 1 al 10, Capichi?")
            break;
    }
    var confirmar = confirm("Desea comprar algo mas?");
} while (confirmar === true);

alert ("Compraste estos films: " + peliculas + "\n" + "El precio final es: " + carritos)
}
