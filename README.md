# easy-api-node
Easy API Nodejs

Componentes utilizado pela api
* Express
* Mochajs
* Consign
* Sequelize
* Compile

### Clonando repositório
```
git clone https://github.com/wandersonpereira/easy-api-node.git
```

### Instalando dependências
```
cd easy-api-node
npm install
npm install --dev OUT npm install --only=dev
```

### Executando testes
```
npm test
```
### Gerar pacote para produção
```
npm run compile
```

### Estrutura de pastas e arquivos
```
├── app
│   ├── models
│   │   ├── system
│   │   ├── business
│   ├── modules
│   │   └── utils.js 
│   ├── routes
│   │   └── token.js
│   │   └── index.js
│   │   └── categoria.js
├── lib
│   └── boots.js
│   └── config.js
│   └── config.test.js
│   └── config.development.js
│   └── config.production.js
│   └── dbs.js
│   └── sysDb.js
│   └── middlewares.js
├── test
│   ├── Route_index
│   │   └── index.js
│   └── helpers.js
│   └── mocha.opts
├── v-dist
│   ├── build
│   ├── version
└── auth.js
└── docker-compose.yml
└── Dockerfile
└── index.js
└── packge.json

```
