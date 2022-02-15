import cipher from "./cipher.js";

// boton cifrar, acción dar click, ejecutar funcion 
const buttonCipher = document.getElementById("buttonCipher");
buttonCipher.addEventListener("click",function(){
  event.preventDefault();
    // variables definidas adentro de la función para que tome los valores introducidos hasta que se haga click
    //obtener texto para cifrar 
    const textToCipher = document.getElementById("textToCipher").value;
    // offset o desplazamiento 
    let num =  document.getElementById("shift").value;
    // donde va a aparecer el texto cifrado 
    const cipheredText = document.getElementById("cipheredText");
    // la linea que une variables + funcion y lo pone en el textbox
    cipheredText.innerHTML = cipher.encode(num, textToCipher);
    // (X,Y) argumentos cuando llamas y en la funcion directo son parámteros

})

// boton decifrar, acción al dar click, ejecuta función

const buttonDecipher = document.getElementById("buttonDecipher");
buttonDecipher.addEventListener("click", function(){
  event.preventDefault();
  // obtener texto para decifrar 
  const cipheredText = document.getElementById("cipheredText").value;
  // offset o desplazamiento 
  let num =  document.getElementById("shift").value;
    // donde va a aparecer el texto descifrado 
  const textToCipher = document.getElementById("textToCipher");
  //la linea que une variables + función y lo pone en el textbox
  textToCipher.innerHTML = cipher.decode(num, cipheredText);
})


//para resetear los textareas 
document.getElementById("buttonReset").onclick = function(){
  location.reload(document.getElementById("section2"));
}
