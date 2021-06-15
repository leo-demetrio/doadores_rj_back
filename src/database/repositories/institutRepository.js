const Institut = require('../../models/Institut');
const Phone = require('../../models/Phone');
const Adress = require('../../models/Adress');
const Access = require('../../models/Access');
const { Op } = require("sequelize");


module.exports.registerInstitut = async (data) => {
    try{
        intitut = await Institut.create(data);
        phone = await Phone.create(data);
        adress = await Adress.create(data);
        acess = await Access.create(data);
        return data;
    }catch(e){
        console.log(e);
        return false;
    }
    

}
module.exports.getAll = async (association) => {
    try{
        let association = [
            { association: 'phone' },
            { association: 'address' },
            { association: 'donors' },
            { association: 'representatives' },
            { association: 'adminInstitut' },
        ];
       
        let result = await Institut.findAll({ include: association });
        return result;
    }catch(e) {
        console.log(e);
    }
}
module.exports.getAllSearch = async (word) => {
    try{
        const instituts = await Institut.findAll({where: { name:{[Op.like]: '%'+word+'%'}}});
        return instituts;
    }catch(e) {
        console.log(e);
    }
}


module.exports.getOne = async (id) => {
    try{
        const instituts = await Institut.findByPk(id, { include: [
            { association: 'phone' },
            { association: 'address' },
            { association: 'donors' },
            { association: 'representatives' },
            { association: 'adminInstitut' },
        ]});
        return instituts;
    }catch(e) {
        console.log(e);
    }
}
module.exports.store = (data) => {    
    try{  
        return Institut.create(data);
    }catch(e) {
        console.log(e);
    }
}
module.exports.update = (data) => {
    try{
    return Institut.update(data.id,{where: {id: data.id}});
    }catch(e) {
        console.log(e);
    }
}
module.exports.destroy = (id) => {
    try{
        return Institut.destroy({where: {id: id}});
    }catch(e) {
        console.log(e);
    }
}