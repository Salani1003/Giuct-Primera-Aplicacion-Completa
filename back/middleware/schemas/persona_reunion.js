const Joi = require("@hapi/joi");

const schemas = {
    create: Joi.object().keys({
        idPersona: Joi.number().integer().required(),
        idReunion: Joi.number().integer().required(),
    }),
};

module.exports = { schemas };