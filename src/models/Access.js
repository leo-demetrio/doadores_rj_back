const { Model, DataTypes } = require('sequelize');

class Access extends Model {
    static init(sequelize) {
        super.init({
            fk_tables_id: DataTypes.UUID,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Institut, { foreignKey: 'id', as: 'accessInstitut'});
        this.belongsTo(models.Representative, { foreignKey: 'id', as: 'accessRepresentative'});
        this.belongsTo(models.Admininstitut, { foreignKey: 'id', as: 'accessAdmininstitut'});
        this.belongsTo(models.Admingeneral, { foreignKey: 'id', as: 'accessAdmingeneral'});
        this.belongsTo(models.Donor, { foreignKey: 'id', as: 'accessDonor'});
    }
}
module.exports = Access;