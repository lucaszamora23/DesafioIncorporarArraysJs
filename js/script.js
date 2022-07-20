// SITUACION: Una nutricionista, a traves de su página web, nos pide que ingresemos los datos de cada uno de sus pacientes, y en base a eso, te devuelve que tipo de plan alimenticio deberían seguir

class Paciente {
    constructor(nombre="", edad=1, altura=100, peso=10){
    this.nombre= nombre;
    this.edad= edad;
    this.altura= altura;
    this.peso= peso;
}
}




let nombre= (prompt("Bienvenido/a al consultorio de la Doctora Gallardo. Por favor, ingrese su mombre"))
let edad,altura,peso
do{

edad= parseFloat (prompt("Ingrese su edad"))

if(isNaN(edad)){
    alert("Ingrese un N° valido")
    }
}while(isNaN(edad))

do{
altura= parseFloat (prompt("Ingrese su altura en cm, por ejemplo, si ud mide 1,78m, deberia ingresar '178'"))

if(isNaN(altura)){
    alert("Ingrese un N° valido")
    }
}while(isNaN(altura))

do{
peso= parseFloat (prompt("Ingrese su peso en kg"))

if(isNaN(peso)){
    alert("Ingrese un N° valido")
    }
}while(isNaN(peso))


const paciente1 = []

paciente1.push(new Paciente (nombre, edad, altura, peso))


alert (`${(nombre)}, tu plan ideál, basado en tu peso, tu altura, y tu edad, es el siguiente.`)

console.log(paciente1)