// db.ts
import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
    database: "your_database_name",
    username: "your_database_username",
    password: "your_database_password",
    host: "localhost",
    dialect: "postgres",
});
