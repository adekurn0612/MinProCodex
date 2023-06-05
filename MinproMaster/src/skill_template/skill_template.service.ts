import { Injectable } from '@nestjs/common';
import { CreateSkillTemplateDto } from './dto/create-skill_template.dto';
import { UpdateSkillTemplateDto } from './dto/update-skill_template.dto';
import { skill_template } from 'models';

@Injectable()
export class SkillTemplateService {
  create(createSkillTemplateDto: CreateSkillTemplateDto) {
    return 'This action adds a new skillTemplate';
  }

  async findAll() {
   try {
     const result = await skill_template.findAll();
     return result;
   } catch (error) {
    return error.message
   }
  }

  findOne(id: number) {
    return `This action returns a #${id} skillTemplate`;
  }

  update(id: number, updateSkillTemplateDto: UpdateSkillTemplateDto) {
    return `This action updates a #${id} skillTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} skillTemplate`;
  }
}
