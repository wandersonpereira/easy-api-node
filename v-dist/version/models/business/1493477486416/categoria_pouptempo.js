'use strict';

/**
 * Modulo que faz o controle das Tasks
 */

module.exports = function (sequelize, DataType) {
    var categoria_poupotempo = sequelize.define("categoria_1493477486416", {
        id: {
            type: DataType.BIGINT,
            primaryKey: true,
            autoIncremet: true
        },
        titulo: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            field: 'nome'
        },
        adicionarMenu: {
            type: DataType.STRING,
            field: 'adicionar_menu'
        },
        idCategoriaPai: {
            type: DataType.BIGINT,
            field: 'id_categoria_pai'
        }
    }, {
        classMethods: {
            associate: function associate(models) {
                // Tasks.belongsTo(models.Users);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'categoria',
        createdAt: false,
        updatedAt: false
    });

    return categoria_poupotempo;
};
//# sourceMappingURL=categoria_pouptempo.js.map
