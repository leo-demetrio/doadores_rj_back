module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'leoppostegres',
    database: process.env.NODE_ENV === "test" ? "syscondoe_test" : 'doadores_rj',
    define: {
        timestamps: true,
        underscored: true,
    }

}
// module.exports = {
//     dialect: 'postgres',
//     host: 'localhost',
//     username: 'postgres',
//     password: 'leoppostegres',
//     database: process.env.NODE_ENV === "test" ? "syscondoe_test" : 'doadores_rj',
//     define: {
//         timestamps: true,
//         underscored: true,
//     }

// }