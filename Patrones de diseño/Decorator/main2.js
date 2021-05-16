let Usuario = function(nombre) {
    this.nombre = nombre;

    this.decir = function() {
        log.agregar("Usuario: " + this.nombre);
    };
}

let UsuarioDecorado = function(usuario, calle, ciudad) {
    this.usuario = usuario;
    this.nombre = usuario.nombre;
    this.calle = calle;
    this.ciudad = ciudad;

    this.decir = function() {
        log.agregar("Usuario decorado: " + this.nombre + ", " +
        this.calle + ", " + this.ciudad);
    };
}

// logging helper

let log = (function() {
    let log = "";

    return {
        agregar: function(msg) { log += msg + "\n"; },
        mostrar: function() { console.log(log); log = ""; }
    }
})();

function run() {

    let usuario = new Usuario("Kelly");
    usuario.decir();

    let decorado = new UsuarioDecorado(usuario, "Broadway", "New York");
    decorado.decir();

    log.mostrar();
}

run();