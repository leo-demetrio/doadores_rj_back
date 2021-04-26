const Phone = require('../models/Phone');
//const validapost = require('../validators/validatorteste');
const { validationResult } = require('express-validator');
const repository = require('../database/repositories/repository');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    // async index(req,res) {
    //     try {
    //     const phones = await repository.getAll(phone);
    //     if(!phones) return res.status(400).json({error: 'Não foi possível encontrar os institutos'});        
    //     return res.status(200).json(phones);
    //     }catch(e) {
    //         return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
    //         console.log(e);
    //     }
    // },
    // async show(req,res) {
    //     try { 
    //     const errors = validationResult(req);          
    //     if(!errors.isEmpty()) return res.status(400).json(errors);
    //     const phones = await phone.findByPk(req.params.id);
    //     console.log(phones)
    //     if(!phones) return res.status(400).json({error: 'Não foi possível encontrar o instituto'});        
    //     return res.status(200).json(phones);
    //     }catch(e) {
    //         return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
    //         console.log(e);
    //     }
    // },
    async store(req,res) {
        try {
        //const errors = validationResult(req); 
        req.body.id = uuidv4();        
        req.body.fk_tables = req.body.id; 
        // return console.log(req.body);       
        //if(!errors.isEmpty()) return res.status(400).json(errors);
        const data = req.body;
        const phone = await repository.store(Phone,data);
        console.log(phone);
        if(!phone) return res.status(400).json({error: 'Não foi possível cadastrar os instituto'});
        return res.json(phone);
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível cadastrar'});
            
        }
    },
    // async update(req,res) {
    //     try {
    //     const errors = validationResult(req);          
    //     if(!errors.isEmpty()) return res.status(400).json(errors);
    //     const boolean = await repository.update(phone,req.body);
    //     if(!boolean) return res.status(400).json({error: 'Não foi possível editar o instituto'});
    //     return res.json(req.body);
    //     }catch(e) {
    //         return res.status(400).json({error: 'Não foi possível editar o instituto'});
    //         console.log(e);
    //     }
    // },
    // async delete(req,res) {
    //     try {
    //     const phone = await phone.destroy({where:{ id: req.body.id}});
    //     if(!phone) return res.status(400).json({error: 'Não foi possível cadastrar os instituto'});
    //     return res.json(phone);
    //     }catch(e) {
    //         return res.status(400).json(phone);
    //         console.log(e);
    //     }
    // }
}