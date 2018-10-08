import { Request } from 'express';

import { Prisma } from '../schema/prisma';

export interface Context {
  db: Prisma;
  request: Request;
}
