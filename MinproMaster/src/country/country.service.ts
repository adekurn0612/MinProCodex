import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { country } from 'models';

@Injectable()
export class CountryService {
 async create(createCountryDto: CreateCountryDto) {
    try {
      const result = await country.create(createCountryDto)
      return result
    } catch (error) {
      return error.message
    }
  }

  async findAll() {
    try {
      const result = await country.findAll()
      return result
    } catch (error) {
      return error.message
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
