import { Chart } from '../../entities/Chart';
import { DataPoint } from '../../entities/DataPoint';
import { GQLMutationTypeResolver } from '../../schema/graphqlTypes';
import { Context } from '../../types';
import { generateSlug } from '../../utils/mnemonic';

export const Mutation: GQLMutationTypeResolver = {
  addDataToChart: async (_, args, ctx: Context, info) => {
    const chartRepo = ctx.db.getRepository(Chart);
    const chart = await chartRepo.findOne({ slug: args.chartSlug });

    const dataPointRepo = ctx.db.getRepository(DataPoint);
    const dataPoint = dataPointRepo.create();
    dataPoint.dateTime = args.dateTime;
    dataPoint.value = args.value;
    dataPoint.chart = chart;
    await dataPointRepo.save(dataPoint);

    const updatedChart = await chartRepo.findOne({ slug: args.chartSlug }, { relations: ["dataPoints"] });
    return updatedChart;
  },

  createChart: async (_, args, ctx: Context, info) => {
    const chartRepo = ctx.db.getRepository(Chart);
    const chart = chartRepo.create({
      slug: generateSlug(4),
    });
    await chartRepo.save(chart);
    return chart;
  },

  renameChart: async (_, args, ctx: Context, info) => {
    const chartRepo = ctx.db.getRepository(Chart);
    const chart = await chartRepo.findOne({ slug: args.chartSlug });
    chart.name = args.chartName;
    await chartRepo.save(chart);
    return chart;
  },
};
