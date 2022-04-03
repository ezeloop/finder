import { UsersModule } from './modules/users/user.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/modules/database/database.module';
import { PetsModule } from './modules/pets/pets.module';
import { PhotosModule } from './modules/photos/photos.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
  DatabaseModule,
  UsersModule,
  PetsModule,
  PhotosModule,
  AuthModule,
    //aca importo el modulo
  ],
})
export class AppModule {}