const fs = require('fs');
const colors = require('colors');
const { argv } = require('process');

crearArchivo = (base, listar= false, hasta =10) => {

    return new Promise((resolver, rechazar) => {

        try {

            let nombreArchivo = `./salida/Tabla-${base}.txt`;
            let archivo = '';
            let consola = '';
            
                                  
            if(listar) {
                               
                consola += ('=================\n'.green)
                consola += (`tabla del:'${base}\n`.blue);
                consola += ('=================\n'.green)
                
                console.log(consola) 
            }

            for (let i = 1; i <= hasta; i++) {
                archivo += `${base} x ${i} = ${base * i}\n`;
                consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`;
            }

            if(listar) {
                console.log(archivo)
            }
            fs.writeFile(nombreArchivo, archivo, () => {
                resolver(nombreArchivo);
            });

        } catch (error) {
            rechazar(error)
        }
    })
}

module.exports = {
    crearArchivo
}