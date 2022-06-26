//const movil={marca:"xiaomi",modelo:"one",precio:180,vendido:false};
//const persona=(nombre:"edu",apellido:"mesones",edad:25,"segundo apellido":'sierra');

//console.log(persona['segundo apellido'])
//console.log(persona.apellido)
//cambiar propiedad-->movil.marca='samsung'; se cambiaria


function movil(marca,precio,modelo,vendido){
    this.marca=marca;
    this.modelo=modelo;
    this.vendido=vendido;
    this.precio=precio;
    this.vender =()=>this.vendido=true

};
const edu_movil=new movil("xiaomi","one",180,false);
let cadena = "HOLAAAA";
edu_movil.vender();
console.log(cadena.length);
for (const propiedad in edu_movil){
    console.log(edu_movil[propiedad])
};
