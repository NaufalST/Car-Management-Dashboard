import { Sequelize } from "sequelize";
 
const db = new Sequelize('database_development', 'postgres', 'malzan20', {
    host: "localhost",
    dialect: "postgres"
});
 
export default db;