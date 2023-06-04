import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { skill_template } from './skill_template';

export interface skill_typeAttributes {
  skty_name: string;
}

@Table({ tableName: 'skill_type', schema: 'master', timestamps: false })
export class skill_type
  extends Model<skill_typeAttributes, skill_typeAttributes>
  implements skill_typeAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(55) })
  skty_name!: string;

  @HasMany(() => skill_template, { sourceKey: 'skty_name' })
  skill_templates?: skill_template[];
}
