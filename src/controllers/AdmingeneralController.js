const Admingeneral = require('../models/Admingeneral');
const Phone = require('../models/Phone');
const Adress = require('../models/Adress');
const Access = require('../models/Access');
const { validationResult } = require('express-validator');
const repository = require('../database/repositories/repository');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    async index(req,res) {
        try { 
        const admingenerals = await repository.getAll(Admingeneral, { include: [
            { association: 'adminPhone' },
            { association: 'adminAdress' },
            { association: 'adminAccess' },
        ]});
        if(!admingenerals) return res.status(400).json({error: 'Não foi possível encontrar os Admingeneralos'});        
        return res.status(200).json(admingenerals);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os Admingeneralos'}); 
            console.log(e);
        }
    },
    async show(req,res) {
        try { 
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const admingenerals = await Admingeneral.findByPk(req.params.id, { include: [
            { association: 'adminPhone' },
            { association: 'adminAdress' },
            { association: 'adminAccess' }
        ]});
        console.log(admingenerals)
        if(!Admingenerals) return res.status(400).json({error: 'Não foi possível encontrar o Admin generals'});        
        return res.status(200).json(admingenerals);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os Admin generals'}); 
            console.log(e);
        }
    },
    async store(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const { name, email, cpf, level } = req.body;
        const { residential_phone, celphone_1, celphone_2  } = req.body;
        const { zip_code, city, street, number, complement } = req.body;
        const admingeneralExists = await repository.getOne(Admingeneral,{where: { cpf }});
        if(!(admingeneralExists.length === 0 || admingeneralExists == null)) return res.send({error: "Admin geral já existe"});       
        const id = uuidv4();
        const admingeneral = await repository.store(Admingeneral,{ id, name, email, cpf, level });
        if(!admingeneral) return res.status(400).json({error: 'Não foi possível cadastrar os admin geral'});
        const fk_tables_id = id; 
        const phone = await repository.store(Phone,{ fk_tables_id, residential_phone, celphone_1, celphone_2  }); 
        const adress = await repository.store(Adress,{ fk_tables_id, zip_code, city, street, number, complement});
        //COLOCAR O ID DO AMDIN GERAL Q CADASTROU ---- const access = await repository.store(Access, { fk_tables_id });         
        return res.json({admingeneral,phone,adress});
        }catch(e) {          
            console.log(e);
            return res.status(400).json({error: 'Não foi possível cadastrar admin geral'});
        }
    },
    async update(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const boolean = await repository.update(Admingeneral,req.body);
        if(!boolean) return res.status(400).json({error: 'Não foi possível editar o Admin geral'});
        return res.json(req.body);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível editar o Admin geral'});
            console.log(e);
        }
    },
    async delete(req,res) {
        try {
        const admingeneral = await Admingeneral.destroy({where:{ id: req.body.id}});
        if(!admingeneral) return res.status(400).json({error: 'Não foi possível cadastrar os Admin geral'});
        return res.json(admingeneral);
        }catch(e) {
            return res.status(400).json(admingenerals);
            console.log(e);
        }
    }
}