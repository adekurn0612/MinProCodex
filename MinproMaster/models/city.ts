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
import { province } from './province';
import { address } from './address';

export interface cityAttributes {
  city_id?: number;
  city_name?: string;
  city_modified_date?: Date;
  city_prov_id?: number;
}

@Table({ tableName: 'city', schema: 'master', timestamps: false })
export class city
  extends Model<cityAttributes, cityAttributes>
  implements cityAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('master.city_city_id_seq'::regclass)",
    ),
  })
  city_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(115) })
  city_name?: string;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  city_modified_date?: Date;

  @ForeignKey(() => province)
  @Column({ allowNull: true, type: DataType.INTEGER })
  city_prov_id?: number;

  @BelongsTo(() => province)
  province?: province;

  @HasMany(() => address, { sourceKey: 'city_id' })
  addresses?: address[];
}
