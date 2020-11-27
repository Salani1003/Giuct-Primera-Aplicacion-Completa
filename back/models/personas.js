const bd = require("../utils/bd");

const getAll = () =>
    bd("personas as p")
        .join("tipo_persona as tp", "p.idTipoPersona", "tp.id")
        .where({ "p.habilitado": 1 })
        .select("p.id", "nombre", "apellido", "dni", "cuit", "tp.tipo").orderBy("p.dni", "asc");
const getSingle = (id) =>
    bd("personas as p")
        .join("tipo_persona as tp", "p.idTipoPersona", "tp.id")
        .where({ "p.id": id, "p.habilitado": 1 })
        .select("p.id", "p.nombre", "p.apellido", "p.dni", "cuit", "tp.tipo");
const getSingleByDNI = (dni) =>
    bd("personas as p")
        .join("tipo_persona as tp", "p.idTipoPersona", "tp.id")
        .where({ "p.dni": dni, "p.habilitado": 1 })
        .select("p.id", "p.nombre", "p.apellido", "p.dni", "cuit", "tp.tipo");

const create = (obj) => bd("personas").insert(obj);
const modify = (id, obj) => bd("personas").where({ id }).update(obj);
const eliminar = (id) =>
    bd("personas").where({ id }).update({ habilitado: 0, eliminado: 1 });

module.exports = { getAll, getSingle, create, modify, eliminar, getSingleByDNI };
