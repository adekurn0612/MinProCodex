import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface working_typeAttributes {
  woty_type: string;
  woty_name?: string;
}

@Table({ tableName: 'working_type', schema: 'master', timestamps: false })
export class working_type
  extends Model<working_typeAttributes, working_typeAttributes>
  implements working_typeAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(5) })
  woty_type!: string;

  @Column({ allowNull: true, type: DataType.STRING(55) })
  woty_name?: string;
}
