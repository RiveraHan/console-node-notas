// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


const comando = argv._[0];
const listado = porHacer.getListado();

switch (comando) {

    case 'crear':
        const tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        console.log('============Todas las tareas============\n'.yellow);

        for (let tarea of listado) {
            console.log('========================================\n'.yellow);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.complet);
            console.log('================================='.yellow);

        }
        break;
    case 'realizadas':

        console.log('============Realizadas============\n'.green);

        for (let tarea of listado) {
            if (tarea.complet) {
                console.log('==================================\n'.green);
                console.log(tarea.descripcion);
                console.log('Estado:', tarea.complet);
                console.log('================================='.green);
            }

        }
        break;

    case 'pendientes':

        console.log('============Por Hacer============\n'.red);

        for (let tarea of listado) {
            if (!tarea.complet) {
                console.log('================================='.red);
                console.log(tarea.descripcion);
                console.log('Estado:', tarea.complet);
                console.log('================================='.red);
            }

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