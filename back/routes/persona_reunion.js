const express = require("express");
const router = express.Router();
const service = require("../models/persona_reunion")
const { validateCreate } = require("../middleware/persona_reunion")

const all = (req, res) =>
    service
        .getAll()
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e))

const singlePersona = (req, res) =>
    service
        .getSinglePersona(req.params.id)
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e))

const singleReunion = (req, res) =>
    service
        .getSingleReunion(req.params.id)
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e))

const create = (req, res) =>
    service
        .create(req.body)
        .then((response) => res.json(response))
        .catch((error) => res.status(500).json(error))

const modify = (req, res) =>
    service
        .modify(req.params.id, req.body)
        .then((response) => res.json(response))
        .catch((error) => res.status(500).json(error))


router.get("/all", all);
router.get("/singlePersona/:id", singlePersona)
router.get("/singleReunion/:id", singleReunion)
router.put('/modify/:id', modify)
router.post('/create', validateCreate, create)
module.exports = router;