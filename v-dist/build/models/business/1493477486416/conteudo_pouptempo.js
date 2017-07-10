/**
 * Modulo que faz o controle das Tasks
 */

module.exports = (sequelize, DataType) => {
    const conteudo_poupotempo = sequelize.define("conteudo_1493477486416", {
        id : {
            type : DataType.BIGINT,
            primaryKey : true,
            autoIncremet : true
        },
        titulo : {
            type : DataType.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            },
            field: 'nome'
        },
        idCategoria: {
            type : DataType.BIGINT,
            field: 'id_categoria',
        },
        conteudo: {
            type : DataType.STRING,
            field: 'conteudo',
        },
        status: {
            type : DataType.STRING,
            field: 'status',
        },
    }, {
        classMethods : {
            associate : (models) => {
                // Tasks.belongsTo(models.Users);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'conteudo',
        createdAt: false,
        updatedAt: false
    });

    return conteudo_poupotempo;

}
