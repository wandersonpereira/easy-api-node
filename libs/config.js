
module.exports = {
    connections: {
        'nome_business': {
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
        },
    },
    connectionSystem: {
        system_api: {
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
        }
    },
    jwtSecret: '%@P10$ApI@7102#%',
    jwtSession: {session: false},
}
