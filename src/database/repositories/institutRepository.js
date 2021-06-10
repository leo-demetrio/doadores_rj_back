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
    // result = await InstitutfindAll(association);
    //return console.log(result);
    return result;
    }catch(e) {
        console.log(e);
    }
}
module.exports.getAllSearch = async (model,where) => {
    try{
    //return console.log(where);
    result = await Institut.findAll(where);
    //return console.log(result);
    return result;
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