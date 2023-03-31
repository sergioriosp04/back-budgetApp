import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class Account extends Model {
  @Column
  userId: number

  @Column
  name: string

  @Column
  description: string
}
