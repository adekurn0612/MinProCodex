import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { category } from 'models';

@Injectable()
export class CategoryService {
  
 async create(createCategoryDto: CreateCategoryDto) {
   try {
    const result = await category.create(createCategoryDto);
    return result
   } catch (error) {
    return error.message
   }
  }

  async findAll() {
    try {
      const result = await category.findAll();
      return result;
    } catch (error) {
      return error.message
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
