const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    const data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, err => {
        if (err) throw rejects;
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }

}

const crear = descripcion => {

    cargarDB();

    let porHacer = {
        descripcion,
        complet: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, complet) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].complet = complet;

        guardarDB();
        return true;
    } else { return false }
}

const borrar = descripcion => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {

        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = { crear, getListado, actualizar, borrar };