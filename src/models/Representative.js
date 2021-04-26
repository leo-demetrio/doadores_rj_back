const { Model, DataTypes } = require('sequelize');

class Representative extends Model {
    static init(sequelize) {
        super.init({
            fk_institut: DataTypes.UUID,
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            number_social: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Institut, { foreignKey: 'id', as: 'ownerInstitut'});
        this.hasMany(models.Phone, { foreignKey: 'fk_tables_id', as: 'phone'});
        this.hasMany(models.Adress, { foreignKey: 'fk_tables_id', as: 'address'});
        this.hasMany(models.Donor, { foreignKey: 'fk_representative', as: 'donors'});
    }
}
module.exports = Representative;