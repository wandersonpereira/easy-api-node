/**
 * Modulo que faz o controle das Tasks
 */

module.exports = (sequelize, DataType) => {
    const categoria_geral_pouptempo = sequelize.define("categoria_geral_1493477486416", {
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
            field: 'nome',
        },
        perteceA: {
            type : DataType.STRING,
            field: 'pertence_a',
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
        tableName: 'categoria_geral',
        createdAt: false,
        updatedAt: false
    });

    return categoria_geral_pouptempo;

}
