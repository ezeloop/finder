import { UsersModule } from './modules/users/user.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
  DatabaseModule,
  UsersModule,
    //aca importo el modulo
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}