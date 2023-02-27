const { crearArchivo } = require('./ayudante/multiplicar'); 
const argv = require('./config/yargs');

console.clear();

console.log( argv );

crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );