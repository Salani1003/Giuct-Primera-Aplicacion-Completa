const Joi = require("@hapi/joi");


const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().min(2).max(30).required(),
        titulo: Joi.string().required(),
        fecha: Joi.date().optional(),
        ciudad: Joi.string().required(),
        pais: Joi.string().required(),
        idTipoReunion: Joi.number().integer().required()
    }),

    modify: Joi.object().keys({
        nombre: Joi.string().min(2).max(30).required(),
        titulo: Joi.string().required(),
        fecha: Joi.date().optional(),
        ciudad: Joi.string().required(),
        pais: Joi.string().required(),
        idTipoReunion: Joi.number().integer().required()
    }),
};

module.exports = { schemas };