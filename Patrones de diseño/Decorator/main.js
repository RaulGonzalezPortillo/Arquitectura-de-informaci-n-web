let Usuario = function(nombre) {
    this.nombre = nombre;

    this.decir = function() {
        log.agregar("Usuario: " + this.nombre);
    };
}

let UsuarioDecorado = function(usuario, nacimiento) {
    this.usuario = usuario;
    this.nombre = usuario.nombre;
    this.nacimiento = nacimiento;
    let fecha = new Date();
    let edad = (fecha.getFullYear() - nacimiento);

    this.decir = function() {
        log.agregar("Usuario: " + this.nombre + ", " + this.nacimiento + ", " + edad + " años");
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

    let decorado = new UsuarioDecorado (usuario, 1985);
    decorado.decir();

    log.mostrar();
}

run();