const { Model, DataTypes } = require('sequelize');

class Phone extends Model {
    static init(sequelize) {
        super.init({
            fk_tables_id: DataTypes.STRING,
            residential_phone: DataTypes.STRING,
            celphone_1: DataTypes.STRING,
            celphone_2: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Institut, { foreignKey: 'id', as: 'phoneInstitut'});
        this.belongsTo(models.Representative, { foreignKey: 'id', as: 'phoneRepresentative'});
        this.belongsTo(models.Admininstitut, { foreignKey: 'id', as: 'phoneAdmininstitut'});
        this.belongsTo(models.Admingeneral, { foreignKey: 'id', as: 'phoneAdmingeneral'});
    }
}
module.exports = Phone;
