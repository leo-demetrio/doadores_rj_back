
module.exports.getAll = async (model,association) => {
    try{
    result = await model.findAll(association);
    //return console.log(result);
    return result;
    }catch(e) {
        console.log(e);
    }
}
module.exports.getAllSearch = async (model,where) => {
    try{
    //return console.log(where);
    result = await model.findAll(where);
    //return console.log(result);
    return result;
    }catch(e) {
        console.log(e);
    }
}
module.exports.getOne = async (model,where) => {
    try{
    result = await model.findAll(where);
    //return console.log(result);
    return result;
    }catch(e) {
        console.log(e);
    }
}
module.exports.store = (models, data) => {    
    try{ 
    //return console.log(data + "chegou");  
    return models.create(data);
    }catch(e) {
        console.log(e);
    }
}
module.exports.update = (models, data) => {
    try{
    return models.update(data.id,{where: {id: data.id}});
    }catch(e) {
        console.log(e);
    }
}
module.exports.destroy = (models, data) => {
    try{
    return models.destroy({where: {id: data.id}});
    }catch(e) {
        console.log(e);
    }
}