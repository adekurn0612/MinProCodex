import { Injectable } from '@nestjs/common';
import { CreateSkillTypeDto } from './dto/create-skill_type.dto';
import { UpdateSkillTypeDto } from './dto/update-skill_type.dto';
import { skill_type } from 'models';

@Injectable()
export class SkillTypeService {
async  create(createSkillTypeDto: CreateSkillTypeDto) {
    try {
      const result = await skill_type.create(createSkillTypeDto);
      return result
    } catch (error) {
      return error.message
    }
  }

  async findAll() {
    try{
    const result = await skill_type.findAll();
    return result;
    }catch(e){
      return e.message
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} skillType`;
  }

  update(id: number, updateSkillTypeDto: UpdateSkillTypeDto) {
    // const result = await product.update()
  }

  remove(id: number) {
    return `This action removes a #${id} skillType`;
  }
}
