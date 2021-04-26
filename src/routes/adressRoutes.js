const express = require('express');
const RepresentativeController = require('../controllers/RepresentativeController');
const router = express.Router();
const { check } = require('express-validator');

router.post('/adresses',[ 
    check('zip_code').isString().withMessage('zip_code não enviado!!'),
    check('city').isString().withMessage('city não enviado!!'),
    check('street').isString().withMessage('street não enviado!!'),
    check('number').isNumeric().withMessage('number não enviado!!'),
    check('complement').isString().withMessage('complement não enviado!!'),    
], RepresentativeController.store);
router.delete('/adresses', RepresentativeController.delete);
router.get('/adresses', RepresentativeController.index);
router.get('/adresses/:id',[
    check('id').isNumeric().withMessage('Não encontramos sua pesquisa'),
], RepresentativeController.show);
router.put('/adresses',[
    check('zip_code').isString().withMessage('zip_code não enviado!!'),
    check('city').isString().withMessage('city não enviado!!'),
    check('street').isString().withMessage('street não enviado!!'),
    check('number').isNumeric().withMessage('number não enviado!!'),
    check('complement').isString().withMessage('complement não enviado!!'),    
], RepresentativeController.update);

module.exports = router;
