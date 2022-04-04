import { ProvinceService } from './services/provinces.service';
import { ProvinceController } from './controllers/provinces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Province } from './entities/province.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Province])
  ],
  controllers: [ProvinceController],
  providers: [ProvinceService],
  exports: [TypeOrmModule],
})
export class ProvincesModule {}
