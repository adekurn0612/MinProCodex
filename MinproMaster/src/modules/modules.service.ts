import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { modules } from 'models';

@Injectable()
export class ModulesService {
 async create(createModuleDto: CreateModuleDto) {
    try {
      const result = await modules.create(createModuleDto)
      return result
    } catch (error) {
      return error.message
    }
  }

  async findAll() {
    try {
      const result = await modules.findAll();
      return result
    } catch (error) {
      return error.message
      
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} module`;
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
