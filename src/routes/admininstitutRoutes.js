const express = require('express');
const AdmininstitutController = require('../controllers/AdmininstitutController');
const router = express.Router();
const { check } = require('express-validator');

router.post('/admininstituts',[
    check('email').isEmail().withMessage('Email inválido!!'),
    check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
    //check('cpf').isEmpty().withMessage('CPF não enviado!!'),
    check('cpf').isNumeric().withMessage('CPF em formato errado!!'),
    check('level').isNumeric().withMessage('Nível em formato errado!!'),
    //check('name').isEmpty().withMessage('Nome não enviado!!'),
    check('name').isString().withMessage('Nome não enviado!!'),
    check('name').isLength({min: 5}).withMessage('Nome muito pequeno!!'),
], AdmininstitutController.store);
router.delete('/admininstituts', AdmininstitutController.delete);
router.get('/admininstituts', AdmininstitutController.index);
router.get('/admininstituts/:id',[
    check('id').isNumeric().withMessage('Não encontramos sua pesquisa'),
], AdmininstitutController.show);
router.put('/admininstituts',[
    check('email').isEmail().withMessage('Email inválido!!'),
    check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
    //check('cpf').isEmpty().withMessage('CPF não enviado!!'),
    check('cpf').isNumeric().withMessage('CPF em formato errado!!'),
    check('level').isNumeric().withMessage('Nível em formato errado!!'),
    //check('name').isEmpty().withMessage('Nome não enviado!!'),
    check('name').isString().withMessage('Nome não enviado!!'),
    check('name').isLength({min: 5}).withMessage('Nome muito pequeno!!'),
], AdmininstitutController.update);

module.exports = router;