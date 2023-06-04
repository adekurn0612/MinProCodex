import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillTemplateDto } from './create-skill_template.dto';

export class UpdateSkillTemplateDto extends PartialType(CreateSkillTemplateDto) {}
