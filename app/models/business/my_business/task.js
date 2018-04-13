/**
 * Model that do user controller
 */
module.exports = (sequelize, DataType) => {
    const task = sequelize.define("task", {
        id : {
            type : DataType.BIGINT,
            primaryKey : true,
            autoIncremet : true
        },
        nome : {
            type : DataType.STRING,
            allowNull : false,
            validate : {
                notEmpty : true,
            },
        },
        tipo:  {
            type : DataType.STRING
        }
    }, {
        classMethods : {
            associate : (models) => {
                // Tasks.belongsTo(models.Users);
            },
            isPassword: (encodedPassword, password) => {
                return bcryptjs.compareSync(password, encodedPassword);
            }
        },
        freezeTableName: true,
        // define the table's name
        tableName: 'task',
    });

    return task;
}