const express = require("express");
const router = express.Router();


const {body} = require("express-validator");

// const validations = [
//     body("nombre")
//     .not()
//     .isEmpty()
//     .withMessage("El nombre es obligatorio")
//     .bail()
//     .isLength({min:2})
//     .withMessage("Tiene que ser 2 caracteres")
//     .bail()
//     .isAlpha().withMessage('Solo puede tener letras'),
//     body("precio").not().isEmpty().withMessage("el nombre es obligatorio"),
// ];

const controller = require('../controllers/shopController');

// CRUD = Ceate, Read , Update, Delete
router.get('/', controller.index);

router.get('/verItem', controller.verItem);

// router.get('/create', controller.create);

// router.post("/", upload.single("imagen"), validations, controller.store);

// router.get('/:id/edit',controller.edit);

// router.put('/:id', upload.single("imagen"), validations,controller.update);

// router.delete('/:id',controller.destroy);


module.exports= router;