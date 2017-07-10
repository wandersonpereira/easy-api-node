'use strict';

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (sequelize, DataType) {
    var usuarios_aplos = sequelize.define("usuarios_aplos", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        nomeUsuario: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        senha: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        imagem: {
            type: DataType.STRING
        },
        ativo: {
            type: DataType.STRING
        },
        online: {
            type: DataType.BOOLEAN
        },
        _idEmpresa: {
            type: DataType.STRING

        },
        hostBanco: {
            type: DataType.STRING

        },
        nomeBanco: {
            type: DataType.STRING

        },
        usuarioBanco: {
            type: DataType.STRING

        },
        senhaBanco: {
            type: DataType.STRING

        },
        plataforma: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }

    }, {
        hooks: {
            beforeCreate: function beforeCreate(user) {
                var salt = _bcryptjs2.default.genSaltSync();
                user.senha = _bcryptjs2.default.hashSync(user.senha, salt);
            }
        },
        classMethods: {
            associate: function associate(models) {
                // Tasks.belongsTo(models.Users);
            },
            isPassword: function isPassword(encodedPassword, password) {
                return _bcryptjs2.default.compareSync(password, encodedPassword);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'usuario'
    });

    return usuarios_aplos;
}; /**
    * Modulo que faz o controle das Tasks
    */
//# sourceMappingURL=usuario.js.map
