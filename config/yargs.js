const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    // el comando sirve para mandar estos parámetros por la consola, la base es un parámetro obligatorio, mientras que el límite ya tiene un valor por defecto, pero también se le puede cambiar
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    // al poner node app.js listar --help mostrará las características de este programa
    .help()
    .argv;

module.exports = {
    argv
}