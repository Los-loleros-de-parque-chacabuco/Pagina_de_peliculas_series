// V A R I A B L E S
// var nombre
// var contrasena
// var gmail
// function registrarse(){
//     nombre = window.prompt("Ingrese su nombre")
//     gmail = window.prompt("Ingrese su gmail")
//     contrasena = window.prompt("Ingrese un contraseña")
//     alert ("Te registraste con éxito.")
// }
// function iniciar_sesion(){
//     let i_gmail = window.prompt("Ingrese su gmail")
//     let i_contrasena = window.prompt("Ingrese su contraseña")
//         if (i_gmail == gmail && i_contrasena == contrasena) {
//             alert("Su gmail y/o contraseña son correctos.owo")
//             window.location.replace("./pagina_principal.html")
//         } else {
//             alert("Su gmail y/o contraseña son incorrectos.")
// }
// }

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
 let valor1 = 250
 let valor2 = 300
 let valor3 = 500 
let sValor1 = 150
let sValor2 = 400
let sValor3 = 350
let factura = 0
let peli1 = "Rapido y furioso"
let peli2 = "Batman"
let peli3 = "Jugo"
let serie1="Lupin" 
let serie2="Friends" 
let serie3="La casa de papel"

function carritoCompra() {
      var eleccion=confirm("Que desea comprar:\n Peliculas (Clickear Aceptar)\n Series (Clickear Cancelar")
    if(eleccion===true){ 
                       do{
                       var compraPeli= prompt("Ingrese el numero dependiendo de la pelicula \n 1:Rapido y furioso \n 2:Batman \n 3:jugo")
 
    switch (compraPeli)  {
        case "1":
            var pelicula1 = confirm ("La pelicula cuesta $250, Queres comprarla?")
            if (pelicula1 === true) {
                factura += valor1
                carrito.push(peli1)
            } else {
                alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
            }
            break;
    
            case "2":
                var pelicula2 = confirm ("La pelicula cuesta $300, Queres comprarla?")
                if (pelicula2 === true) {
                    factura += valor2;
                    carrito.push(peli2)
                } else {
                    alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                }
                break;

                case "3":
                    var pelicula3 = confirm ("La pelicula cuesta $500, Queres comprarla?")
                    if (pelicula3 === true) {
                        factura += valor3;
                        carrito.push(peli3)
                    } else {
                        alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                    
        default:
                alert ("Mastodonte ingresa un numero del 1 al 10, Capichi?")
            break;
} 
         var confirmar = confirm("Desea comprar algo mas?");
}while (confirmar === true);
}else{
    do{
    var compraSerie= prompt("Ingrese el numero dependiendo de la serie \n 1:Lupin\n 2:Friends \n 3:La casa de papel")

    switch (compraSerie){
        case "1":
            var series1 = confirm ("La serie cuesta $150, Queres comprarla?")
            if (series1 === true) {
                factura += valor1
                carrito.push(serie1)
            } else {
                alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
            }
            break;
    
            case "2":
                var series2 = confirm ("La serie cuesta $400, Queres comprarla?")
                if (series2 === true) {
                    factura += valor2;
                    carrito.push(serie2)
                } else {
                    alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                }
                break;
    
                case "3":
                    var series3 = confirm ("La serie cuesta $350, Queres comprarla?")
                    if (series3 === true) {
                        factura += valor3;
                        carrito.push(serie3)
                    } else {
                        alert ("No queres comprar? tranqui no pasa nada. *secuestra a la familia")
                    }
                    break;
                    
        default:
                alert ("Mastodonte ingresa un numero del 1 al 10, Capichi?")
            break;
    } 
         var confirmar2 = confirm("Desea comprar algo mas?");
    }while (confirmar2 === true);





}
alert ("Compraste estos films: " + carrito + "\n" + "El precio final es: " + factura+" pesos")
}