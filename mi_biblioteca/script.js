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
        const existe = this.libros.find(l => l.titulo.toLowerCase() === libro.titulo.toLowerCase());
        if (existe) {
            console.error(`El libro "${libro.titulo}" ya existe en la biblioteca.`);
        } else {
            this.libros.push(libro);
            console.log(`Libro "${libro.titulo}" agregado correctamente.`);
        }
    }

    buscarPorGenero(genero) {
        return this.libros.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
    }

    prestar(titulo) {
        const libro = this.libros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
        if (!libro) {
            throw new Error(`El libro "${titulo}" no existe en la biblioteca.`);
        }
        if (!libro.disponible) {
            console.log(`El libro "${titulo}" ya está prestado.`);
        } else {
            libro.disponible = false;
            console.log(`Has prestado el libro "${titulo}".`);
        }
    }
    estadisticas() {
        const total = this.libros.length;
        const disponibles = this.libros.filter(l => l.disponible).length;
        const prestados = total - disponibles;
        console.log(`Total de libros: ${total}`);
        console.log(`Disponibles: ${disponibles}`);
        console.log(`Prestados: ${prestados}`);
    }
}

//datos de prueba
const miBiblioteca = new Biblioteca("Mi Biblioteca");

// Agregar libros
miBiblioteca.agregarLibro(new Libro("Cien años de soledad", "García Márquez", "Ficción", 1967));
miBiblioteca.agregarLibro(new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003));
miBiblioteca.agregarLibro(new Libro("Breve historia del tiempo", "Stephen Hawking", "Ciencia", 1988));
miBiblioteca.agregarLibro(new Libro("1984", "George Orwell", "Ficción", 1949));
miBiblioteca.agregarLibro(new Libro("El Principito", "Antoine de Saint-Exupéry", "Ficción", 1943));

// Intentar duplicado
miBiblioteca.agregarLibro(new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003));

// Prestar un libro
try {
  miBiblioteca.prestar("Cien años de soledad");
  miBiblioteca.prestar("Cien años de soledad"); // ya prestado
} catch (error) {
  console.error("Error:", error.message);
}

// Buscar por genero
const ciencia = miBiblioteca.buscarPorGenero("ciencia");
console.log("Libros de Ciencia:", ciencia.map(l => l.info()));

// Estadisticas
miBiblioteca.estadisticas();
