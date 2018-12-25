/* tslint:disable */
/**
 * GraphQL server tests
 * Runs against the database specified in process.env.TESTPGDATABASE
 */
// tslint:disable:no-console
import { Express } from "express";
import * as Http from "http";
import * as Https from "https";
import * as request from "supertest";

import { startServer } from "../server";

describe("GraphQL Server", async () => {
  let server: Http.Server | Https.Server;
  let testChartSlug: string;

  beforeAll(async () => {
    console.log("Starting app server...");
    server = await startServer({
      backendOnly: true,
      database: process.env.TESTPGDATABASE
    });
  });

  afterAll(async () => {
    await server.close();
    console.log("Done!");
  });

  const sendGQLQuery = async (
    query,
    variables,
    expectedResponse,
    authToken = null,
    expectedStatusCode = 200
  ) => {
    const req = request(server)
      .post("/graphql")
      .type("json");
    if (authToken) {
      req.set("Authorization", `Bearer ${authToken}`);
    }
    const res = await req.send({ query, variables });
    expect(res.body).toMatchObject(expectedResponse);
    expect(res.status).toEqual(expectedStatusCode);
    return res;
  };

  test("It allows anyone to create a chart", async done => {
    const res = await sendGQLQuery(
      `
      mutation {
        createChart {
          slug
        }
      }
    `,
      {
        /* No variables */
      },
      {
        data: {
          createChart: {
            slug: expect.stringMatching(/.+/)
          }
        }
      }
    );
    testChartSlug = res.body.data.createChart.slug;
    done();
  });

  test("It allows anyone to rename a chart", async done => {
    await sendGQLQuery(
      `
      mutation($chartSlug: String!, $chartName: String!) {
        renameChart(chartSlug: $chartSlug, chartName: $chartName) {
          slug
          name
        }
      }
    `,
      {
        chartSlug: testChartSlug,
        chartName: "FE Build Size"
      },
      {
        data: {
          renameChart: {
            slug: expect.stringMatching(/.+/),
            name: expect.stringMatching("FE Build Size")
          }
        }
      }
    );
    done();
  });

  test("It allows anyone to add data to a chart", async done => {
    await sendGQLQuery(
      `
      mutation($chartSlug: String!, $value: Float!, $dateTime: String!) {
        addDataToChart(chartSlug: $chartSlug, value: $value, dateTime: $dateTime) {
          slug
          name
          dataPoints {
            dateTime
            value
          }
        }
      }
    `,
      {
        chartSlug: testChartSlug,
        value: 10,
        dateTime: "2018-08-30T12:00:00.000Z"
      },
      {
        data: {
          addDataToChart: {
            slug: expect.stringMatching(/.+/),
            name: expect.stringMatching(/.+/),
            dataPoints: [
              {
                dateTime: "2018-08-30T12:00:00.000Z",
                value: 10
              }
            ]
          }
        }
      }
    );
    done();
  });

  test("It allows anyone to view a chart", async done => {
    await sendGQLQuery(
      `
      query($chartSlug: String!) {
        chart(chartSlug: $chartSlug) {
          slug
          name
          dataPoints {
            dateTime
            value
          }
        }
      }
    `,
      {
        chartSlug: testChartSlug
      },
      {
        data: {
          chart: {
            slug: expect.stringMatching(/.+/),
            name: expect.stringMatching(/.+/),
            dataPoints: [
              {
                dateTime: "2018-08-30T12:00:00.000Z",
                value: 10
              }
            ]
          }
        }
      }
    );
    done();
  });
});
