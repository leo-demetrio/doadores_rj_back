const Representative = require('../models/Representative');
const Institut = require('../models/Institut');
const Phone = require('../models/Phone');
const Adress = require('../models/Adress');
const Access = require('../models/Access');
const { validationResult } = require('express-validator');
const repository = require('../database/repositories/repository');
const { v4: uuidv4 } = require('uuid');



module.exports = {
    async index(req,res) {
        try { 
        const Representatives = await repository.getAll(Representative, { include: [
            { association: 'ownerInstitut' },
            { association: 'phone' },
            { association: 'address' },
            { association: 'donors' },
        ]});
        if(!Representatives) return res.status(400).json({error: { message:'Não foi possível encontrar os Representativeos'}});        
        return res.status(200).json(Representatives);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os Representativeos'}); 
            console.log(e);
        }
    },
    async show(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const representative = await repository.getOne(Representative,{where: {number_social: req.params.id}});
        console.log(representative[0].fk_institut)
        const institut = await Institut.findByPk(representative[0].fk_institut);
        if(!representative) return res.status(400).json({error: 'Não foi possível encontrar o Representativeo'});        
        if(!institut) return res.status(400).json({error: 'Não foi possível encontrar o Representativeo'});        
        let data = {};
        data.institut = institut;
        data.representative = representative;
        console.log(representative)
        console.log(institut)
        return res.status(200).json(data);
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível encontrar os Representativeos'}); 
           
        }
    },
    async store(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const { fk_institut, name, email, cpf, number_social } = req.body;
        const { residential_phone, celphone_1, celphone_2  } = req.body;
        const { zip_code, city, street, number, complement } = req.body;
        const representativeExists = await repository.getOne(Representative,{where: { cpf }});
        if(!(representativeExists.length === 0 || representativeExists == null)) return res.send({error: "Representante já existe"});       
        const representative = await repository.store(Representative,{ fk_institut, name, email, cpf, number_social });
        if(!representative) return res.status(400).json({error: 'Não foi possível cadastrar os Representante'});
        const fk_tables_id = representative.id; 
        const phone = await repository.store(Phone,{ fk_tables_id, residential_phone, celphone_1, celphone_2  }); 
        const adress = await repository.store(Adress,{ fk_tables_id, zip_code, city, street, number, complement});
        //const access = await repository.store(Access, { fk_tables_id });         
        return res.json({representative,phone,adress});
        }catch(e) {          
            console.log(e);
            return res.status(400).json({error: 'Não foi possível cadastrar representante'});
        }
    },
    async update(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const boolean = await repository.update(Representative,req.body);
        if(!boolean) return res.status(400).json({error: 'Não foi possível editar o Representativeo'});
        return res.json(req.body);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível editar o Representativeo'});
            console.log(e);
        }
    },
    async delete(req,res) {
        try {
        const representative = await Representative.destroy({where:{ id: req.body.id}});
        if(!representative) return res.status(400).json({error: 'Não foi possível cadastrar os Representativeo'});
        return res.json(representative);
        }catch(e) {
            return res.status(400).json(representatives);
            console.log(e);
        }
    }
}