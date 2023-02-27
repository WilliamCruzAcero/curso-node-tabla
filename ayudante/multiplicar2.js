const fs = require('fs');



crearArchivo = (base) => {

    return new Promise((resolver, rechazar) => {

        console.log('=================')
        console.log(`tabala del: ${elejirBase}`)
        console.log('=================')
    
        let salida = '';
    
        for( let i = 1; i <=10; i++ ) {
            salida += `${ elejirBase } x ${ i } = ${ elejirBase * i }\n`;
        }
    
        console.log(salida)
    
        fs.writeFileSync( `Tabla-${elejirBase}.txt`, salida);
    
        console.log(`Tabla-${elejirBase}.txt creada`)

    })

    
}

module.exports = {
    crearArchivo
}


/* console.log('=================')
    console.log(`tabala del: ${elejirBase}`)
    console.log('=================')

    let salida = '';

    for( let i = 1; i <=10; i++ ) {
        salida += `${ elejirBase } x ${ i } = ${ elejirBase * i }\n`;
    }

    console.log(salida)

    fs.writeFileSync( `Tabla-${elejirBase}.txt`, salida);

    console.log(`Tabla-${elejirBase}.txt creada`) */