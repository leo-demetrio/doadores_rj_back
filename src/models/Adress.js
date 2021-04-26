const { Model, DataTypes } = require('sequelize');

class Adress extends Model {
    static init(sequelize) {
        super.init({
            fk_tables_id: DataTypes.STRING,
            zip_code: DataTypes.STRING,
            city: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            complement: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Institut, { foreignKey: 'id', as: 'addressInstitut'});
        this.belongsTo(models.Representative, { foreignKey: 'id', as: 'addressRepresentative'});
        this.belongsTo(models.Admininstitut, { foreignKey: 'id', as: 'addressAdmininstitut'});
        this.belongsTo(models.Admingeneral, { foreignKey: 'id', as: 'addressAdmingeneral'});
    }
}
module.exports = Adress;
