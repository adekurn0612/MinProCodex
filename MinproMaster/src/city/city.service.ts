import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { city } from 'models';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CityService {

  constructor(
    private sequelize: Sequelize){}
 async create(createCityDto: CreateCityDto) {
    try {
      const result = await city.create(createCityDto);
      return result
    } catch (error) {
      return error.message
    }
  }

  async findAll() {
    try {
      const result = await this.sequelize.query(`select * from master.cityProv`);
      return result
    } catch (error) {
      return error.message
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
