/**
 * Modulo que faz o controle das Tasks
 */
module.exports = (sequelize, DataType) => {
    const empresas_aplos = sequelize.define("empresas_aplos", {
        id : {
            type : DataType.INTEGER,
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
        imagem : {
            type : DataType.STRING,
        },
        ativo : {  
            type : DataType.STRING
        },
    }, {
        classMethods : {
            associate : (models) => {
                // Tasks.belongsTo(models.Users);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'empresa',
    });

    return empresas_aplos;
}