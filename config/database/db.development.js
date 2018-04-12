module.exports = {
    connections: {
        /*'nome_business': {
            business: 'nome_business',
            database : "nome_base_dados",
            username : "usuario_base_dados",
            password : "senha_base_dados",
            params :  {
                dialect : "mysql",
                host: 'host_base_dados',
                omitNull: true,
                difine : {
                    underscored : true
                }
            }
        },*/
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
