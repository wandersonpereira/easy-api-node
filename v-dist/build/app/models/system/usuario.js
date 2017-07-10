/**
 * Modulo que faz o controle das Tasks
 */
import bcryptjs from 'bcryptjs';

module.exports = (sequelize, DataType) => {
    const usuarios_aplos = sequelize.define("usuarios_aplos", {
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
        online : {
            type : DataType.BOOLEAN
        },
        _idEmpresa : {
            type : DataType.STRING,
            
        },
        hostBanco : {
            type : DataType.STRING,
            
        },
        nomeBanco : {
            type : DataType.STRING,
            
        },
        usuarioBanco : {
            type : DataType.STRING,
            
        },
        senhaBanco : {
            type : DataType.STRING,
            
        },
        plataforma : {
            type: DataType.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            },
        }

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