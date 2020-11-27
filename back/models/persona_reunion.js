const bd = require("../utils/bd");

const getAll = () =>
    bd("persona_reunion as PR")
        .join("reuniones as R", "R.id", "PR.idReunion")
        .join("personas as P", "P.id", "PR.idPersona")
        .join("tipo_persona as tp", "tp.id", "P.idTipoPersona")
        .join("tipo_reunion as TR", "TR.id", "R.idTipoReunion")
        .select(
            "P.nombre as nombrePersona",
            "P.apellido",
            "P.dni",
            "tp.tipo",
            "R.nombre as nombreReunion",
            "R.titulo",
            "TR.tipo",
        );

const getSinglePersona = (id) =>
    bd("persona_reunion as PR")
        .join("reuniones as R", "R.id", "PR.idReunion")
        .join("personas as P", "P.id", "PR.idPersona")
        .join("tipo_persona as tp", "tp.id", "P.idTipoPersona")
        .join("tipo_reunion as TR", "TR.id", "R.idTipoReunion")
        .where("P.id", id)
        .select(
            "P.nombre as nombrePersona",
            "P.apellido",
            "P.dni",
            "tp.tipo",
            "R.nombre as nombreReunion",
            "R.titulo",
            "TR.tipo",
        );
const getSingleReunion = (id) =>
    bd("persona_reunion as PR")
        .join("reuniones as R", "R.id", "PR.idReunion")
        .join("personas as P", "P.id", "PR.idPersona")
        .join("tipo_reunion as TR", "TR.id", "R.idTipoReunion")
        .where("R.id", id)
        .select(
            "P.nombre as nombrePersona",
            "P.apellido",
            "P.dni",
            "R.nombre as nombreReunion",
            "R.titulo",
            "TR.tipo",
        );

const create = (obj) => bd("persona_reunion").insert(obj);

const modify = (id, obj) => bd("persona_reunion").where({ id }).update(obj);

//const eliminar = (id) => bd('reuniones').where({ id }).update({ habilitado: 0, eliminado: 1 })

module.exports = { getAll, getSinglePersona, getSingleReunion, create, modify };
