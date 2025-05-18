const NOTA1 = document.getElementById("nota1");
const NOTA2 = document.getElementById("nota2");
const NOTA3 = document.getElementById("nota3");
const RESULTADO = document.getElementById("cuentas"); 
 console.log(NOTA1.value);

 function calcular() {
 let nota1 = Number(NOTA1.value);
 let nota2 = Number(NOTA2.value);
 let nota3 = Number(NOTA3.value); 

let total = nota1 + nota2 + nota3; 

RESULTADO.innerHTML = "El resultado de la suma es:" + total;

 }