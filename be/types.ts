import { Request } from 'express';
import { Connection } from 'typeorm';

export interface Context {
  request: Request;
  db: Connection;
}
