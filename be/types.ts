import { Request } from "express";
import { Connection } from "typeorm";

export interface Context {
  req: Request;
  db: Connection;
}
