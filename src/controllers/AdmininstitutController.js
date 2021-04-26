const Admininstitut = require('../models/Admininstitut');
const Phone = require('../models/Phone');
const Adress = require('../models/Adress');
const Access = require('../models/Access');
const { validationResult } = require('express-validator');
const repository = require('../database/repositories/repository');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    async index(req,res) {
        try { 
        const admininstituts = await repository.getAll(Admininstitut, { include: [
            { association: 'admininstitutInstitut' },
            { association: 'admininstitutPhone' },
            { association: 'admininstitutAdress' },
        ]});
        if(!admininstituts) return res.status(400).json({error: 'Não foi possível encontrar os Admin institutos'});        
        return res.status(200).json(admininstituts);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os Admin institutos'}); 
            console.log(e);
        }
    },
    async show(req,res) {
        try { 
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const admininstituts = await Admininstitut.findByPk(req.params.id, { include: [
            { association: 'adminInstitut' },
            { association: 'admininstitutPhone' },
            { association: 'admininstitutAdress' },
        ]});
        if(!admininstituts) return res.status(400).json({error: 'Não foi possível encontrar o Admin generals'});        
        return res.status(200).json(admininstituts);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os Admin generals'}); 
            console.log(e);
        }
    },
    async store(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const { fk_institut, name, email, cpf, level } = req.body;
        const { residential_phone, celphone_1, celphone_2  } = req.body;
        const { zip_code, city, street, number, complement } = req.body;
        const admininstitutExists = await repository.getOne(Admininstitut,{where: { cpf }});
        if(!(admininstitutExists.length === 0 || AdmininstitutExists == null)) return res.send({error: "Admin instituto já existe"});       
        const id = uuidv4();
        const admininstitut = await repository.store(Admininstitut,{ id, fk_institut, name, email, cpf, level });
        if(!admininstitut) return res.status(400).json({error: 'Não foi possível cadastrar os admin instituto'});
        const fk_tables_id = id; 
        const phone = await repository.store(Phone,{ fk_tables_id, residential_phone, celphone_1, celphone_2  }); 
        const adress = await repository.store(Adress,{ fk_tables_id, zip_code, city, street, number, complement});
        //COLOCAR O ID DO AMDIN instituto Q CADASTROU ---- const access = await repository.store(Access, { fk_tables_id });         
        return res.json({admininstitut,phone,adress});
        }catch(e) {          
            console.log(e);
            return res.status(400).json({error: 'Não foi possível cadastrar admin instituto'});
        }
    },
    async update(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const boolean = await repository.update(Admininstitut,req.body);
        if(!boolean) return res.status(400).json({error: 'Não foi possível editar o Admin instituto'});
        return res.json(req.body);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível editar o Admin instituto'});
            console.log(e);
        }
    },
    async delete(req,res) {
        try {
        const admininstitut = await Admininstitut.destroy({where:{ id: req.body.id}});
        if(!admininstitut) return res.status(400).json({error: 'Não foi possível cadastrar os Admin instituto'});
        return res.json(Admininstitut);
        }catch(e) {
            return res.status(400).json(admininstituts);
            console.log(e);
        }
    }
}