module.exports = {
    connections: {
        'my_business': {
            business: 'my_business',
            database : "postgres",
            username : "postgres",
            password : "nabia123",
            params :  {
                dialect : "postgres",
                host: 'api-newv-postgres',
                omitNull: true,
                difine : {
                    underscored : true
                }
            }
        },
    },
    connectionSystem: {
        system_api: {
            business: 'nome_business',
            database : "dev_aplos1",
            username : "nabia",
            password : "nabia123",
            params :  {
                dialect : "mysql",
                host: 'api-newv-mysql',
                omitNull: true,
                difine : {
                    underscored : true
                }
            }
        }
    }
}
