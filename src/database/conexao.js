const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Institut = require('../models/Institut');
const Representative = require('../models/Representative');
const Adress = require('../models/Adress');
const Donor = require('../models/Donor');
const Phone = require('../models/Phone');
const Admininstitut = require('../models/Admininstitut');
const Admingeneral = require('../models/Admingeneral');
const Access = require('../models/Access');

const connection = new Sequelize(dbConfig);

Institut.init(connection);
Representative.init(connection);
Adress.init(connection);
Access.init(connection);
Donor.init(connection);
Phone.init(connection);
Admininstitut.init(connection);
Admingeneral.init(connection);

Institut.associate(connection.models);
Representative.associate(connection.models);
Phone.associate(connection.models);
Admininstitut.associate(connection.models);
Donor.associate(connection.models);
Adress.associate(connection.models);
Admingeneral.associate(connection.models);
Access.associate(connection.models);

module.exports = connection;