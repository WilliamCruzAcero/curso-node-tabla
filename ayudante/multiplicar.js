const fs = require('fs');



crearArchivo = (base, listar= false) => {

    return new Promise((resolver, rechazar) => {

        try {

            let nombreArchivo = `Tabla-${base}.txt`;
            let archivo = '';
                                  
            if(listar) {
                archivo += ('=================\n')
                archivo += (`tabla del: ${base}\n`) 
                archivo += ('=================\n')
                
            }

            for (let i = 1; i <= 10; i++) {
                archivo += `${base} x ${i} = ${base * i}\n`;
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