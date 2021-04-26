const express = require('express');
const DonorController = require('../controllers/DonorController');
const router = express.Router();
const { check } = require('express-validator');


router.post('/donors',[
    //check('email').isEmail().withMessage('Email inválido!!'),
    //check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
    // check('name').isLength({min: 2}).withMessage('Nome muito pequeno!!'),
   check('nameDonor').isString().withMessage('Nome não enviado!!'),
    check('valueDonation').isNumeric().withMessage('Valor incorreto!!'),
], DonorController.store);
router.delete('/donors', DonorController.delete);
router.get('/donors', DonorController.index);
router.get('/donors/:id',[
    check('id').isNumeric().withMessage('Não encontramos sua pesquisa'),
], DonorController.show);
router.put('/donors',[
    check('email').isEmail().withMessage('Email inválido!!'),
    check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
    check('name').isString().withMessage('Nome não enviado!!'),
    check('name').isLength({min: 2}).withMessage('Nome muito pequeno!!'),
], DonorController.update);

module.exports = router;