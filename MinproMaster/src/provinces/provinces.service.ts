import { Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { province } from 'models';

@Injectable()
export class ProvincesService {
 async create(createProvinceDto: CreateProvinceDto) {
    try {
      const result = await province.create(createProvinceDto)
      return result    
    } catch (error) {
      return error.message
    }
  }

  findAll() {
    return `This action returns all provinces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} province`;
  }

  update(id: number, updateProvinceDto: UpdateProvinceDto) {
    return `This action updates a #${id} province`;
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
