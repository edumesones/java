class Persona{
    constructor(descripcion) {
    this.persona;
    this.nombre=descripcion.nombre
    this.apellido=descripcion.apellido
    this.altura=descripcion.altura
    this.edad=descripcion.edad
    this.pais_nacimiento=descripcion.pais_nacimiento
 }

    descrip_persona() {
        if(this.pais_nacimiento.toUpperCase()=="ARGENTINA" && this.altura > 180 && this.edad >=18 ){
            return  this.nombre + " " + this.apellido + " es una persona alta,argetina y mayor de edad"}
        else if(this.pais_nacimiento.toUpperCase()=="ARGENTINA" && this.altura<180 && this.edad >=18 ){
            return this.nombre + " " + this.apellido + " es una persona baja,argetina y mayor de edad"
        }
        else if(this.pais_nacimiento.toUpperCase()=="ARGENTINA" && this.altura<180 && this.edad <18 ){
            return this.nombre + " "+ this.apellido + " es una persona baja,argentina y menor de edad"}
            
        else{ return this.nombre + " " + this.apellido + " no es una persona argentina"}    
        }
    
    
};
let persona = new Persona({nombre:"",apellido:"",altura:"",edad:"",pais_nacimiento:""})
persona.nombre=prompt('¿Cual es tu nombre?')
persona.apellido=prompt('¿Cual es tu apellido?')
persona.altura=prompt('¿Cuanto mides?')
persona.edad=prompt('¿Cuantos años tienes?')
persona.pais_nacimiento=prompt('¿Cual es tu pais de nacimiento?')


console.log(persona.descrip_persona())

console.log(persona)