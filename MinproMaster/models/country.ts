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
import { province } from './province';

export interface countryAttributes {
  country_code: string;
  country_name?: string;
  country_modified_date?: Date;
}

@Table({ tableName: 'country', schema: 'master', timestamps: false })
export class country
  extends Model<countryAttributes, countryAttributes>
  implements countryAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(3) })
  country_code!: string;

  @Column({ allowNull: true, type: DataType.STRING(85) })
  country_name?: string;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  country_modified_date?: Date;

  @HasMany(() => province, { sourceKey: 'country_code' })
  provinces?: province[];
}
