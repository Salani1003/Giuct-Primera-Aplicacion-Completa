const { schemas } = require("./schemas/persona_reunion");

const validateCreate = (req, res, next) => {
    //console.log(schemas)
    const { error, value } = schemas.create.validate(req.body);
    // console.log(error)
    error ? res.status(422).json({ error: error.details[0].message }) : next();
};

module.exports = { validateCreate };
