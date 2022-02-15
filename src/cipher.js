const cipher = {
  //funcion encode recibe offset y texto 

  encode: function(num, textToCipher){
    // num - themantener el desplazamiento en 26 sin importar el numero que se ingrese
    num = num%26;
   let upperCaseStr = textToCipher.toUpperCase();
   let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
   let newStr = '';

   for(let i = 0; i < upperCaseStr.length; i++){
     let currentLetter = upperCaseStr[i];
     // taking punctuation and spaces out 
     if(alphabet.indexOf(currentLetter) < 0){
       newStr += currentLetter;
       // continue, stop and go to the next value of i q(para que no tome en cuenta espacios y !)
       continue;
     }
     //buscar el valor en el array, osea cada letra asignada un numero
     let currentIndex = alphabet.indexOf(currentLetter);
     // asignar el nuevo numero a la letra 
     let newIndex = currentIndex + num;
    // loop around 26 y si termina en z empezar en a, menor a 0 añadir 26 
     if(newIndex > 25) newIndex = newIndex -26;
     if(newIndex < 0) newIndex = newIndex +26;


     // minusculas
     if(textToCipher[i] === textToCipher[i].toLowerCase()){
      newStr += alphabet[newIndex].toLowerCase();
    } 
     
     else newStr += alphabet[newIndex];
     }
     
     return newStr;
    
  },
  
    
  decode: function(num, cipheredText){
    // num - themantener el desplazamiento en 26 sin importar el numero que se ingrese
    num = num%26;
   let upperCaseStr = cipheredText.toUpperCase();
   let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
   let newStr = '';

   for(let i = 0; i < upperCaseStr.length; i++){
     let currentLetter = upperCaseStr[i];
     // taking punctuation and spaces out 
     if(alphabet.indexOf(currentLetter) < 0){
       newStr += currentLetter;
       // continue, stop and go to the next value of i q(para que no tome en cuenta espacios y !)
       continue;
     }
     //buscar el valor en el array, osea cada letra asignada un numero
     let currentIndex = alphabet.indexOf(currentLetter);
     // asignar el nuevo numero a la letra 
     let newIndex = currentIndex - num;
    // loop around 26 y si termina en z empezar en a, menor a 0 añadir 26 
     if(newIndex > 25) newIndex = newIndex -26;
     if(newIndex < 0) newIndex = newIndex +26;


     // minusculas
     if(cipheredText[i] === cipheredText[i].toLowerCase()){
      newStr += alphabet[newIndex].toLowerCase();
    } 
     
     else newStr += alphabet[newIndex];
     }
     
     return newStr;
    
  }
}
 
export default cipher; 
