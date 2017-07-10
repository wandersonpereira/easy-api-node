'use strict';

/**
 * Modulo que faz o controle das Tasks
 */

module.exports = function (sequelize, DataType) {
    var foto_poupotempo = sequelize.define("imagem_1493477486416", {
        id: {
            type: DataType.BIGINT,
            primaryKey: true,
            autoIncremet: true
        },
        titulo: {
            type: DataType.STRING,
            field: 'titulo'
        },
        idAlbum: {
            type: DataType.BIGINT,
            field: 'id_tipo'
        },
        tipoImagem: {
            type: DataType.STRING,
            field: 'tipo'
        },
        imagem: {
            type: DataType.STRING,
            field: 'imagem'
        },
        orden: {
            type: DataType.INTEGER,
            field: 'orden'
        },
        capaAlbum: {
            type: DataType.STRING,
            field: 'principal'
        }
    }, {
        classMethods: {
            associate: function associate(models) {
                // Produto_PoupoTempo.belongsTo(models.Users);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'foto',
        createdAt: false,
        updatedAt: false
    });

    return foto_poupotempo;
};
//# sourceMappingURL=foto_pouptempo.js.map
