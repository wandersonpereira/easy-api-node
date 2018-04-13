/**
 * Model that do user controller
 */
const bcryptjs = require('bcryptjs');

module.exports = (sequelize, DataType) => {
    const usuarios_aplos = sequelize.define("usuario", {
        id : {
            type : DataType.BIGINT,
            primaryKey : true,
            autoIncremet : true
        },
        nome : {
            type : DataType.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            },
        },
        nomeUsuario : {
            type : DataType.STRING,
            unique : true,
            allowNull : false,
            validate : {
                notEmpty : true,
            },
        },
        email : {
            type : DataType.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            },
        },
        senha : {
            type : DataType.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            },
        },
        ativo : {  
            type : DataType.STRING
        },
        online : {
            type : DataType.BOOLEAN
        },

    }, {
        hooks: {
            beforeCreate: user => {
                const salt = bcryptjs.genSaltSync();
                user.senha = bcryptjs.hashSync(user.senha, salt);
            },
        },
        classMethods : {
            associate : (models) => {
                // Tasks.belongsTo(models.Users);
            },
            isPassword: (encodedPassword, password) => {
                return bcryptjs.compareSync(password, encodedPassword);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'usuario',
    });

    return usuarios_aplos;
}