import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "md4_ss10",
  entities: ["src/entity/*.js"],
  logging: false,
  synchronize: true,
});
