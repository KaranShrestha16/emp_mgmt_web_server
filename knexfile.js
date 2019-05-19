
const path = require('path');
module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'employeemanagement',
        user: 'admin',
        password: 'karan123'
    },

    migrations: {
        tableName: 'migrations',
        directory: path.resolve(__dirname, './migrations'),
    },
    userNullAsDefault: true

};/*  */