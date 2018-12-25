import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Chart } from "./Chart";

@Entity()
export class DataPoint {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public dateTime: string;

  @Column()
  public value: number;

  @ManyToOne(type => Chart)
  public chart: Chart;
}
