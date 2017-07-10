
module.exports = {
    connections: {
        '1493477486416': {
            business: '1493477486416',
            database : "dev_aplos1",
            username : "root",
            password : "nabia123",
            params :  {
                dialect : "mysql",
                host: 'api-v2-mysql',
                omitNull: true,
                difine : {
                    underscored : true
                }
            }
        },
    },
    connectionSystem: {
        aplos: {
            database : "postgres",
            username : "postgres",
            password : "nabia123",
            params :  {
                dialect : "postgres",
                host: 'api-v2-postgres',
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
