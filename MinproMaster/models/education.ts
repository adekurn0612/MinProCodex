import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface educationAttributes {
  edu_code: string;
  edu_name?: string;
}

@Table({ tableName: 'education', schema: 'master', timestamps: false })
export class education
  extends Model<educationAttributes, educationAttributes>
  implements educationAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(5) })
  edu_code!: string;

  @Column({ allowNull: true, type: DataType.STRING(55) })
  edu_name?: string;
}
