/* tslint:disable */
import * as Http from 'http';
import * as Https from 'https';
import * as request from 'supertest';

import app, { prisma } from './graphqlTestServer';
import { Prisma } from '../../schema/prisma';

// Force cast prisma to use our generated types
const db = ((prisma as any) as Prisma);

describe('ChartCat GraphQL server', async () => {

  const timeout = ms => new Promise(res => setTimeout(res, ms))

  let server: Http.Server | Https.Server;
  let testChartSlug: string;

  beforeAll(async () => {
    server = await app.start({
      endpoint: '/graphql',
    });
  });
  afterAll(async () => {
    await server.close();
    // Wait 1 second for server to terminate
    await timeout(1000);
  });

  const sendGQLQuery = async (query, variables, expectedResponse, authToken = null, expectedStatusCode = 200) => {
    const req = request(app.express)
      .post('/graphql')
      .type('json');
    if (authToken) {
      req.set('Authorization', `Bearer ${authToken}`);
    }
    const res = await req.send({ query, variables });
    expect(res.body).toMatchObject(expectedResponse);
    expect(res.status).toEqual(expectedStatusCode);
    return res;
  }

  test('It allows anyone to create a chart', async (done) => {
    const res = await sendGQLQuery(`
      mutation() {
        createChart {
          chart {
            slug
            url
          }
        }
      }
    `, {
    }, {
      data: {
        createChart: {
          chart: {
            slug: expect.stringMatching(/.+/),
            url: expect.stringMatching(/.+/),
          }
        }
      },
    });
    testChartSlug = res.body.data.createChart.slug;
    done();
  });

  test('It allows anyone to rename a chart', async (done) => {
    await sendGQLQuery(`
      mutation($chartSlug: String!, $chartName: String!) {
        renameChart(chartSlug: $chartSlug, chartName: $chartName) {
          chart {
            slug
            url
            name
          }
        }
      }
    `, {
      chartSlug: testChartSlug,
      chartName: 'FE Build Size'
    }, {
      data: {
        renameChart: {
          chart: {
            slug: expect.stringMatching(/.+/),
            url: expect.stringMatching(/.+/),
            name: expect.stringMatching('FE Build Size'),
          }
        }
      },
    });
    done();
  });

  test('It allows anyone to add data to a chart', async (done) => {
    await sendGQLQuery(`
      mutation($chartSlug: String!, value: Number!, dateTime: String) {
        addDataToChart(chartSlug: $chartSlug, value: $value, dateTime: $dateTime) {
          chart {
            slug
            url
            name
            dataPoints {
              dateTime
              value
            }
          }
        }
      }
    `, {
      chartSlug: testChartSlug,
      value: 10,
      dateTime: '2018-08-30T12:00:00Z',
    }, {
      data: {
        addDataToChart: {
          chart: {
            slug: expect.stringMatching(/.+/),
            url: expect.stringMatching(/.+/),
            name: expect.stringMatching(/.+/),
            dataPoints: [
              {
                dateTime: '2018-08-30T12:00:00Z',
                value: 10,
              }
            ]
          }
        }
      },
    });
    done();
  });

  test('It allows anyone to view a chart', async (done) => {
    await sendGQLQuery(`
      query($chartSlug: String!) {
        chart(chartSlug: $chartSlug) {
          slug
          url
          name
          dataPoints {
            dateTime
            value
          }
        }
      }
    `, {
      chartSlug: testChartSlug,
    }, {
      data: {
        chart: {
          slug: expect.stringMatching(/.+/),
          url: expect.stringMatching(/.+/),
          name: expect.stringMatching(/.+/),
          dataPoints: [
            {
              dateTime: '2018-08-30T12:00:00Z',
              value: 10,
            }
          ]
        }
      },
    });
    done();
  });

  test('It throws an error if a chart cannot be found for the given slug', async (done) => {
    await sendGQLQuery(`
      query($chartSlug: String!) {
        chart(chartSlug: $chartSlug) {
          slug
          url
          name
          dataPoints {
            dateTime
            value
          }
        }
      }
    `, {
      chartSlug: 'INVALID-SLUG',
    }, {
      data: null,
      errors: [{
        message: expect.stringMatching(/.+/),
      }],
    });
    done();
  });
});
