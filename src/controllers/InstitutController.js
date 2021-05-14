const { Op } = require("sequelize");
const Institut = require('../models/Institut');
const Representative = require('../models/Representative');
const Phone = require('../models/Phone');
const Adress = require('../models/Adress');
const Access = require('../models/Access');
const Donor = require('../models/Donor');
const { validationResult } = require('express-validator');
const repository = require('../database/repositories/repository');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    async index(req,res) {
        try {  
        // const instituts = await repository.getAll(Institut,{ include: [
        //     { association: 'phone' },
        //     { association: 'address' },
        //     { association: 'donors' },
        //     { association: 'representatives' },
        //     { association: 'adminInstitut' },
        // ]});   
        const instituts = await Institut.findAll(); 
        return res.status(200).json(instituts);   
        if(!instituts) return res.status(400).json({error: 'Não foi possível encontrar os institutos no banco'});        
        return res.status(200).json(instituts);
        }catch(e) {
            console.log(e + "++++ controller Institut");
            return res.status(400).json({error: {message: 'Não foi possível encontrar os institutos corretos'}}); 
           
        }
    },
    async show(req,res) {
        try { 
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        //mudar para repository
        const instituts = await Institut.findByPk(req.params.id, { include: [
            { association: 'phone' },
            { association: 'address' },
            { association: 'donors' },
            { association: 'representatives' },
            { association: 'adminInstitut' },
        ]});
        if(!instituts) return res.status(400).json({error: 'Não foi possível encontrar o instituto'});        
        return res.status(200).json(instituts);
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
            
        }
    },
    async search(req,res) {
        try {
        //return console.log(req.body) 
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);      
        const instituts = await repository.getAllSearch(Institut,{where: { name:{[Op.like]: '%'+req.body.value+'%'}}});
        // return console.log(instituts);
        if(!instituts) return res.status(400).json({error: 'Não foi possível encontrar o instituto'}); 
        return res.status(200).json(instituts);
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
            
        }
    },
    async donation(req,res) {
        try { 
        // return console.log(req.body.value);
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        req.body.fk_institut = '8888888';
        req.body.fk_representative = '8888888';
        req.body.name = 'Iolanda';
        const donor = await repository.store(Donor,req.body);
        // return console.log(instituts);
        if(!donor) return res.status(400).json({error: 'Não foi possível encontrar o instituto'});        
        return res.status(200).json(donor);
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
            
        }
    },
    async store(req,res) {
        try { 
        const errors = validationResult(req);                 
        if(!errors.isEmpty()) return res.status(400).json(errors);        
        const { name, email, cnpj } = req.body;
        const { residential_phone, celphone_1, celphone_2  } = req.body;
        const { zip_code, city, street, number, complement } = req.body;
        const institutExists = await repository.getOne(Institut,{where: { cnpj }});
        if(!(institutExists.length === 0 || institutExists == null)) return res.send({error: "Insituto já existe"});
        var id = uuidv4();      
        const fk_tables_id = id;
        const institut = await repository.store(Institut,{ id, name, email, cnpj });
        if(!institut) return res.status(400).json({error: 'Não foi possível cadastrar os instituto'});
        const phone = await repository.store(Phone,{ fk_tables_id, residential_phone, celphone_1, celphone_2  }); 
        const adress = await repository.store(Adress,{ fk_tables_id, zip_code, city, street, number, complement});
        //const access = await repository.store(Access, { fk_tables_id });         
        return res.json({institut,phone,adress});
        }catch(e) {
        console.log(e);
        return res.status(400).json({error: 'Não foi possível cadastrar'});             
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