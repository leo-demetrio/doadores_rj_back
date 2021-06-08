module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: process.env.NODE_ENV === "test" ? "syscondoe_test" : 'doadores_rj',
    define: {
        timestamps: true,
        underscored: true,
    }

}