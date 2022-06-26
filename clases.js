class telefono{
    contruccion(modelo,precio,marca,vendido){
        this.marca=marca;
        this.modelo=modelo;
        this.vendido=vendido;
        this.precio=precio;}
        vender() { this.vendido=true }
        devolver() { this.vendido=false}
    };
    const edu_movil=new telefono("xiaomi","one",180,false);

    edu_movil.vender();
    edu_movil.devolver();
    console.log(edu_movil)
