const express = require("express");
const router = express.Router();
const multer =require("multer");
const upload = multer({storage:multer.memoryStorage()});

const {body} = require("express-validator");

const validations = [
    body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({min:2})
    .withMessage("Tiene que ser 2 caracteres")
    .bail(),
    body("codigo").not().isEmpty().withMessage("el codigo es obligatorio"),
    body("precio").not().isEmpty().withMessage("el precio es obligatorio"),
];

const controller = require('../../controllers/admin/productosController');

// CRUD = Ceate, Read , Update, Delete
router.get('/', controller.index);

router.get('/create', controller.create);

router.post("/", upload.single("imagen"), validations, controller.store);

router.get('/:id/edit',controller.edit);

router.put('/:id', upload.single("imagen"), validations,controller.update);

router.delete('/:id',controller.destroy);


module.exports= router;