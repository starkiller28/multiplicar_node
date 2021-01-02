//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log(`El valor de base introducido '${base}' no es un número `);
    } else if (!Number(limite)) {
        console.log(`El valor del limite introducido '${limite}' no es un número `);
    } else {
        console.log('==================')
        console.log(`tabla del ${base}`.green)
        console.log('==================')
        for (let i = 0; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor untroducido '${base}' no es un número `);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base}*${i}=${base * i}\n`)
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.green);
        });

    })
}

//para poder exportar un módulo
module.exports = {
    crearArchivo,
    listarTabla
}