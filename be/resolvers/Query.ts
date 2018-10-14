import { Chart } from '../entities/Chart';
import { Context } from '../types';

export const Query = {
  chart: async (_, args, ctx: Context) => {
    const chartRepo = ctx.db.getRepository(Chart);
    return await chartRepo.findOne({ slug: args.chartSlug }, { relations: ["dataPoints"] });
  },
};
