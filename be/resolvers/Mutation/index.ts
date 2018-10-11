import { Context } from '../../types';

export const Mutation = {
  addDataToChart: async (_, args, ctx: Context, info) => {
    return ctx.db.mutation.updateChart(
      {
        data: {
          dataPoints: {
            create: {
              dateTime: args.dateTime,
              value: args.value,
            },
          },
        },
        where: {
          slug: args.chartSlug,
        },
      },
      info,
    );
  },

  createChart: async (_, args, ctx: Context, info) => {
    return ctx.db.mutation.createChart(
      {
        data: {
          slug: Math.random().toString(),
        },
      },
      info,
    );
  },

  renameChart: async (_, args, ctx: Context, info) => {
    return ctx.db.mutation.updateChart(
      {
        data: {
          name: args.chartName,
        },
        where: {
          slug: args.chartSlug,
        },
      },
      info,
    );
  },
};
