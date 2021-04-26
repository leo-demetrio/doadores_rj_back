const { Model, DataTypes } = require('sequelize');

class Admininstitut extends Model {
    static init(sequelize) {
        super.init({
            fk_institut: DataTypes.UUID,
            cpf: DataTypes.STRING,
            name: DataTypes.STRING,
            email: DataTypes.STRING, 
            level: DataTypes.INTEGER,          
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Institut, { foreignKey: 'fk_institut', as: 'admininstitutInstitut'});
        this.hasOne(models.Phone, { foreignKey: 'fk_tables_id', as: 'admininstitutPhone'});
        this.hasOne(models.Adress, { foreignKey: 'fk_tables_id', as: 'admininstitutAdress'});
        this.hasMany(models.Access, { foreignKey: 'fk_tables_id', as: 'admininstitutAccess'});
    }
}
module.exports = Admininstitut;