import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { DataSource } from "typeorm";
import { User } from './entities/User';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
process.env.APP_ROOT = path.join(__dirname, '..')
const dbPath = path.join(process.env.APP_ROOT, "database/dairy.db");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: dbPath,
  synchronize: true,
  logging: true,
  entities: [
    User
  ],
  entitySkipConstructor: true,
});

export default AppDataSource;
