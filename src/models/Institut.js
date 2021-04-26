const { Model, DataTypes } = require('sequelize');

class Institut extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cnpj: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Phone, { foreignKey: 'fk_tables_id', as: 'phone'});
        this.hasMany(models.Adress, { foreignKey: 'fk_tables_id', as: 'address'});
        this.hasMany(models.Admininstitut, { foreignKey: 'fk_institut', as: 'adminInstitut'});
        this.hasMany(models.Donor, { foreignKey: 'fk_institut', as: 'donors'});
        this.hasMany(models.Representative, { foreignKey: 'fk_institut', as: 'representatives'});
    }
}
module.exports = Institut;