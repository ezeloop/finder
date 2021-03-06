import { ConnectionOptions } from 'typeorm';

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE } = process.env;
// console.log(`
//   ----- DB_HOST: ${DB_HOST}
//   ----- DB_USERNAME: ${DB_USERNAME}
//   ----- DB_PASSWORD: ${DB_PASSWORD}
//   ----- DB_PORT: ${DB_PORT}
//   ----- DB_DATABASE: ${DB_DATABASE}
// `);

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: +DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [ __dirname + '/src/**/*.entity.{ts,js}'],

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,

  

  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [__dirname + '/src/modules/database/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/modules/database/migrations',
  },
};
export = config;
