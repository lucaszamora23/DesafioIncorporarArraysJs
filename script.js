// SITUACION: Un nutricionista, a traves de su página web, nos pide que ingresemos los datos de cada uno de sus pacientes, y en base a eso, te devuelve que tipo de plan alimenticio deberían seguir

function persona (nombre, apellido, edad, altura, peso){
    this.nombre= nombre;
    this.apellido= apellido;
    this.edad= edad;
    this.altura= altura;
    this.peso= peso;
}

let nombre= (prompt("Ingrese su nombre"))
let apellido= (prompt("Ingrese su apellido"))
let edad= parseFloat (prompt("Ingrese su edad"))
let altura= parseFloat (prompt("Ingrese su altura en cm, por ejemplo, si ud mide 1,78m, deberia ingresar '178'"))
let peso= parseFloat (prompt("Ingrese su peso en kg"))
