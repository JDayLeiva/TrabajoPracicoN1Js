// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let mayor, n;

let numberUno = parseInt(prompt('Ingresa el primer numero'));
let numberDos = parseInt(prompt('Ingresa el segundo numero'));
let numberTres = parseInt(prompt('Ingresa el tercer numero'));

console.log(numberUno);
console.log(numberDos);
console.log(numberTres);

if(numberUno > numberDos){
    n = numberUno;
}
else{
    n = numberDos;
}
if(n > numberTres){
    mayor = n;
}else{
    mayor = numberTres;
}
document.write('El numero mayor es: ' + mayor);
