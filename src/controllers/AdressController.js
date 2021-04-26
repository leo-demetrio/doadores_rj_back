const Institut = require('../models/Institut');
const validapost = require('../validators/validatorteste');
const { validationResult } = require('express-validator');
const repository = require('../database/repositories/repository');


module.exports = {
    async index(req,res) {
        try { 
        //const instituts = await Institut.findAll();
        const instituts = await repository.getAll(Institut);
        if(!instituts) return res.status(400).json({error: 'Não foi possível encontrar os institutos'});        
        return res.status(200).json(instituts);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
            console.log(e);
        }
    },
    async show(req,res) {
        try { 
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const instituts = await Institut.findByPk(req.params.id);
        console.log(instituts)
        if(!instituts) return res.status(400).json({error: 'Não foi possível encontrar o instituto'});        
        return res.status(200).json(instituts);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
            console.log(e);
        }
    },
    async store(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const data = req.body;
        const institut = await repository.store(Institut,data);
        if(!institut) return res.status(400).json({error: 'Não foi possível cadastrar os instituto'});
        return res.json(institut);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível cadastrar'});
            console.log(e);
        }
    },
    async update(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const boolean = await repository.update(Institut,req.body);
        if(!boolean) return res.status(400).json({error: 'Não foi possível editar o instituto'});
        return res.json(req.body);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível editar o instituto'});
            console.log(e);
        }
    },
    async delete(req,res) {
        try {
        const institut = await Institut.destroy({where:{ id: req.body.id}});
        if(!institut) return res.status(400).json({error: 'Não foi possível cadastrar os instituto'});
        return res.json(institut);
        }catch(e) {
            return res.status(400).json(instituts);
            console.log(e);
        }
    }
}