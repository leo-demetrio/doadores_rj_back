const Donor = require('../models/Donor');
const { validationResult } = require('express-validator');
const repository = require('../database/repositories/repository');



module.exports = {
    async index(req,res) {
        try {
        const donors = await repository.getAll(Donor);
        if(!donors) return res.status(400).json({error: 'Não foi possível encontrar os institutos'});        
        return res.status(200).json(donors);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
            console.log(e);
        }
    },
    async show(req,res) {
        try { 
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const donors = await Donor.findByPk(req.params.id);
        console.log(donors)
        if(!donors) return res.status(400).json({error: 'Não foi possível encontrar o instituto'});        
        return res.status(200).json(donors);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível encontrar os institutos'}); 
            console.log(e);
        }
    },
    async store(req,res) {
        try { //return console.log(req.body)
        let data = {};
        data.fk_institut = req.body.institutId;
        data.fk_representative = req.body.representativeId;
        data.name = req.body.nameDonor;
        data.email = req.body.emailDonor;
        data.value = req.body.valueDonation;
        const errors = validationResult(req);       
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const donor = await repository.store(Donor,data);
        if(!donor) return res.status(400).json({error: 'Não foi possível cadastrar doação'});
        return res.json(donor);
        }catch(e) {
            console.log(e);
            return res.status(400).json({error: 'Não foi possível cadastrar'});
            
        }
    },
    async update(req,res) {
        try {
        const errors = validationResult(req);          
        if(!errors.isEmpty()) return res.status(400).json(errors);
        const boolean = await repository.update(Donor,req.body);
        if(!boolean) return res.status(400).json({error: 'Não foi possível editar o instituto'});
        return res.json(req.body);
        }catch(e) {
            return res.status(400).json({error: 'Não foi possível editar o instituto'});
            console.log(e);
        }
    },
    async delete(req,res) {
        try {
        const donor = await Donor.destroy({where:{ id: req.body.id}});
        if(!donor) return res.status(400).json({error: 'Não foi possível cadastrar os instituto'});
        return res.json(donor);
        }catch(e) {
            return res.status(400).json(donor);
            console.log(e);
        }
    }
}