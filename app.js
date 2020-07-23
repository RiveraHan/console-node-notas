// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


const comando = argv._[0];

switch (comando) {

    case 'crear':
        const tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('============Por Hacer============'.yellow);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.complet);
            console.log('================================='.yellow);

        }
        break;

    case 'actualizar':
        const actualizado = porHacer.actualizar(argv.descripcion, argv.complet);
        console.log(actualizado);
        break;

    case 'borrar':
        const borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('No es un comando correcto');
        break;

}