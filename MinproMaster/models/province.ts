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
import { country } from './country';
import { city } from './city';

export interface provinceAttributes {
  prov_id?: number;
  prov_code?: string;
  prov_name?: string;
  prov_modified_date?: Date;
  prov_country_code?: string;
}

@Table({ tableName: 'province', schema: 'master', timestamps: false })
export class province
  extends Model<provinceAttributes, provinceAttributes>
  implements provinceAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('master.province_prov_id_seq'::regclass)",
    ),
  })
  prov_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(5) })
  prov_code?: string;

  @Column({ allowNull: true, type: DataType.STRING(85) })
  prov_name?: string;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  prov_modified_date?: Date;

  @ForeignKey(() => country)
  @Column({ allowNull: true, type: DataType.STRING(3) })
  prov_country_code?: string;

  @BelongsTo(() => country)
  country?: country;

  @HasMany(() => city, { sourceKey: 'prov_id' })
  cities?: city[];
}
