import { Context } from '../types';

export const Query = {
  chart: (_, args, ctx: Context, info) => {
    return ctx.db.query.chart({
      where: {
        slug: args.chartSlug,
      },
    }, info);
  },
};
