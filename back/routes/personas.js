const express = require("express");
const router = express.Router();
const service = require("../models/personas")
const { validateCreate, validateModify } = require('./../middleware/personas')
const all = (req, res) =>
    service
        .getAll()
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e))

const single = (req, res) =>
    service
        .getSingle(req.params.id)
        .then(([response]) => res.json(response))
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

const eliminar = (req, res) =>
    service
        .eliminar(req.params.id)
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e))


const singleDNI = (req, res) =>
    service
        .getSingleByDNI(req.params.dni)
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e))

router.get("/all", all);
router.get("/single/:id", single)
router.get("/singleDNI/:dni", singleDNI)
router.put('/eliminar/:id', eliminar)
router.put('/modify/:id', validateModify, modify)
router.post('/create', validateCreate, create)
module.exports = router;