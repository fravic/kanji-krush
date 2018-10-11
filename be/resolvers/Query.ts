import { Context } from '../types';

export const Query = {
  chart: (_, args, ctx: Context, info) => {
    return {
      id: 'abc',
    };
  },
};
