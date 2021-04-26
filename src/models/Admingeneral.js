const { Model, DataTypes } = require('sequelize');

class Admingeneral extends Model {
    static init(sequelize) {
        super.init({
            cpf: DataTypes.STRING,
            name: DataTypes.STRING,
            email: DataTypes.STRING, 
            level: DataTypes.INTEGER,          
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Phone, { foreignKey: 'fk_tables_id', as: 'adminPhone'});
        this.hasMany(models.Adress, { foreignKey: 'fk_tables_id', as: 'adminAdress'});
        this.hasMany(models.Access, { foreignKey: 'fk_tables_id', as: 'adminAccess'});
    }
}
module.exports = Admingeneral;