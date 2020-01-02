// Require
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================================='.red);
    console.log(`====tabla de ${ base }====`.red);
    console.log('===================================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`)
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: "${ base }" como base, no es un numero.\nIngrese un valor valido como base.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (error) => {

            if (error)
                reject(error)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.red);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}