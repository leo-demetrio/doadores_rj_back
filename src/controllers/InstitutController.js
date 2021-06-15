const { validationResult } = require('express-validator');
const institutRepository = require('../database/repositories/institutRepository');
const { v4: uuidv4 } = require('uuid');
const InstitutClass = require('../models/typeValidations/InstitutTypeValidadion');


module.exports = {
    async index(req,res) {
        try {  
            const instituts = await institutRepository.getAll();    
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
            const instituts = await institutRepository.getOne(req.params.id);
            if(!instituts) return res.status(404).json({error: 'Não foi possível encontrar o instituto'});        
            return res.status(200).json(instituts);
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'});             
        }
    },
    async search(req,res) {
        try {
            const errors = validationResult(req);          
            if(!errors.isEmpty()) return res.status(400).json(errors);      
            const instituts = await institutRepository.getAllSearch(req.body.value);
            if(!instituts) return res.status(400).json({error: 'Não foi possível encontrar o instituto'}); 
            return res.status(200).json(instituts);
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'});             
        }
    },
    // async donation(req,res) {
    //     try { 
    //     // return console.log(req.body.value);
    //     const errors = validationResult(req);          
    //     if(!errors.isEmpty()) return res.status(400).json(errors);
    //     req.body.fk_institut = '8888888';
    //     req.body.fk_representative = '8888888';
    //     req.body.name = 'Iolanda';
    //     const donor = await repository.store(Donor,req.body);
    //     // return console.log(instituts);
    //     if(!donor) return res.status(400).json({error: 'Não foi possível encontrar o instituto'});        
    //     return res.status(200).json(donor);
    //     }catch(e) {
    //         console.log(e);
    //         return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
            
    //     }
    // },
    async store(req,res) {
        try { 
            const errors = validationResult(req);                 
            if(!errors.isEmpty()) return res.status(400).json(errors);        
            let Institut = InstitutClass.createObjectInstitut(req.body);
            const institutExists = await institutRepository.getOne(Institut);
            if(!(institutExists.length === 0 || institutExists == null)) return res.send({error: "Insituto já existe"});
            Institut.id = uuidv4();      
            Institut.fk_tables_id = Institut.id;
            const institut = await institutRepository.registerInstitut(Institut);
            if(!institut) return res.status(400).json({error: 'Não foi possível cadastrar os instituto'});     
            return res.json({institut});
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível cadastrar'});             
        }
    },
    async update(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const boolean = await institutRepository.update(req.body);
        if(!boolean) return res.status(400).json({error: 'Não foi possível editar o instituto'});
        return res.json(req.body);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível editar o instituto'});
            console.log(e);
        }
    },
    async delete(req,res) {
        try { 
            const institut = await institutRepository.destroy(req.body.id);
            if(!institut) return res.status(400).json({error: 'Não foi possível cadastrar os instituto'});
            return res.json({message: 'Institutto removido com sucesso'});
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível deletar o instituto'});
        }
    }
}