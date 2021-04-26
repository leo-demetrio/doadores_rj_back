const { Model, DataTypes } = require('sequelize');

class Donor extends Model {
    static init(sequelize) {
        super.init({
            fk_institut: DataTypes.STRING,
            fk_representative: DataTypes.STRING,
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            value: DataTypes.NUMBER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Institut, { foreignKey: 'id', as: 'ownerInstitut'});
        this.belongsTo(models.Representative, { foreignKey: 'id', as: 'ownerRepresentative'});
    }
}
module.exports = Donor;