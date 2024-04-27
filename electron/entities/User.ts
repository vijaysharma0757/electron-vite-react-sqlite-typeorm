
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity("charts")
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id!: number;

  @Column("varchar", { name: "name", length: 250 })
  name!: string;

}
