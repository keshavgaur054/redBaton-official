import { BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { TYPES, TYPES_LISTS } from "src/constants/app.constant";
import { Page } from "src/page/page.model";

@Table
export class Section extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @ForeignKey(() => Page)
    @Column(DataType.STRING)
    page_id: string

    @BelongsTo(()=>Page,'page_id')
    page:Page

    // @Default(TYPES['FULL_WIDTH'])
    // @Column({
    //     type: DataType.ENUM({
    //         values: TYPES_LISTS,
    //     }),
    // })
    // type: string 
    
    // @HasMany(() => Page)
    // page: Page[];

    @Column(DataType.JSON)
    content: [string]

    @ForeignKey(() => Page)
    @Column(DataType.STRING)
    sequence: string

    @Column(DataType.JSON)
    children: [string]
}