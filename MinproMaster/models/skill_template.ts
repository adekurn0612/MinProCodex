import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { skill_type } from './skill_type';
// import { skill_template } from './skill_template';

export interface skill_templateAttributes {
  skte_id?: number;
  skte_skill?: string;
  skte_description?: string;
  skte_week?: number;
  skte_orderby?: number;
  skte_modified_date?: Date;
  skty_name?: string;
  skte_skte_id?: number;
}

@Table({ tableName: 'skill_template', schema: 'master', timestamps: false })
export class skill_template
  extends Model<skill_templateAttributes, skill_templateAttributes>
  implements skill_templateAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('master.skill_template_skte_id_seq'::regclass)",
    ),
  })
  skte_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(256) })
  skte_skill?: string;

  @Column({ allowNull: true, type: DataType.STRING(256) })
  skte_description?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  skte_week?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  skte_orderby?: number;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  skte_modified_date?: Date;

  @ForeignKey(() => skill_type)
  @Column({ allowNull: true, type: DataType.STRING(55) })
  skty_name?: string;

  @ForeignKey(() => skill_template)
  @Column({ allowNull: true, type: DataType.INTEGER })
  skte_skte_id?: number;

  @BelongsTo(() => skill_type)
  skill_type?: skill_type;

  @HasMany(() => skill_template, { sourceKey: 'skte_id' })
  skill_templates?: skill_template[];

  @BelongsTo(() => skill_template)
  skill_template?: skill_template;
}
