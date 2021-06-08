const Institut = require('../../models/Institut');
const Phone = require('../../models/Phone');
const Adress = require('../../models/Adress');
const Access = require('../../models/Access');


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
module.exports.getAll = async (model,association) => {
    try{
    result = await InstitutfindAll(association);
    //return console.log(result);
    return result;
    }catch(e) {
        console.log(e);
    }
}
module.exports.getAllSearch = async (model,where) => {
    try{
    //return console.log(where);
    result = await InstitutfindAll(where);
    //return console.log(result);
    return result;
    }catch(e) {
        console.log(e);
    }
}
module.exports.getOne = async (model) => {
    try{
    result = await Institut.findAll({where: { cnpj: model.cnpj }});
    //return console.log(result);
    return result;
    }catch(e) {
        console.log(e);
    }
}
module.exports.store = (data) => {    
    try{ 
    //return console.log(data + "chegou");  
    return Institut.create(data);
    }catch(e) {
        console.log(e);
    }
}
module.exports.update = (models, data) => {
    try{
    return Institut.update(data.id,{where: {id: data.id}});
    }catch(e) {
        console.log(e);
    }
}
module.exports.destroy = (models, data) => {
    try{
    return Institut.destroy({where: {id: data.id}});
    }catch(e) {
        console.log(e);
    }
}