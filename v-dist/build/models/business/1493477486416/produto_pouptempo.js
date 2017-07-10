/**
 * Modulo que faz o controle das Tasks
 */

module.exports = (sequelize, DataType) => {
    const produto_poupotempo = sequelize.define("produto_1493477486416", {
        id : {
            type : DataType.BIGINT,
            primaryKey : true,
            autoIncremet : true,
            field: 'id'
        },
        promocional : {
            type : DataType.STRING,
            field: 'produto_promocional'
        },
        valorTransportadora: {
            type : DataType.FLOAT,
            field: 'preco_transportadora'
        },
        comprimento : {
            type : DataType.FLOAT,
            field: 'comprimento'
        },
        altura: {
            type : DataType.FLOAT,
            field: 'altura'
        },
        largura: {
            type : DataType.FLOAT,
            field: 'largura'
        },
        diametro: {
            type : DataType.FLOAT,
            field: 'diametro'
        },
        titulo : {
            type : DataType.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            },
            field: 'nome'
        },
        peso: {
            type : DataType.FLOAT,
            field: 'peso'
        },
        valor: {
            type : DataType.FLOAT,
            field: 'preco'
        }, 
        valorAtacado: {
            type : DataType.FLOAT,
            field: 'preco_atacado'
        },
        quantidade : {
            type : DataType.FLOAT,
            field: 'quant'
        },  
        valorPromocional: {
            type : DataType.STRING,
            field: 'preco_promocional'
        },
        idCategoria : {
            type : DataType.BIGINT,
            field: 'id_categoria'
        },
        descricao : {
            type : DataType.STRING,
            field: 'descricao'
        },
        descricaoResumida : {
            type : DataType.STRING,
            field: 'descricao_resumida'
        },
        freteGratis : {
            type : DataType.STRING,
            field: 'frete_gratis'
        },
        lancamento: {
            type : DataType.STRING,
            field: 'lancamento'
        },
        idCategoriaPouptempo: {
            type : DataType.FLOAT,
            field: 'id_categoria_pouptempo'
        },
        pouptempo: {
            type : DataType.STRING,
            field: 'pouptempo'
        }
    }, {
        classMethods : {
            associate : (models) => {
                // Produto_PoupoTempo.belongsTo(models.Users);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'produto',
        createdAt: false,
        updatedAt: false
    }
  );

    return produto_poupotempo;

}
