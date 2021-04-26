const express = require('express');
const RepresentativeController = require('../controllers/RepresentativeController');
const router = express.Router();
const { check } = require('express-validator');

router.post('/representatives',[
    check('email').isEmail().withMessage('Email inválido!!'),
    check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
    //check('cpf').isEmpty().withMessage('CPF não enviado!!'),
    check('cpf').isNumeric().withMessage('CPF em formato errado!!'),
    //check('name').isEmpty().withMessage('Nome não enviado!!'),
    check('name').isString().withMessage('Nome não enviado!!'),
    check('name').isLength({min: 5}).withMessage('Nome muito pequeno!!'),
], RepresentativeController.store);
router.delete('/representatives', RepresentativeController.delete);
router.get('/representatives', RepresentativeController.index);
router.get('/representatives/:id',[
    //check('id').isNumeric().withMessage('Não encontramos sua pesquisa'),
], RepresentativeController.show);
router.put('/representatives',[
    check('email').isEmail().withMessage('Email inválido!!'),
    check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
    //check('cpf').isEmpty().withMessage('CPF não enviado!!'),
    check('cpf').isNumeric().withMessage('CPF em formato errado!!'),
    //check('name').isEmpty().withMessage('Nome não enviado!!'),
    check('name').isString().withMessage('Nome não enviado!!'),
    check('name').isLength({min: 5}).withMessage('Nome muito pequeno!!'),
], RepresentativeController.update);

module.exports = router;