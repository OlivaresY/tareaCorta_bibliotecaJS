class Libro {
    constructor(titulo, autor, genero, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    info() { //definiendo como se crea y como se mostrará el libro
        return `${this.titulo} de ${this.autor} (${this.anio}) - ${this.disponible ? "Disponible" : "Prestado"}`;
    }
}

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }

    agregarLibro(libro) {
        const existe = this.libros.find(l => l-titulo.toLowerCase() === libro.titulo.toLowerCase());
        if (existe) {
            console.error(`El libro "${libro.titutlo}" ya existe en la biblioteca.`);
        } else {
            this.libros.push(libro);
            console.log(`Libro "${libro.titulo}" agregado correctamente.`);
        }
    }
}

