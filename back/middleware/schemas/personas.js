const Joi = require("@hapi/joi");


const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().min(2).max(30).required(),
        apellido: Joi.string().optional(),
        dni: Joi.number().integer().required(),
        cuit: Joi.number().integer().required(),
        idTipoPersona: Joi.number().integer().required()
    }),

    modify: Joi.object().keys({
        nombre: Joi.string().min(2).max(30).required(),
        apellido: Joi.string().optional(),
        dni: Joi.number().integer().required(),
        cuit: Joi.number().integer().required(),
        idTipoPersona: Joi.number().integer().required()
    }),
};

module.exports = { schemas };