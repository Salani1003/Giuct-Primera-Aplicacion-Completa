const bd = require("../utils/bd");

const getAll = () =>
    bd("reuniones as R")
        .join("tipo_reunion as TR", "TR.id", "R.idTipoReunion")
        .where({ "R.habilitado": 1 })
        .select("R.id", "nombre", "titulo", "fecha", "ciudad", "pais", "TR.tipo");

const getSingle = (id) =>
    bd('reuniones as R')
        .join("tipo_reunion as TR", "TR.id", "R.idTipoReunion")
        .where({ "R.id": id, "R.habilitado": 1 })
        .select("nombre", "titulo", "fecha", "ciudad", "pais", "TR.tipo");

const create = (obj) => bd("reuniones").insert(obj);

const modify = (id, obj) => bd("reuniones").where({ id }).update(obj);

const eliminar = (id) => bd('reuniones').where({ id }).update({ habilitado: 0, eliminado: 1 })

module.exports = { getAll, getSingle, create, modify, eliminar };
