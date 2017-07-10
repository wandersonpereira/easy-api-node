/**
 * Modulo que faz o controle das Tasks
 */

module.exports = (sequelize, DataType) => {
    const foto_poupotempo = sequelize.define("foto_poupotempo", {
        id : {
            type : DataType.INTEGER,
            primaryKey : true,
            autoIncremet : true
        },
        titulo : {
            type : DataType.STRING,
            field: 'titulo'
        },
        idAlbum: {
            type : DataType.INTEGER,
            field: 'id_tipo'
        },
        tipoImagem: {
            type : DataType.STRING,
            field: 'tipo'
        }, 
        imagem: {
            type : DataType.STRING,
            field: 'imagem'
        },
        orden: {
            type : DataType.INTEGER,
            field: 'orden'
        },  
        capaAlbum: {
            type : DataType.STRING,
            field: 'principal'
        },
    }, {
        classMethods : {
            associate : (models) => {
                // Produto_PoupoTempo.belongsTo(models.Users);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'foto',
    }
  );

    return foto_poupotempo;

}
