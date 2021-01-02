// requireds
// const fs = require('fs');
// const fs = require('express'); paquetes no nativos de node
// const fs = require('./nom_archivo'); archivos que nosotros mismos hemos hecho
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // con esto llama a la función que está en la carpeta multiplicar
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//con estas líneas lo que hacemos es mandar la base escribiéndola desde la consola así
// node app.js -b=3

// console.log('limite', argv.limite);
// let parametro = argv[2]
// let base = parametro.split('=')[1]