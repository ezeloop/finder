import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async useFactory() {
        const realConfig: ConnectionOptions = {
          type: 'postgres',
          host: process.env.DB_HOST,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          port: Number(process.env.DB_PORT),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          migrations: [__dirname + '/migrations/*{.ts,.js}'],
          ssl: false,
          synchronize: false,
          retryDelay: 3000,
          retryAttempts: 10
        } as ConnectionOptions;
        return realConfig;
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
