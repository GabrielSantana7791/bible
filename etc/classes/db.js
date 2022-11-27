import { Sequelize } from "sequelize";

export class dbConnection{
    constructor(){
        this.dbCon = null;
    }

    static connect (database, user, password, hostName){
        const connection = new Sequelize(database, user, password, {host: hostName, 
        dialect: 'mysql', logging: false});
        
        try {
            connection.authenticate()
            this.dbCon = connection;
        
            console.log('Conexão com o banco de dados realizado com sucesso');    
        } catch (error) {
            console.log('Erro ao conectar ao banco de dados');
        }
    }

    static getCon(){
        return this.dbCon;
    }

}

