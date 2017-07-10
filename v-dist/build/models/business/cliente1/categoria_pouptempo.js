/**
 * Modulo que faz o controle das Tasks
 */

module.exports = (sequelize, DataType) => {
    const categoria_poupotempo = sequelize.define("categoria_pouptempo", {
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
        adicionarMenu: {
            type : DataType.STRING,
            field: 'adicionar_menu',
        },
        idCategoriaPai: {
            type : DataType.INTEGER,
            field: 'id_categoria_pai',
        },
    }, {
        classMethods : {
            associate : (models) => {
                // Tasks.belongsTo(models.Users);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'categoria',
    });

    return categoria_poupotempo;

}
