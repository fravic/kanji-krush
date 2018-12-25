import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from "typeorm";

import { DataPoint } from "./DataPoint";

@Entity()
export class Chart {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @PrimaryColumn({ unique: true })
  public slug: string;

  @Column({ nullable: true })
  public name: string;

  @OneToMany(type => DataPoint, dataPoint => dataPoint.chart)
  public dataPoints: DataPoint[];
}
