const express = require('express');
const AdmingeneralController = require('../controllers/AdmingeneralController');
const router = express.Router();
const { check } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

router.post('/admingenerals',[
    check('email').isEmail().withMessage('Email inválido!!'),
    check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
    //check('cpf').isEmpty().withMessage('CPF não enviado!!'),
    check('cpf').isNumeric().withMessage('CPF em formato errado!!'),
    check('level').isNumeric().withMessage('Nível em formato errado!!'),
    //check('name').isEmpty().withMessage('Nome não enviado!!'),
    check('name').isString().withMessage('Nome não enviado!!'),
    check('name').isLength({min: 5}).withMessage('Nome muito pequeno!!'),
], AdmingeneralController.store);
router.delete('/admingenerals', AdmingeneralController.delete);
router.get('/admingenerals', AdmingeneralController.index);
router.get('/admingenerals/:id',[
    check('id').isNumeric().withMessage('Não encontramos sua pesquisa'),
], AdmingeneralController.show);
router.put('/admingenerals',[
    check('email').isEmail().withMessage('Email inválido!!'),
    check('email').isLength({min: 0}).withMessage('Email não enviado!!'),
    //check('cpf').isEmpty().withMessage('CPF não enviado!!'),
    check('cpf').isNumeric().withMessage('CPF em formato errado!!'),
    check('level').isNumeric().withMessage('Nível em formato errado!!'),
    //check('name').isEmpty().withMessage('Nome não enviado!!'),
    check('name').isString().withMessage('Nome não enviado!!'),
    check('name').isLength({min: 5}).withMessage('Nome muito pequeno!!'),
], AdmingeneralController.update);

module.exports = router;