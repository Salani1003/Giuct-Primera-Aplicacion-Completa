const { schemas } = require("./schemas/reuniones");

const validateCreate = (req, res, next) => {
    //console.log(schemas)
    const { error, value } = schemas.create.validate(req.body);
    // console.log(error)
    error ? res.status(422).json({ error: error.details[0].message }) : next();
};

const validateModify = (req, res, next) => {
    const { error, value } = schemas.create.validate(req.body);
    error ? res.status(422).json({ error: error.details[0].message }) : next();
}

module.exports = { validateCreate, validateModify };
