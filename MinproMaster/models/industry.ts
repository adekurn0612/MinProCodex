import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface industryAttributes {
  indu_code: string;
  indu_name?: string;
}

@Table({ tableName: 'industry', schema: 'master', timestamps: false })
export class industry
  extends Model<industryAttributes, industryAttributes>
  implements industryAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(5) })
  indu_code!: string;

  @Column({ allowNull: true, type: DataType.STRING(85) })
  indu_name?: string;
}
