import { Context } from '../types';

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}
