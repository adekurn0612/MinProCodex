import { Injectable } from '@nestjs/common';
import { CreateSkillTemplateDto } from './dto/create-skill_template.dto';
import { UpdateSkillTemplateDto } from './dto/update-skill_template.dto';

@Injectable()
export class SkillTemplateService {
  create(createSkillTemplateDto: CreateSkillTemplateDto) {
    return 'This action adds a new skillTemplate';
  }

  findAll() {
    return `This action returns all skillTemplate`;
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
