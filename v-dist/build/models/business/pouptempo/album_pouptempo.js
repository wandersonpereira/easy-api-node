/**
 * Modulo que faz o controle das Tasks
 */
module.exports = (sequelize, DataType) => {
    const album_pouptempo = sequelize.define("album_pouptempo", {
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
            field: 'titulo',
        },
        idCategoria: {
            type : DataType.BIGINT,
            field: 'id_categoria',
        },
        descricao: {
            type : DataType.STRING,
            field: 'descricao',
        },
        imagem: {
            type : DataType.STRING,
            field: 'imagem',
        },
    }, {
        classMethods : {
            associate : (models) => {
                // Tasks.belongsTo(models.Users);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'albuns',
    });

    return album_pouptempo;

}
