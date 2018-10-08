import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    charts: <T = Chart[]>(args: { where?: ChartWhereInput, orderBy?: ChartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataPoints: <T = DataPoint[]>(args: { where?: DataPointWhereInput, orderBy?: DataPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chart: <T = Chart | null>(args: { where: ChartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataPoint: <T = DataPoint | null>(args: { where: DataPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chartsConnection: <T = ChartConnection>(args: { where?: ChartWhereInput, orderBy?: ChartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataPointsConnection: <T = DataPointConnection>(args: { where?: DataPointWhereInput, orderBy?: DataPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createChart: <T = Chart>(args: { data: ChartCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDataPoint: <T = DataPoint>(args: { data: DataPointCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChart: <T = Chart | null>(args: { data: ChartUpdateInput, where: ChartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDataPoint: <T = DataPoint | null>(args: { data: DataPointUpdateInput, where: DataPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChart: <T = Chart | null>(args: { where: ChartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDataPoint: <T = DataPoint | null>(args: { where: DataPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChart: <T = Chart>(args: { where: ChartWhereUniqueInput, create: ChartCreateInput, update: ChartUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDataPoint: <T = DataPoint>(args: { where: DataPointWhereUniqueInput, create: DataPointCreateInput, update: DataPointUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCharts: <T = BatchPayload>(args: { data: ChartUpdateInput, where?: ChartWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDataPoints: <T = BatchPayload>(args: { data: DataPointUpdateInput, where?: DataPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCharts: <T = BatchPayload>(args: { where?: ChartWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDataPoints: <T = BatchPayload>(args: { where?: DataPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    chart: <T = ChartSubscriptionPayload | null>(args: { where?: ChartSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    dataPoint: <T = DataPointSubscriptionPayload | null>(args: { where?: DataPointSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Chart: (where?: ChartWhereInput) => Promise<boolean>
  DataPoint: (where?: DataPointWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateChart {
  count: Int!
}

type AggregateDataPoint {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Chart implements Node {
  id: ID!
  slug: String!
  name: String
  yAxisName: String
  dataPoints(where: DataPointWhereInput, orderBy: DataPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataPoint!]
}

"""A connection to a list of items."""
type ChartConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChartEdge]!
  aggregate: AggregateChart!
}

input ChartCreateInput {
  slug: String!
  name: String
  yAxisName: String
  dataPoints: DataPointCreateManyInput
}

"""An edge in a connection."""
type ChartEdge {
  """The item at the end of the edge."""
  node: Chart!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChartOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  name_ASC
  name_DESC
  yAxisName_ASC
  yAxisName_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ChartPreviousValues {
  id: ID!
  slug: String!
  name: String
  yAxisName: String
}

type ChartSubscriptionPayload {
  mutation: MutationType!
  node: Chart
  updatedFields: [String!]
  previousValues: ChartPreviousValues
}

input ChartSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChartSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChartSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChartSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChartWhereInput
}

input ChartUpdateInput {
  slug: String
  name: String
  yAxisName: String
  dataPoints: DataPointUpdateManyInput
}

input ChartWhereInput {
  """Logical AND on all given filters."""
  AND: [ChartWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChartWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChartWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  yAxisName: String

  """All values that are not equal to given value."""
  yAxisName_not: String

  """All values that are contained in given list."""
  yAxisName_in: [String!]

  """All values that are not contained in given list."""
  yAxisName_not_in: [String!]

  """All values less than the given value."""
  yAxisName_lt: String

  """All values less than or equal the given value."""
  yAxisName_lte: String

  """All values greater than the given value."""
  yAxisName_gt: String

  """All values greater than or equal the given value."""
  yAxisName_gte: String

  """All values containing the given string."""
  yAxisName_contains: String

  """All values not containing the given string."""
  yAxisName_not_contains: String

  """All values starting with the given string."""
  yAxisName_starts_with: String

  """All values not starting with the given string."""
  yAxisName_not_starts_with: String

  """All values ending with the given string."""
  yAxisName_ends_with: String

  """All values not ending with the given string."""
  yAxisName_not_ends_with: String
  dataPoints_every: DataPointWhereInput
  dataPoints_some: DataPointWhereInput
  dataPoints_none: DataPointWhereInput
}

input ChartWhereUniqueInput {
  id: ID
  slug: String
}

type DataPoint implements Node {
  id: ID!
  dateTime: DateTime!
  value: Float!
}

"""A connection to a list of items."""
type DataPointConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DataPointEdge]!
  aggregate: AggregateDataPoint!
}

input DataPointCreateInput {
  dateTime: DateTime!
  value: Float!
}

input DataPointCreateManyInput {
  create: [DataPointCreateInput!]
  connect: [DataPointWhereUniqueInput!]
}

"""An edge in a connection."""
type DataPointEdge {
  """The item at the end of the edge."""
  node: DataPoint!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DataPointOrderByInput {
  id_ASC
  id_DESC
  dateTime_ASC
  dateTime_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DataPointPreviousValues {
  id: ID!
  dateTime: DateTime!
  value: Float!
}

type DataPointSubscriptionPayload {
  mutation: MutationType!
  node: DataPoint
  updatedFields: [String!]
  previousValues: DataPointPreviousValues
}

input DataPointSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DataPointSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DataPointSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DataPointSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DataPointWhereInput
}

input DataPointUpdateDataInput {
  dateTime: DateTime
  value: Float
}

input DataPointUpdateInput {
  dateTime: DateTime
  value: Float
}

input DataPointUpdateManyInput {
  create: [DataPointCreateInput!]
  connect: [DataPointWhereUniqueInput!]
  disconnect: [DataPointWhereUniqueInput!]
  delete: [DataPointWhereUniqueInput!]
  update: [DataPointUpdateWithWhereUniqueNestedInput!]
  upsert: [DataPointUpsertWithWhereUniqueNestedInput!]
}

input DataPointUpdateWithWhereUniqueNestedInput {
  where: DataPointWhereUniqueInput!
  data: DataPointUpdateDataInput!
}

input DataPointUpsertWithWhereUniqueNestedInput {
  where: DataPointWhereUniqueInput!
  update: DataPointUpdateDataInput!
  create: DataPointCreateInput!
}

input DataPointWhereInput {
  """Logical AND on all given filters."""
  AND: [DataPointWhereInput!]

  """Logical OR on all given filters."""
  OR: [DataPointWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DataPointWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  dateTime: DateTime

  """All values that are not equal to given value."""
  dateTime_not: DateTime

  """All values that are contained in given list."""
  dateTime_in: [DateTime!]

  """All values that are not contained in given list."""
  dateTime_not_in: [DateTime!]

  """All values less than the given value."""
  dateTime_lt: DateTime

  """All values less than or equal the given value."""
  dateTime_lte: DateTime

  """All values greater than the given value."""
  dateTime_gt: DateTime

  """All values greater than or equal the given value."""
  dateTime_gte: DateTime
  value: Float

  """All values that are not equal to given value."""
  value_not: Float

  """All values that are contained in given list."""
  value_in: [Float!]

  """All values that are not contained in given list."""
  value_not_in: [Float!]

  """All values less than the given value."""
  value_lt: Float

  """All values less than or equal the given value."""
  value_lte: Float

  """All values greater than the given value."""
  value_gt: Float

  """All values greater than or equal the given value."""
  value_gte: Float
}

input DataPointWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createChart(data: ChartCreateInput!): Chart!
  createDataPoint(data: DataPointCreateInput!): DataPoint!
  updateChart(data: ChartUpdateInput!, where: ChartWhereUniqueInput!): Chart
  updateDataPoint(data: DataPointUpdateInput!, where: DataPointWhereUniqueInput!): DataPoint
  deleteChart(where: ChartWhereUniqueInput!): Chart
  deleteDataPoint(where: DataPointWhereUniqueInput!): DataPoint
  upsertChart(where: ChartWhereUniqueInput!, create: ChartCreateInput!, update: ChartUpdateInput!): Chart!
  upsertDataPoint(where: DataPointWhereUniqueInput!, create: DataPointCreateInput!, update: DataPointUpdateInput!): DataPoint!
  updateManyCharts(data: ChartUpdateInput!, where: ChartWhereInput): BatchPayload!
  updateManyDataPoints(data: DataPointUpdateInput!, where: DataPointWhereInput): BatchPayload!
  deleteManyCharts(where: ChartWhereInput): BatchPayload!
  deleteManyDataPoints(where: DataPointWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  charts(where: ChartWhereInput, orderBy: ChartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chart]!
  dataPoints(where: DataPointWhereInput, orderBy: DataPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataPoint]!
  chart(where: ChartWhereUniqueInput!): Chart
  dataPoint(where: DataPointWhereUniqueInput!): DataPoint
  chartsConnection(where: ChartWhereInput, orderBy: ChartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChartConnection!
  dataPointsConnection(where: DataPointWhereInput, orderBy: DataPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DataPointConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  chart(where: ChartSubscriptionWhereInput): ChartSubscriptionPayload
  dataPoint(where: DataPointSubscriptionWhereInput): DataPointSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ChartOrderByInput =   'id_ASC' |
  'id_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'name_ASC' |
  'name_DESC' |
  'yAxisName_ASC' |
  'yAxisName_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DataPointOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dateTime_ASC' |
  'dateTime_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface ChartCreateInput {
  slug: String
  name?: String
  yAxisName?: String
  dataPoints?: DataPointCreateManyInput
}

export interface ChartWhereUniqueInput {
  id?: ID_Input
  slug?: String
}

export interface ChartWhereInput {
  AND?: ChartWhereInput[] | ChartWhereInput
  OR?: ChartWhereInput[] | ChartWhereInput
  NOT?: ChartWhereInput[] | ChartWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  yAxisName?: String
  yAxisName_not?: String
  yAxisName_in?: String[] | String
  yAxisName_not_in?: String[] | String
  yAxisName_lt?: String
  yAxisName_lte?: String
  yAxisName_gt?: String
  yAxisName_gte?: String
  yAxisName_contains?: String
  yAxisName_not_contains?: String
  yAxisName_starts_with?: String
  yAxisName_not_starts_with?: String
  yAxisName_ends_with?: String
  yAxisName_not_ends_with?: String
  dataPoints_every?: DataPointWhereInput
  dataPoints_some?: DataPointWhereInput
  dataPoints_none?: DataPointWhereInput
}

export interface DataPointWhereUniqueInput {
  id?: ID_Input
}

export interface ChartSubscriptionWhereInput {
  AND?: ChartSubscriptionWhereInput[] | ChartSubscriptionWhereInput
  OR?: ChartSubscriptionWhereInput[] | ChartSubscriptionWhereInput
  NOT?: ChartSubscriptionWhereInput[] | ChartSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChartWhereInput
}

export interface DataPointUpdateWithWhereUniqueNestedInput {
  where: DataPointWhereUniqueInput
  data: DataPointUpdateDataInput
}

export interface DataPointUpdateInput {
  dateTime?: DateTime
  value?: Float
}

export interface DataPointCreateManyInput {
  create?: DataPointCreateInput[] | DataPointCreateInput
  connect?: DataPointWhereUniqueInput[] | DataPointWhereUniqueInput
}

export interface DataPointCreateInput {
  dateTime: DateTime
  value: Float
}

export interface ChartUpdateInput {
  slug?: String
  name?: String
  yAxisName?: String
  dataPoints?: DataPointUpdateManyInput
}

export interface DataPointUpdateManyInput {
  create?: DataPointCreateInput[] | DataPointCreateInput
  connect?: DataPointWhereUniqueInput[] | DataPointWhereUniqueInput
  disconnect?: DataPointWhereUniqueInput[] | DataPointWhereUniqueInput
  delete?: DataPointWhereUniqueInput[] | DataPointWhereUniqueInput
  update?: DataPointUpdateWithWhereUniqueNestedInput[] | DataPointUpdateWithWhereUniqueNestedInput
  upsert?: DataPointUpsertWithWhereUniqueNestedInput[] | DataPointUpsertWithWhereUniqueNestedInput
}

export interface DataPointSubscriptionWhereInput {
  AND?: DataPointSubscriptionWhereInput[] | DataPointSubscriptionWhereInput
  OR?: DataPointSubscriptionWhereInput[] | DataPointSubscriptionWhereInput
  NOT?: DataPointSubscriptionWhereInput[] | DataPointSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DataPointWhereInput
}

export interface DataPointUpsertWithWhereUniqueNestedInput {
  where: DataPointWhereUniqueInput
  update: DataPointUpdateDataInput
  create: DataPointCreateInput
}

export interface DataPointWhereInput {
  AND?: DataPointWhereInput[] | DataPointWhereInput
  OR?: DataPointWhereInput[] | DataPointWhereInput
  NOT?: DataPointWhereInput[] | DataPointWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  dateTime?: DateTime
  dateTime_not?: DateTime
  dateTime_in?: DateTime[] | DateTime
  dateTime_not_in?: DateTime[] | DateTime
  dateTime_lt?: DateTime
  dateTime_lte?: DateTime
  dateTime_gt?: DateTime
  dateTime_gte?: DateTime
  value?: Float
  value_not?: Float
  value_in?: Float[] | Float
  value_not_in?: Float[] | Float
  value_lt?: Float
  value_lte?: Float
  value_gt?: Float
  value_gte?: Float
}

export interface DataPointUpdateDataInput {
  dateTime?: DateTime
  value?: Float
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface DataPointEdge {
  node: DataPoint
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ChartConnection {
  pageInfo: PageInfo
  edges: ChartEdge[]
  aggregate: AggregateChart
}

export interface ChartSubscriptionPayload {
  mutation: MutationType
  node?: Chart
  updatedFields?: String[]
  previousValues?: ChartPreviousValues
}

export interface DataPoint extends Node {
  id: ID_Output
  dateTime: DateTime
  value: Float
}

export interface DataPointPreviousValues {
  id: ID_Output
  dateTime: DateTime
  value: Float
}

export interface AggregateChart {
  count: Int
}

export interface ChartPreviousValues {
  id: ID_Output
  slug: String
  name?: String
  yAxisName?: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateDataPoint {
  count: Int
}

export interface Chart extends Node {
  id: ID_Output
  slug: String
  name?: String
  yAxisName?: String
  dataPoints?: DataPoint[]
}

/*
 * An edge in a connection.

 */
export interface ChartEdge {
  node: Chart
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface DataPointConnection {
  pageInfo: PageInfo
  edges: DataPointEdge[]
  aggregate: AggregateDataPoint
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface DataPointSubscriptionPayload {
  mutation: MutationType
  node?: DataPoint
  updatedFields?: String[]
  previousValues?: DataPointPreviousValues
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

export type DateTime = Date | string