class Libro {
    constructor(titulo, autor, genero, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    info() { //se define como se crea y como se muestra el libro
        return `${this.titulo} de ${this.autor} (${this.anio}) - ${this.disponible ? "Disponible" : "Prestado"}`;
    }
}

class Biblioteca {
    constructor(nombre) {
        //Nombre -> string
        //liros -> arreglo vacio
    }
}

