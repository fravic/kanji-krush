import * as jwt from 'jsonwebtoken';

import { MeetupAccount, User } from '../../schema/prisma';
import { Context } from '../types';

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}
