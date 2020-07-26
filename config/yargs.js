const descripcion = {
    demand: true,
    type: 'string',
    alias: 'd',
    desc: 'Tareas por hacer'
}

const complet = {
    defeault: true,
    type: 'boolean',
    alias: 'c',
    desc: 'Marca como completado'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, complet })
    .command('borrar', 'Elimina una tarea almacenada', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}