import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { country } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([country])],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}
