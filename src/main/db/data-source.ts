import { app } from 'electron'
import path from 'path'
import { DataSource } from 'typeorm'
import { User } from './entity/User'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(app.getPath('userData'), 'database.sqlite'),
  logging: false,
  synchronize: true,
  entities: [User],
  migrations: [],
  subscribers: []
})
