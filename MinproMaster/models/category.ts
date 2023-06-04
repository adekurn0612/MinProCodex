import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
// import { category } from './category';

export interface categoryAttributes {
  cate_id?: number;
  cate_name?: string;
  cate_cate_id?: number;
  cate_modified_date?: Date;
}

@Table({ tableName: 'category', schema: 'master', timestamps: false })
export class category
  extends Model<categoryAttributes, categoryAttributes>
  implements categoryAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('master.category_cate_id_seq'::regclass)",
    ),
  })
  cate_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  cate_name?: string;

  @ForeignKey(() => category)
  @Column({ allowNull: true, type: DataType.INTEGER })
  cate_cate_id?: number;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  cate_modified_date?: Date;

  @HasMany(() => category, { sourceKey: 'cate_id' })
  categories?: category[];

  @BelongsTo(() => category)
  category?: category;
}
