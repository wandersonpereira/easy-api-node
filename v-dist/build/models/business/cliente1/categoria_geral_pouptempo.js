/**
 * Modulo que faz o controle das Tasks
 */

module.exports = (sequelize, DataType) => {
    const categoria_geral_pouptempo = sequelize.define("categoria_geral_pouptempo", {
        id : {
            type : DataType.INTEGER,
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
    });

    return categoria_geral_pouptempo;

}
