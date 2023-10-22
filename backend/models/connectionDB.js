const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('file-inventory', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});


const File = sequelize.define('File', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

sequelize.sync();

module.exports = File;