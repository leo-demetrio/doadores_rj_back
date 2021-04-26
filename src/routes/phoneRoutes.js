const express = require('express');
const PhoneController = require('../controllers/PhoneController');
const router = express.Router();
//const { check } = require('express-validator');


router.post('/phones', PhoneController.store);

// router.post('/instituts',[
//     check('email').isEmail().withMessage('Email inválido!!'),
//     check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
//     //check('cnpj').isEmpty().withMessage('Cnpj não enviado!!'),
//     check('cnpj').isNumeric().withMessage('CNPJ em formato errado!!'),
//     //check('name').isEmpty().withMessage('Nome não enviado!!'),
//     check('name').isString().withMessage('Nome não enviado!!'),
//     check('name').isLength({min: 5}).withMessage('Nome muito pequeno!!'),
// ], InstitutController.store);
// router.delete('/instituts', InstitutController.delete);
// router.get('/instituts', InstitutController.index);
// router.get('/instituts/:id',[
//     check('id').isNumeric().withMessage('Não encontramos sua pesquisa'),
// ], InstitutController.show);
// router.put('/instituts',[
//     check('email').isEmail().withMessage('Email inválido!!'),
//     check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
//     //check('cnpj').isEmpty().withMessage('Cnpj não enviado!!'),
//     check('cnpj').isNumeric().withMessage('CNPJ em formato errado!!'),
//     //check('name').isEmpty().withMessage('Nome não enviado!!'),
//     check('name').isString().withMessage('Nome não enviado!!'),
//     check('name').isLength({min: 5}).withMessage('Nome muito pequeno!!'),
// ], InstitutController.update);

module.exports = router;