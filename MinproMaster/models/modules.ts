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
import { route_actions } from './route_actions';

export interface modulesAttributes {
  module_name: string;
}

@Table({ tableName: 'modules', schema: 'master', timestamps: false })
export class modules
  extends Model<modulesAttributes, modulesAttributes>
  implements modulesAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(125) })
  module_name!: string;

  @HasMany(() => route_actions, { sourceKey: 'module_name' })
  route_actions?: route_actions[];
}
