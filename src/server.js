require('dotenv').config();

const express = require('express');
var cors = require('cors')
//const routes = require('./routes');
const { check } = require('express-validator');
require('./database/conexao');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    app.use(cors());
    next();
})
app.use(express.json());
//app.use(routes);
app.use(require('./routes/institutRoutes'));
app.use(require('./routes/representativeRoutes'));
app.use(require('./routes/adressRoutes'));
app.use(require('./routes/donorRoutes'));
app.use(require('./routes/phoneRoutes'));
app.use(require('./routes/admingeneralRoutes'));
app.use(require('./routes/admininstitutRoutes'));

app.use(check);


const server = app.listen(port, (err) => {
    console.log('Server running...' + port);
});
//app.listen(port)

module.exports = app;
