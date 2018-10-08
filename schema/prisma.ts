import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    unverifiedMeetupAccounts: <T = UnverifiedMeetupAccount[]>(args: { where?: UnverifiedMeetupAccountWhereInput, orderBy?: UnverifiedMeetupAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupAccounts: <T = MeetupAccount[]>(args: { where?: MeetupAccountWhereInput, orderBy?: MeetupAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    names: <T = Name[]>(args: { where?: NameWhereInput, orderBy?: NameOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    adminAccounts: <T = AdminAccount[]>(args: { where?: AdminAccountWhereInput, orderBy?: AdminAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupGroups: <T = MeetupGroup[]>(args: { where?: MeetupGroupWhereInput, orderBy?: MeetupGroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupPools: <T = MeetupPool[]>(args: { where?: MeetupPoolWhereInput, orderBy?: MeetupPoolOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetings: <T = Meeting[]>(args: { where?: MeetingWhereInput, orderBy?: MeetingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    attendances: <T = Attendance[]>(args: { where?: AttendanceWhereInput, orderBy?: AttendanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeslots: <T = Timeslot[]>(args: { where?: TimeslotWhereInput, orderBy?: TimeslotOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    unverifiedMeetupAccount: <T = UnverifiedMeetupAccount | null>(args: { where: UnverifiedMeetupAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupAccount: <T = MeetupAccount | null>(args: { where: MeetupAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    adminAccount: <T = AdminAccount | null>(args: { where: AdminAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupGroup: <T = MeetupGroup | null>(args: { where: MeetupGroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupPool: <T = MeetupPool | null>(args: { where: MeetupPoolWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meeting: <T = Meeting | null>(args: { where: MeetingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    attendance: <T = Attendance | null>(args: { where: AttendanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeslot: <T = Timeslot | null>(args: { where: TimeslotWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    unverifiedMeetupAccountsConnection: <T = UnverifiedMeetupAccountConnection>(args: { where?: UnverifiedMeetupAccountWhereInput, orderBy?: UnverifiedMeetupAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupAccountsConnection: <T = MeetupAccountConnection>(args: { where?: MeetupAccountWhereInput, orderBy?: MeetupAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    namesConnection: <T = NameConnection>(args: { where?: NameWhereInput, orderBy?: NameOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    adminAccountsConnection: <T = AdminAccountConnection>(args: { where?: AdminAccountWhereInput, orderBy?: AdminAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupGroupsConnection: <T = MeetupGroupConnection>(args: { where?: MeetupGroupWhereInput, orderBy?: MeetupGroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetupPoolsConnection: <T = MeetupPoolConnection>(args: { where?: MeetupPoolWhereInput, orderBy?: MeetupPoolOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    meetingsConnection: <T = MeetingConnection>(args: { where?: MeetingWhereInput, orderBy?: MeetingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    attendancesConnection: <T = AttendanceConnection>(args: { where?: AttendanceWhereInput, orderBy?: AttendanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeslotsConnection: <T = TimeslotConnection>(args: { where?: TimeslotWhereInput, orderBy?: TimeslotOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUnverifiedMeetupAccount: <T = UnverifiedMeetupAccount>(args: { data: UnverifiedMeetupAccountCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMeetupAccount: <T = MeetupAccount>(args: { data: MeetupAccountCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createName: <T = Name>(args: { data: NameCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAdminAccount: <T = AdminAccount>(args: { data: AdminAccountCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMeetupGroup: <T = MeetupGroup>(args: { data: MeetupGroupCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMeetupPool: <T = MeetupPool>(args: { data: MeetupPoolCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMeeting: <T = Meeting>(args: { data: MeetingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAttendance: <T = Attendance>(args: { data: AttendanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTimeslot: <T = Timeslot>(args: { data: TimeslotCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUnverifiedMeetupAccount: <T = UnverifiedMeetupAccount | null>(args: { data: UnverifiedMeetupAccountUpdateInput, where: UnverifiedMeetupAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMeetupAccount: <T = MeetupAccount | null>(args: { data: MeetupAccountUpdateInput, where: MeetupAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAdminAccount: <T = AdminAccount | null>(args: { data: AdminAccountUpdateInput, where: AdminAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMeetupGroup: <T = MeetupGroup | null>(args: { data: MeetupGroupUpdateInput, where: MeetupGroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMeetupPool: <T = MeetupPool | null>(args: { data: MeetupPoolUpdateInput, where: MeetupPoolWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMeeting: <T = Meeting | null>(args: { data: MeetingUpdateInput, where: MeetingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAttendance: <T = Attendance | null>(args: { data: AttendanceUpdateInput, where: AttendanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTimeslot: <T = Timeslot | null>(args: { data: TimeslotUpdateInput, where: TimeslotWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUnverifiedMeetupAccount: <T = UnverifiedMeetupAccount | null>(args: { where: UnverifiedMeetupAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMeetupAccount: <T = MeetupAccount | null>(args: { where: MeetupAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAdminAccount: <T = AdminAccount | null>(args: { where: AdminAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMeetupGroup: <T = MeetupGroup | null>(args: { where: MeetupGroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMeetupPool: <T = MeetupPool | null>(args: { where: MeetupPoolWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMeeting: <T = Meeting | null>(args: { where: MeetingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAttendance: <T = Attendance | null>(args: { where: AttendanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTimeslot: <T = Timeslot | null>(args: { where: TimeslotWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUnverifiedMeetupAccount: <T = UnverifiedMeetupAccount>(args: { where: UnverifiedMeetupAccountWhereUniqueInput, create: UnverifiedMeetupAccountCreateInput, update: UnverifiedMeetupAccountUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMeetupAccount: <T = MeetupAccount>(args: { where: MeetupAccountWhereUniqueInput, create: MeetupAccountCreateInput, update: MeetupAccountUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAdminAccount: <T = AdminAccount>(args: { where: AdminAccountWhereUniqueInput, create: AdminAccountCreateInput, update: AdminAccountUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMeetupGroup: <T = MeetupGroup>(args: { where: MeetupGroupWhereUniqueInput, create: MeetupGroupCreateInput, update: MeetupGroupUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMeetupPool: <T = MeetupPool>(args: { where: MeetupPoolWhereUniqueInput, create: MeetupPoolCreateInput, update: MeetupPoolUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMeeting: <T = Meeting>(args: { where: MeetingWhereUniqueInput, create: MeetingCreateInput, update: MeetingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAttendance: <T = Attendance>(args: { where: AttendanceWhereUniqueInput, create: AttendanceCreateInput, update: AttendanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTimeslot: <T = Timeslot>(args: { where: TimeslotWhereUniqueInput, create: TimeslotCreateInput, update: TimeslotUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUnverifiedMeetupAccounts: <T = BatchPayload>(args: { data: UnverifiedMeetupAccountUpdateInput, where?: UnverifiedMeetupAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMeetupAccounts: <T = BatchPayload>(args: { data: MeetupAccountUpdateInput, where?: MeetupAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNames: <T = BatchPayload>(args: { data: NameUpdateInput, where?: NameWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAdminAccounts: <T = BatchPayload>(args: { data: AdminAccountUpdateInput, where?: AdminAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMeetupGroups: <T = BatchPayload>(args: { data: MeetupGroupUpdateInput, where?: MeetupGroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMeetupPools: <T = BatchPayload>(args: { data: MeetupPoolUpdateInput, where?: MeetupPoolWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMeetings: <T = BatchPayload>(args: { data: MeetingUpdateInput, where?: MeetingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAttendances: <T = BatchPayload>(args: { data: AttendanceUpdateInput, where?: AttendanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTimeslots: <T = BatchPayload>(args: { data: TimeslotUpdateInput, where?: TimeslotWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUnverifiedMeetupAccounts: <T = BatchPayload>(args: { where?: UnverifiedMeetupAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMeetupAccounts: <T = BatchPayload>(args: { where?: MeetupAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNames: <T = BatchPayload>(args: { where?: NameWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAdminAccounts: <T = BatchPayload>(args: { where?: AdminAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMeetupGroups: <T = BatchPayload>(args: { where?: MeetupGroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMeetupPools: <T = BatchPayload>(args: { where?: MeetupPoolWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMeetings: <T = BatchPayload>(args: { where?: MeetingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAttendances: <T = BatchPayload>(args: { where?: AttendanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTimeslots: <T = BatchPayload>(args: { where?: TimeslotWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    unverifiedMeetupAccount: <T = UnverifiedMeetupAccountSubscriptionPayload | null>(args: { where?: UnverifiedMeetupAccountSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    meetupAccount: <T = MeetupAccountSubscriptionPayload | null>(args: { where?: MeetupAccountSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    name: <T = NameSubscriptionPayload | null>(args: { where?: NameSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    adminAccount: <T = AdminAccountSubscriptionPayload | null>(args: { where?: AdminAccountSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    meetupGroup: <T = MeetupGroupSubscriptionPayload | null>(args: { where?: MeetupGroupSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    meetupPool: <T = MeetupPoolSubscriptionPayload | null>(args: { where?: MeetupPoolSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    meeting: <T = MeetingSubscriptionPayload | null>(args: { where?: MeetingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    attendance: <T = AttendanceSubscriptionPayload | null>(args: { where?: AttendanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    timeslot: <T = TimeslotSubscriptionPayload | null>(args: { where?: TimeslotSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  UnverifiedMeetupAccount: (where?: UnverifiedMeetupAccountWhereInput) => Promise<boolean>
  MeetupAccount: (where?: MeetupAccountWhereInput) => Promise<boolean>
  Name: (where?: NameWhereInput) => Promise<boolean>
  AdminAccount: (where?: AdminAccountWhereInput) => Promise<boolean>
  MeetupGroup: (where?: MeetupGroupWhereInput) => Promise<boolean>
  MeetupPool: (where?: MeetupPoolWhereInput) => Promise<boolean>
  Meeting: (where?: MeetingWhereInput) => Promise<boolean>
  Attendance: (where?: AttendanceWhereInput) => Promise<boolean>
  Timeslot: (where?: TimeslotWhereInput) => Promise<boolean>
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

const typeDefs = `type AdminAccount implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  group(where: MeetupGroupWhereInput): MeetupGroup!
  canAddAdmins: Boolean!
}

"""A connection to a list of items."""
type AdminAccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AdminAccountEdge]!
  aggregate: AggregateAdminAccount!
}

input AdminAccountCreateInput {
  canAddAdmins: Boolean
  user: UserCreateOneWithoutAdminAccountsInput!
  group: MeetupGroupCreateOneWithoutAdminsInput!
}

input AdminAccountCreateManyWithoutGroupInput {
  create: [AdminAccountCreateWithoutGroupInput!]
  connect: [AdminAccountWhereUniqueInput!]
}

input AdminAccountCreateManyWithoutUserInput {
  create: [AdminAccountCreateWithoutUserInput!]
  connect: [AdminAccountWhereUniqueInput!]
}

input AdminAccountCreateWithoutGroupInput {
  canAddAdmins: Boolean
  user: UserCreateOneWithoutAdminAccountsInput!
}

input AdminAccountCreateWithoutUserInput {
  canAddAdmins: Boolean
  group: MeetupGroupCreateOneWithoutAdminsInput!
}

"""An edge in a connection."""
type AdminAccountEdge {
  """The item at the end of the edge."""
  node: AdminAccount!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AdminAccountOrderByInput {
  id_ASC
  id_DESC
  canAddAdmins_ASC
  canAddAdmins_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AdminAccountPreviousValues {
  id: ID!
  canAddAdmins: Boolean!
}

type AdminAccountSubscriptionPayload {
  mutation: MutationType!
  node: AdminAccount
  updatedFields: [String!]
  previousValues: AdminAccountPreviousValues
}

input AdminAccountSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AdminAccountSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdminAccountSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdminAccountSubscriptionWhereInput!]

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
  node: AdminAccountWhereInput
}

input AdminAccountUpdateInput {
  canAddAdmins: Boolean
  user: UserUpdateOneWithoutAdminAccountsInput
  group: MeetupGroupUpdateOneWithoutAdminsInput
}

input AdminAccountUpdateManyWithoutGroupInput {
  create: [AdminAccountCreateWithoutGroupInput!]
  connect: [AdminAccountWhereUniqueInput!]
  disconnect: [AdminAccountWhereUniqueInput!]
  delete: [AdminAccountWhereUniqueInput!]
  update: [AdminAccountUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [AdminAccountUpsertWithWhereUniqueWithoutGroupInput!]
}

input AdminAccountUpdateManyWithoutUserInput {
  create: [AdminAccountCreateWithoutUserInput!]
  connect: [AdminAccountWhereUniqueInput!]
  disconnect: [AdminAccountWhereUniqueInput!]
  delete: [AdminAccountWhereUniqueInput!]
  update: [AdminAccountUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [AdminAccountUpsertWithWhereUniqueWithoutUserInput!]
}

input AdminAccountUpdateWithoutGroupDataInput {
  canAddAdmins: Boolean
  user: UserUpdateOneWithoutAdminAccountsInput
}

input AdminAccountUpdateWithoutUserDataInput {
  canAddAdmins: Boolean
  group: MeetupGroupUpdateOneWithoutAdminsInput
}

input AdminAccountUpdateWithWhereUniqueWithoutGroupInput {
  where: AdminAccountWhereUniqueInput!
  data: AdminAccountUpdateWithoutGroupDataInput!
}

input AdminAccountUpdateWithWhereUniqueWithoutUserInput {
  where: AdminAccountWhereUniqueInput!
  data: AdminAccountUpdateWithoutUserDataInput!
}

input AdminAccountUpsertWithWhereUniqueWithoutGroupInput {
  where: AdminAccountWhereUniqueInput!
  update: AdminAccountUpdateWithoutGroupDataInput!
  create: AdminAccountCreateWithoutGroupInput!
}

input AdminAccountUpsertWithWhereUniqueWithoutUserInput {
  where: AdminAccountWhereUniqueInput!
  update: AdminAccountUpdateWithoutUserDataInput!
  create: AdminAccountCreateWithoutUserInput!
}

input AdminAccountWhereInput {
  """Logical AND on all given filters."""
  AND: [AdminAccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdminAccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdminAccountWhereInput!]
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
  canAddAdmins: Boolean

  """All values that are not equal to given value."""
  canAddAdmins_not: Boolean
  user: UserWhereInput
  group: MeetupGroupWhereInput
}

input AdminAccountWhereUniqueInput {
  id: ID
}

type AggregateAdminAccount {
  count: Int!
}

type AggregateAttendance {
  count: Int!
}

type AggregateMeeting {
  count: Int!
}

type AggregateMeetupAccount {
  count: Int!
}

type AggregateMeetupGroup {
  count: Int!
}

type AggregateMeetupPool {
  count: Int!
}

type AggregateName {
  count: Int!
}

type AggregateTimeslot {
  count: Int!
}

type AggregateUnverifiedMeetupAccount {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Attendance implements Node {
  id: ID!
  member(where: MeetupAccountWhereInput): MeetupAccount!
  state: AttendanceState!
}

"""A connection to a list of items."""
type AttendanceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AttendanceEdge]!
  aggregate: AggregateAttendance!
}

input AttendanceCreateInput {
  state: AttendanceState!
  member: MeetupAccountCreateOneInput!
}

input AttendanceCreateManyInput {
  create: [AttendanceCreateInput!]
  connect: [AttendanceWhereUniqueInput!]
}

"""An edge in a connection."""
type AttendanceEdge {
  """The item at the end of the edge."""
  node: Attendance!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AttendanceOrderByInput {
  id_ASC
  id_DESC
  state_ASC
  state_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AttendancePreviousValues {
  id: ID!
  state: AttendanceState!
}

enum AttendanceState {
  SCHEDULED
  RESCHEDULED
  CONFIRMED
  CANCELLED
  ATTENDED
}

type AttendanceSubscriptionPayload {
  mutation: MutationType!
  node: Attendance
  updatedFields: [String!]
  previousValues: AttendancePreviousValues
}

input AttendanceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AttendanceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AttendanceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AttendanceSubscriptionWhereInput!]

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
  node: AttendanceWhereInput
}

input AttendanceUpdateDataInput {
  state: AttendanceState
  member: MeetupAccountUpdateOneInput
}

input AttendanceUpdateInput {
  state: AttendanceState
  member: MeetupAccountUpdateOneInput
}

input AttendanceUpdateManyInput {
  create: [AttendanceCreateInput!]
  connect: [AttendanceWhereUniqueInput!]
  disconnect: [AttendanceWhereUniqueInput!]
  delete: [AttendanceWhereUniqueInput!]
  update: [AttendanceUpdateWithWhereUniqueNestedInput!]
  upsert: [AttendanceUpsertWithWhereUniqueNestedInput!]
}

input AttendanceUpdateWithWhereUniqueNestedInput {
  where: AttendanceWhereUniqueInput!
  data: AttendanceUpdateDataInput!
}

input AttendanceUpsertWithWhereUniqueNestedInput {
  where: AttendanceWhereUniqueInput!
  update: AttendanceUpdateDataInput!
  create: AttendanceCreateInput!
}

input AttendanceWhereInput {
  """Logical AND on all given filters."""
  AND: [AttendanceWhereInput!]

  """Logical OR on all given filters."""
  OR: [AttendanceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AttendanceWhereInput!]
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
  state: AttendanceState

  """All values that are not equal to given value."""
  state_not: AttendanceState

  """All values that are contained in given list."""
  state_in: [AttendanceState!]

  """All values that are not contained in given list."""
  state_not_in: [AttendanceState!]
  member: MeetupAccountWhereInput
}

input AttendanceWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

enum DayOfWeek {
  SUN
  MON
  TUE
  WED
  THU
  FRI
  SAT
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Meeting implements Node {
  id: ID!
  attendances(where: AttendanceWhereInput, orderBy: AttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attendance!]
  dateTime: DateTime!
}

"""A connection to a list of items."""
type MeetingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MeetingEdge]!
  aggregate: AggregateMeeting!
}

input MeetingCreateInput {
  dateTime: DateTime!
  attendances: AttendanceCreateManyInput
}

"""An edge in a connection."""
type MeetingEdge {
  """The item at the end of the edge."""
  node: Meeting!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MeetingOrderByInput {
  id_ASC
  id_DESC
  dateTime_ASC
  dateTime_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MeetingPreviousValues {
  id: ID!
  dateTime: DateTime!
}

type MeetingSubscriptionPayload {
  mutation: MutationType!
  node: Meeting
  updatedFields: [String!]
  previousValues: MeetingPreviousValues
}

input MeetingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MeetingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MeetingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MeetingSubscriptionWhereInput!]

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
  node: MeetingWhereInput
}

input MeetingUpdateInput {
  dateTime: DateTime
  attendances: AttendanceUpdateManyInput
}

input MeetingWhereInput {
  """Logical AND on all given filters."""
  AND: [MeetingWhereInput!]

  """Logical OR on all given filters."""
  OR: [MeetingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MeetingWhereInput!]
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
  attendances_every: AttendanceWhereInput
  attendances_some: AttendanceWhereInput
  attendances_none: AttendanceWhereInput
}

input MeetingWhereUniqueInput {
  id: ID
}

type MeetupAccount implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  name(where: NameWhereInput): Name
  onlineProfileUrl: String
  bio: String
  meetupGroup(where: MeetupGroupWhereInput): MeetupGroup!
  approved: Boolean!
  disabled: Boolean!
  banned: Boolean!
  timelotPreferences(where: TimeslotWhereInput, orderBy: TimeslotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Timeslot!]
}

"""A connection to a list of items."""
type MeetupAccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MeetupAccountEdge]!
  aggregate: AggregateMeetupAccount!
}

input MeetupAccountCreateInput {
  onlineProfileUrl: String
  bio: String
  approved: Boolean
  disabled: Boolean
  banned: Boolean
  user: UserCreateOneWithoutMeetupAccountsInput!
  name: NameCreateOneInput
  meetupGroup: MeetupGroupCreateOneWithoutMembersInput!
  timelotPreferences: TimeslotCreateManyInput
}

input MeetupAccountCreateManyInput {
  create: [MeetupAccountCreateInput!]
  connect: [MeetupAccountWhereUniqueInput!]
}

input MeetupAccountCreateManyWithoutMeetupGroupInput {
  create: [MeetupAccountCreateWithoutMeetupGroupInput!]
  connect: [MeetupAccountWhereUniqueInput!]
}

input MeetupAccountCreateManyWithoutUserInput {
  create: [MeetupAccountCreateWithoutUserInput!]
  connect: [MeetupAccountWhereUniqueInput!]
}

input MeetupAccountCreateOneInput {
  create: MeetupAccountCreateInput
  connect: MeetupAccountWhereUniqueInput
}

input MeetupAccountCreateWithoutMeetupGroupInput {
  onlineProfileUrl: String
  bio: String
  approved: Boolean
  disabled: Boolean
  banned: Boolean
  user: UserCreateOneWithoutMeetupAccountsInput!
  name: NameCreateOneInput
  timelotPreferences: TimeslotCreateManyInput
}

input MeetupAccountCreateWithoutUserInput {
  onlineProfileUrl: String
  bio: String
  approved: Boolean
  disabled: Boolean
  banned: Boolean
  name: NameCreateOneInput
  meetupGroup: MeetupGroupCreateOneWithoutMembersInput!
  timelotPreferences: TimeslotCreateManyInput
}

"""An edge in a connection."""
type MeetupAccountEdge {
  """The item at the end of the edge."""
  node: MeetupAccount!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MeetupAccountOrderByInput {
  id_ASC
  id_DESC
  onlineProfileUrl_ASC
  onlineProfileUrl_DESC
  bio_ASC
  bio_DESC
  approved_ASC
  approved_DESC
  disabled_ASC
  disabled_DESC
  banned_ASC
  banned_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MeetupAccountPreviousValues {
  id: ID!
  onlineProfileUrl: String
  bio: String
  approved: Boolean!
  disabled: Boolean!
  banned: Boolean!
}

type MeetupAccountSubscriptionPayload {
  mutation: MutationType!
  node: MeetupAccount
  updatedFields: [String!]
  previousValues: MeetupAccountPreviousValues
}

input MeetupAccountSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MeetupAccountSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MeetupAccountSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MeetupAccountSubscriptionWhereInput!]

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
  node: MeetupAccountWhereInput
}

input MeetupAccountUpdateDataInput {
  onlineProfileUrl: String
  bio: String
  approved: Boolean
  disabled: Boolean
  banned: Boolean
  user: UserUpdateOneWithoutMeetupAccountsInput
  name: NameUpdateOneInput
  meetupGroup: MeetupGroupUpdateOneWithoutMembersInput
  timelotPreferences: TimeslotUpdateManyInput
}

input MeetupAccountUpdateInput {
  onlineProfileUrl: String
  bio: String
  approved: Boolean
  disabled: Boolean
  banned: Boolean
  user: UserUpdateOneWithoutMeetupAccountsInput
  name: NameUpdateOneInput
  meetupGroup: MeetupGroupUpdateOneWithoutMembersInput
  timelotPreferences: TimeslotUpdateManyInput
}

input MeetupAccountUpdateManyInput {
  create: [MeetupAccountCreateInput!]
  connect: [MeetupAccountWhereUniqueInput!]
  disconnect: [MeetupAccountWhereUniqueInput!]
  delete: [MeetupAccountWhereUniqueInput!]
  update: [MeetupAccountUpdateWithWhereUniqueNestedInput!]
  upsert: [MeetupAccountUpsertWithWhereUniqueNestedInput!]
}

input MeetupAccountUpdateManyWithoutMeetupGroupInput {
  create: [MeetupAccountCreateWithoutMeetupGroupInput!]
  connect: [MeetupAccountWhereUniqueInput!]
  disconnect: [MeetupAccountWhereUniqueInput!]
  delete: [MeetupAccountWhereUniqueInput!]
  update: [MeetupAccountUpdateWithWhereUniqueWithoutMeetupGroupInput!]
  upsert: [MeetupAccountUpsertWithWhereUniqueWithoutMeetupGroupInput!]
}

input MeetupAccountUpdateManyWithoutUserInput {
  create: [MeetupAccountCreateWithoutUserInput!]
  connect: [MeetupAccountWhereUniqueInput!]
  disconnect: [MeetupAccountWhereUniqueInput!]
  delete: [MeetupAccountWhereUniqueInput!]
  update: [MeetupAccountUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [MeetupAccountUpsertWithWhereUniqueWithoutUserInput!]
}

input MeetupAccountUpdateOneInput {
  create: MeetupAccountCreateInput
  connect: MeetupAccountWhereUniqueInput
  delete: Boolean
  update: MeetupAccountUpdateDataInput
  upsert: MeetupAccountUpsertNestedInput
}

input MeetupAccountUpdateWithoutMeetupGroupDataInput {
  onlineProfileUrl: String
  bio: String
  approved: Boolean
  disabled: Boolean
  banned: Boolean
  user: UserUpdateOneWithoutMeetupAccountsInput
  name: NameUpdateOneInput
  timelotPreferences: TimeslotUpdateManyInput
}

input MeetupAccountUpdateWithoutUserDataInput {
  onlineProfileUrl: String
  bio: String
  approved: Boolean
  disabled: Boolean
  banned: Boolean
  name: NameUpdateOneInput
  meetupGroup: MeetupGroupUpdateOneWithoutMembersInput
  timelotPreferences: TimeslotUpdateManyInput
}

input MeetupAccountUpdateWithWhereUniqueNestedInput {
  where: MeetupAccountWhereUniqueInput!
  data: MeetupAccountUpdateDataInput!
}

input MeetupAccountUpdateWithWhereUniqueWithoutMeetupGroupInput {
  where: MeetupAccountWhereUniqueInput!
  data: MeetupAccountUpdateWithoutMeetupGroupDataInput!
}

input MeetupAccountUpdateWithWhereUniqueWithoutUserInput {
  where: MeetupAccountWhereUniqueInput!
  data: MeetupAccountUpdateWithoutUserDataInput!
}

input MeetupAccountUpsertNestedInput {
  update: MeetupAccountUpdateDataInput!
  create: MeetupAccountCreateInput!
}

input MeetupAccountUpsertWithWhereUniqueNestedInput {
  where: MeetupAccountWhereUniqueInput!
  update: MeetupAccountUpdateDataInput!
  create: MeetupAccountCreateInput!
}

input MeetupAccountUpsertWithWhereUniqueWithoutMeetupGroupInput {
  where: MeetupAccountWhereUniqueInput!
  update: MeetupAccountUpdateWithoutMeetupGroupDataInput!
  create: MeetupAccountCreateWithoutMeetupGroupInput!
}

input MeetupAccountUpsertWithWhereUniqueWithoutUserInput {
  where: MeetupAccountWhereUniqueInput!
  update: MeetupAccountUpdateWithoutUserDataInput!
  create: MeetupAccountCreateWithoutUserInput!
}

input MeetupAccountWhereInput {
  """Logical AND on all given filters."""
  AND: [MeetupAccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [MeetupAccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MeetupAccountWhereInput!]
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
  onlineProfileUrl: String

  """All values that are not equal to given value."""
  onlineProfileUrl_not: String

  """All values that are contained in given list."""
  onlineProfileUrl_in: [String!]

  """All values that are not contained in given list."""
  onlineProfileUrl_not_in: [String!]

  """All values less than the given value."""
  onlineProfileUrl_lt: String

  """All values less than or equal the given value."""
  onlineProfileUrl_lte: String

  """All values greater than the given value."""
  onlineProfileUrl_gt: String

  """All values greater than or equal the given value."""
  onlineProfileUrl_gte: String

  """All values containing the given string."""
  onlineProfileUrl_contains: String

  """All values not containing the given string."""
  onlineProfileUrl_not_contains: String

  """All values starting with the given string."""
  onlineProfileUrl_starts_with: String

  """All values not starting with the given string."""
  onlineProfileUrl_not_starts_with: String

  """All values ending with the given string."""
  onlineProfileUrl_ends_with: String

  """All values not ending with the given string."""
  onlineProfileUrl_not_ends_with: String
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  approved: Boolean

  """All values that are not equal to given value."""
  approved_not: Boolean
  disabled: Boolean

  """All values that are not equal to given value."""
  disabled_not: Boolean
  banned: Boolean

  """All values that are not equal to given value."""
  banned_not: Boolean
  user: UserWhereInput
  name: NameWhereInput
  meetupGroup: MeetupGroupWhereInput
  timelotPreferences_every: TimeslotWhereInput
  timelotPreferences_some: TimeslotWhereInput
  timelotPreferences_none: TimeslotWhereInput
}

input MeetupAccountWhereUniqueInput {
  id: ID
}

type MeetupGroup implements Node {
  id: ID!
  name: String!
  admins(where: AdminAccountWhereInput, orderBy: AdminAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AdminAccount!]
  members(where: MeetupAccountWhereInput, orderBy: MeetupAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MeetupAccount!]
  active: Boolean!
  minUsersToActivate: Int!
  timeslotOptions(where: TimeslotWhereInput, orderBy: TimeslotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Timeslot!]
  pools(where: MeetupPoolWhereInput, orderBy: MeetupPoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MeetupPool!]
  onlineProfileUrlTypes: [OnlineProfileUrlType!]
  isForTesting: Boolean!
}

"""A connection to a list of items."""
type MeetupGroupConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MeetupGroupEdge]!
  aggregate: AggregateMeetupGroup!
}

input MeetupGroupCreateInput {
  name: String!
  active: Boolean
  minUsersToActivate: Int!
  isForTesting: Boolean!
  onlineProfileUrlTypes: MeetupGroupCreateonlineProfileUrlTypesInput
  admins: AdminAccountCreateManyWithoutGroupInput
  members: MeetupAccountCreateManyWithoutMeetupGroupInput
  timeslotOptions: TimeslotCreateManyInput
  pools: MeetupPoolCreateManyInput
}

input MeetupGroupCreateOneInput {
  create: MeetupGroupCreateInput
  connect: MeetupGroupWhereUniqueInput
}

input MeetupGroupCreateOneWithoutAdminsInput {
  create: MeetupGroupCreateWithoutAdminsInput
  connect: MeetupGroupWhereUniqueInput
}

input MeetupGroupCreateOneWithoutMembersInput {
  create: MeetupGroupCreateWithoutMembersInput
  connect: MeetupGroupWhereUniqueInput
}

input MeetupGroupCreateonlineProfileUrlTypesInput {
  set: [OnlineProfileUrlType!]
}

input MeetupGroupCreateWithoutAdminsInput {
  name: String!
  active: Boolean
  minUsersToActivate: Int!
  isForTesting: Boolean!
  onlineProfileUrlTypes: MeetupGroupCreateonlineProfileUrlTypesInput
  members: MeetupAccountCreateManyWithoutMeetupGroupInput
  timeslotOptions: TimeslotCreateManyInput
  pools: MeetupPoolCreateManyInput
}

input MeetupGroupCreateWithoutMembersInput {
  name: String!
  active: Boolean
  minUsersToActivate: Int!
  isForTesting: Boolean!
  onlineProfileUrlTypes: MeetupGroupCreateonlineProfileUrlTypesInput
  admins: AdminAccountCreateManyWithoutGroupInput
  timeslotOptions: TimeslotCreateManyInput
  pools: MeetupPoolCreateManyInput
}

"""An edge in a connection."""
type MeetupGroupEdge {
  """The item at the end of the edge."""
  node: MeetupGroup!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MeetupGroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  active_ASC
  active_DESC
  minUsersToActivate_ASC
  minUsersToActivate_DESC
  isForTesting_ASC
  isForTesting_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MeetupGroupPreviousValues {
  id: ID!
  name: String!
  active: Boolean!
  minUsersToActivate: Int!
  onlineProfileUrlTypes: [OnlineProfileUrlType!]
  isForTesting: Boolean!
}

type MeetupGroupSubscriptionPayload {
  mutation: MutationType!
  node: MeetupGroup
  updatedFields: [String!]
  previousValues: MeetupGroupPreviousValues
}

input MeetupGroupSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MeetupGroupSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MeetupGroupSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MeetupGroupSubscriptionWhereInput!]

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
  node: MeetupGroupWhereInput
}

input MeetupGroupUpdateDataInput {
  name: String
  active: Boolean
  minUsersToActivate: Int
  isForTesting: Boolean
  onlineProfileUrlTypes: MeetupGroupUpdateonlineProfileUrlTypesInput
  admins: AdminAccountUpdateManyWithoutGroupInput
  members: MeetupAccountUpdateManyWithoutMeetupGroupInput
  timeslotOptions: TimeslotUpdateManyInput
  pools: MeetupPoolUpdateManyInput
}

input MeetupGroupUpdateInput {
  name: String
  active: Boolean
  minUsersToActivate: Int
  isForTesting: Boolean
  onlineProfileUrlTypes: MeetupGroupUpdateonlineProfileUrlTypesInput
  admins: AdminAccountUpdateManyWithoutGroupInput
  members: MeetupAccountUpdateManyWithoutMeetupGroupInput
  timeslotOptions: TimeslotUpdateManyInput
  pools: MeetupPoolUpdateManyInput
}

input MeetupGroupUpdateOneInput {
  create: MeetupGroupCreateInput
  connect: MeetupGroupWhereUniqueInput
  delete: Boolean
  update: MeetupGroupUpdateDataInput
  upsert: MeetupGroupUpsertNestedInput
}

input MeetupGroupUpdateOneWithoutAdminsInput {
  create: MeetupGroupCreateWithoutAdminsInput
  connect: MeetupGroupWhereUniqueInput
  delete: Boolean
  update: MeetupGroupUpdateWithoutAdminsDataInput
  upsert: MeetupGroupUpsertWithoutAdminsInput
}

input MeetupGroupUpdateOneWithoutMembersInput {
  create: MeetupGroupCreateWithoutMembersInput
  connect: MeetupGroupWhereUniqueInput
  delete: Boolean
  update: MeetupGroupUpdateWithoutMembersDataInput
  upsert: MeetupGroupUpsertWithoutMembersInput
}

input MeetupGroupUpdateonlineProfileUrlTypesInput {
  set: [OnlineProfileUrlType!]
}

input MeetupGroupUpdateWithoutAdminsDataInput {
  name: String
  active: Boolean
  minUsersToActivate: Int
  isForTesting: Boolean
  onlineProfileUrlTypes: MeetupGroupUpdateonlineProfileUrlTypesInput
  members: MeetupAccountUpdateManyWithoutMeetupGroupInput
  timeslotOptions: TimeslotUpdateManyInput
  pools: MeetupPoolUpdateManyInput
}

input MeetupGroupUpdateWithoutMembersDataInput {
  name: String
  active: Boolean
  minUsersToActivate: Int
  isForTesting: Boolean
  onlineProfileUrlTypes: MeetupGroupUpdateonlineProfileUrlTypesInput
  admins: AdminAccountUpdateManyWithoutGroupInput
  timeslotOptions: TimeslotUpdateManyInput
  pools: MeetupPoolUpdateManyInput
}

input MeetupGroupUpsertNestedInput {
  update: MeetupGroupUpdateDataInput!
  create: MeetupGroupCreateInput!
}

input MeetupGroupUpsertWithoutAdminsInput {
  update: MeetupGroupUpdateWithoutAdminsDataInput!
  create: MeetupGroupCreateWithoutAdminsInput!
}

input MeetupGroupUpsertWithoutMembersInput {
  update: MeetupGroupUpdateWithoutMembersDataInput!
  create: MeetupGroupCreateWithoutMembersInput!
}

input MeetupGroupWhereInput {
  """Logical AND on all given filters."""
  AND: [MeetupGroupWhereInput!]

  """Logical OR on all given filters."""
  OR: [MeetupGroupWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MeetupGroupWhereInput!]
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
  active: Boolean

  """All values that are not equal to given value."""
  active_not: Boolean
  minUsersToActivate: Int

  """All values that are not equal to given value."""
  minUsersToActivate_not: Int

  """All values that are contained in given list."""
  minUsersToActivate_in: [Int!]

  """All values that are not contained in given list."""
  minUsersToActivate_not_in: [Int!]

  """All values less than the given value."""
  minUsersToActivate_lt: Int

  """All values less than or equal the given value."""
  minUsersToActivate_lte: Int

  """All values greater than the given value."""
  minUsersToActivate_gt: Int

  """All values greater than or equal the given value."""
  minUsersToActivate_gte: Int
  isForTesting: Boolean

  """All values that are not equal to given value."""
  isForTesting_not: Boolean
  admins_every: AdminAccountWhereInput
  admins_some: AdminAccountWhereInput
  admins_none: AdminAccountWhereInput
  members_every: MeetupAccountWhereInput
  members_some: MeetupAccountWhereInput
  members_none: MeetupAccountWhereInput
  timeslotOptions_every: TimeslotWhereInput
  timeslotOptions_some: TimeslotWhereInput
  timeslotOptions_none: TimeslotWhereInput
  pools_every: MeetupPoolWhereInput
  pools_some: MeetupPoolWhereInput
  pools_none: MeetupPoolWhereInput
}

input MeetupGroupWhereUniqueInput {
  id: ID
}

type MeetupPool implements Node {
  id: ID!
  members(where: MeetupAccountWhereInput, orderBy: MeetupAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MeetupAccount!]
  dateTime: DateTime!
}

"""A connection to a list of items."""
type MeetupPoolConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MeetupPoolEdge]!
  aggregate: AggregateMeetupPool!
}

input MeetupPoolCreateInput {
  dateTime: DateTime!
  members: MeetupAccountCreateManyInput
}

input MeetupPoolCreateManyInput {
  create: [MeetupPoolCreateInput!]
  connect: [MeetupPoolWhereUniqueInput!]
}

"""An edge in a connection."""
type MeetupPoolEdge {
  """The item at the end of the edge."""
  node: MeetupPool!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MeetupPoolOrderByInput {
  id_ASC
  id_DESC
  dateTime_ASC
  dateTime_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MeetupPoolPreviousValues {
  id: ID!
  dateTime: DateTime!
}

type MeetupPoolSubscriptionPayload {
  mutation: MutationType!
  node: MeetupPool
  updatedFields: [String!]
  previousValues: MeetupPoolPreviousValues
}

input MeetupPoolSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MeetupPoolSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MeetupPoolSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MeetupPoolSubscriptionWhereInput!]

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
  node: MeetupPoolWhereInput
}

input MeetupPoolUpdateDataInput {
  dateTime: DateTime
  members: MeetupAccountUpdateManyInput
}

input MeetupPoolUpdateInput {
  dateTime: DateTime
  members: MeetupAccountUpdateManyInput
}

input MeetupPoolUpdateManyInput {
  create: [MeetupPoolCreateInput!]
  connect: [MeetupPoolWhereUniqueInput!]
  disconnect: [MeetupPoolWhereUniqueInput!]
  delete: [MeetupPoolWhereUniqueInput!]
  update: [MeetupPoolUpdateWithWhereUniqueNestedInput!]
  upsert: [MeetupPoolUpsertWithWhereUniqueNestedInput!]
}

input MeetupPoolUpdateWithWhereUniqueNestedInput {
  where: MeetupPoolWhereUniqueInput!
  data: MeetupPoolUpdateDataInput!
}

input MeetupPoolUpsertWithWhereUniqueNestedInput {
  where: MeetupPoolWhereUniqueInput!
  update: MeetupPoolUpdateDataInput!
  create: MeetupPoolCreateInput!
}

input MeetupPoolWhereInput {
  """Logical AND on all given filters."""
  AND: [MeetupPoolWhereInput!]

  """Logical OR on all given filters."""
  OR: [MeetupPoolWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MeetupPoolWhereInput!]
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
  members_every: MeetupAccountWhereInput
  members_some: MeetupAccountWhereInput
  members_none: MeetupAccountWhereInput
}

input MeetupPoolWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createUnverifiedMeetupAccount(data: UnverifiedMeetupAccountCreateInput!): UnverifiedMeetupAccount!
  createMeetupAccount(data: MeetupAccountCreateInput!): MeetupAccount!
  createName(data: NameCreateInput!): Name!
  createAdminAccount(data: AdminAccountCreateInput!): AdminAccount!
  createMeetupGroup(data: MeetupGroupCreateInput!): MeetupGroup!
  createMeetupPool(data: MeetupPoolCreateInput!): MeetupPool!
  createMeeting(data: MeetingCreateInput!): Meeting!
  createAttendance(data: AttendanceCreateInput!): Attendance!
  createTimeslot(data: TimeslotCreateInput!): Timeslot!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateUnverifiedMeetupAccount(data: UnverifiedMeetupAccountUpdateInput!, where: UnverifiedMeetupAccountWhereUniqueInput!): UnverifiedMeetupAccount
  updateMeetupAccount(data: MeetupAccountUpdateInput!, where: MeetupAccountWhereUniqueInput!): MeetupAccount
  updateAdminAccount(data: AdminAccountUpdateInput!, where: AdminAccountWhereUniqueInput!): AdminAccount
  updateMeetupGroup(data: MeetupGroupUpdateInput!, where: MeetupGroupWhereUniqueInput!): MeetupGroup
  updateMeetupPool(data: MeetupPoolUpdateInput!, where: MeetupPoolWhereUniqueInput!): MeetupPool
  updateMeeting(data: MeetingUpdateInput!, where: MeetingWhereUniqueInput!): Meeting
  updateAttendance(data: AttendanceUpdateInput!, where: AttendanceWhereUniqueInput!): Attendance
  updateTimeslot(data: TimeslotUpdateInput!, where: TimeslotWhereUniqueInput!): Timeslot
  deleteUser(where: UserWhereUniqueInput!): User
  deleteUnverifiedMeetupAccount(where: UnverifiedMeetupAccountWhereUniqueInput!): UnverifiedMeetupAccount
  deleteMeetupAccount(where: MeetupAccountWhereUniqueInput!): MeetupAccount
  deleteAdminAccount(where: AdminAccountWhereUniqueInput!): AdminAccount
  deleteMeetupGroup(where: MeetupGroupWhereUniqueInput!): MeetupGroup
  deleteMeetupPool(where: MeetupPoolWhereUniqueInput!): MeetupPool
  deleteMeeting(where: MeetingWhereUniqueInput!): Meeting
  deleteAttendance(where: AttendanceWhereUniqueInput!): Attendance
  deleteTimeslot(where: TimeslotWhereUniqueInput!): Timeslot
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertUnverifiedMeetupAccount(where: UnverifiedMeetupAccountWhereUniqueInput!, create: UnverifiedMeetupAccountCreateInput!, update: UnverifiedMeetupAccountUpdateInput!): UnverifiedMeetupAccount!
  upsertMeetupAccount(where: MeetupAccountWhereUniqueInput!, create: MeetupAccountCreateInput!, update: MeetupAccountUpdateInput!): MeetupAccount!
  upsertAdminAccount(where: AdminAccountWhereUniqueInput!, create: AdminAccountCreateInput!, update: AdminAccountUpdateInput!): AdminAccount!
  upsertMeetupGroup(where: MeetupGroupWhereUniqueInput!, create: MeetupGroupCreateInput!, update: MeetupGroupUpdateInput!): MeetupGroup!
  upsertMeetupPool(where: MeetupPoolWhereUniqueInput!, create: MeetupPoolCreateInput!, update: MeetupPoolUpdateInput!): MeetupPool!
  upsertMeeting(where: MeetingWhereUniqueInput!, create: MeetingCreateInput!, update: MeetingUpdateInput!): Meeting!
  upsertAttendance(where: AttendanceWhereUniqueInput!, create: AttendanceCreateInput!, update: AttendanceUpdateInput!): Attendance!
  upsertTimeslot(where: TimeslotWhereUniqueInput!, create: TimeslotCreateInput!, update: TimeslotUpdateInput!): Timeslot!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyUnverifiedMeetupAccounts(data: UnverifiedMeetupAccountUpdateInput!, where: UnverifiedMeetupAccountWhereInput): BatchPayload!
  updateManyMeetupAccounts(data: MeetupAccountUpdateInput!, where: MeetupAccountWhereInput): BatchPayload!
  updateManyNames(data: NameUpdateInput!, where: NameWhereInput): BatchPayload!
  updateManyAdminAccounts(data: AdminAccountUpdateInput!, where: AdminAccountWhereInput): BatchPayload!
  updateManyMeetupGroups(data: MeetupGroupUpdateInput!, where: MeetupGroupWhereInput): BatchPayload!
  updateManyMeetupPools(data: MeetupPoolUpdateInput!, where: MeetupPoolWhereInput): BatchPayload!
  updateManyMeetings(data: MeetingUpdateInput!, where: MeetingWhereInput): BatchPayload!
  updateManyAttendances(data: AttendanceUpdateInput!, where: AttendanceWhereInput): BatchPayload!
  updateManyTimeslots(data: TimeslotUpdateInput!, where: TimeslotWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyUnverifiedMeetupAccounts(where: UnverifiedMeetupAccountWhereInput): BatchPayload!
  deleteManyMeetupAccounts(where: MeetupAccountWhereInput): BatchPayload!
  deleteManyNames(where: NameWhereInput): BatchPayload!
  deleteManyAdminAccounts(where: AdminAccountWhereInput): BatchPayload!
  deleteManyMeetupGroups(where: MeetupGroupWhereInput): BatchPayload!
  deleteManyMeetupPools(where: MeetupPoolWhereInput): BatchPayload!
  deleteManyMeetings(where: MeetingWhereInput): BatchPayload!
  deleteManyAttendances(where: AttendanceWhereInput): BatchPayload!
  deleteManyTimeslots(where: TimeslotWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Name {
  firstName: String!
  lastName: String!
}

"""A connection to a list of items."""
type NameConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NameEdge]!
  aggregate: AggregateName!
}

input NameCreateInput {
  firstName: String!
  lastName: String!
}

input NameCreateOneInput {
  create: NameCreateInput
}

"""An edge in a connection."""
type NameEdge {
  """The item at the end of the edge."""
  node: Name!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NameOrderByInput {
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NamePreviousValues {
  firstName: String!
  lastName: String!
}

type NameSubscriptionPayload {
  mutation: MutationType!
  node: Name
  updatedFields: [String!]
  previousValues: NamePreviousValues
}

input NameSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NameSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NameSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NameSubscriptionWhereInput!]

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
  node: NameWhereInput
}

input NameUpdateDataInput {
  firstName: String
  lastName: String
}

input NameUpdateInput {
  firstName: String
  lastName: String
}

input NameUpdateOneInput {
  create: NameCreateInput
  disconnect: Boolean
  delete: Boolean
  update: NameUpdateDataInput
  upsert: NameUpsertNestedInput
}

input NameUpsertNestedInput {
  update: NameUpdateDataInput!
  create: NameCreateInput!
}

input NameWhereInput {
  """Logical AND on all given filters."""
  AND: [NameWhereInput!]

  """Logical OR on all given filters."""
  OR: [NameWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NameWhereInput!]
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

enum OnlineProfileUrlType {
  LINKEDIN
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
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  unverifiedMeetupAccounts(where: UnverifiedMeetupAccountWhereInput, orderBy: UnverifiedMeetupAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UnverifiedMeetupAccount]!
  meetupAccounts(where: MeetupAccountWhereInput, orderBy: MeetupAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MeetupAccount]!
  names(where: NameWhereInput, orderBy: NameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Name]!
  adminAccounts(where: AdminAccountWhereInput, orderBy: AdminAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AdminAccount]!
  meetupGroups(where: MeetupGroupWhereInput, orderBy: MeetupGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MeetupGroup]!
  meetupPools(where: MeetupPoolWhereInput, orderBy: MeetupPoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MeetupPool]!
  meetings(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meeting]!
  attendances(where: AttendanceWhereInput, orderBy: AttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attendance]!
  timeslots(where: TimeslotWhereInput, orderBy: TimeslotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Timeslot]!
  user(where: UserWhereUniqueInput!): User
  unverifiedMeetupAccount(where: UnverifiedMeetupAccountWhereUniqueInput!): UnverifiedMeetupAccount
  meetupAccount(where: MeetupAccountWhereUniqueInput!): MeetupAccount
  adminAccount(where: AdminAccountWhereUniqueInput!): AdminAccount
  meetupGroup(where: MeetupGroupWhereUniqueInput!): MeetupGroup
  meetupPool(where: MeetupPoolWhereUniqueInput!): MeetupPool
  meeting(where: MeetingWhereUniqueInput!): Meeting
  attendance(where: AttendanceWhereUniqueInput!): Attendance
  timeslot(where: TimeslotWhereUniqueInput!): Timeslot
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  unverifiedMeetupAccountsConnection(where: UnverifiedMeetupAccountWhereInput, orderBy: UnverifiedMeetupAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UnverifiedMeetupAccountConnection!
  meetupAccountsConnection(where: MeetupAccountWhereInput, orderBy: MeetupAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeetupAccountConnection!
  namesConnection(where: NameWhereInput, orderBy: NameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NameConnection!
  adminAccountsConnection(where: AdminAccountWhereInput, orderBy: AdminAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdminAccountConnection!
  meetupGroupsConnection(where: MeetupGroupWhereInput, orderBy: MeetupGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeetupGroupConnection!
  meetupPoolsConnection(where: MeetupPoolWhereInput, orderBy: MeetupPoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeetupPoolConnection!
  meetingsConnection(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeetingConnection!
  attendancesConnection(where: AttendanceWhereInput, orderBy: AttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AttendanceConnection!
  timeslotsConnection(where: TimeslotWhereInput, orderBy: TimeslotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimeslotConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  unverifiedMeetupAccount(where: UnverifiedMeetupAccountSubscriptionWhereInput): UnverifiedMeetupAccountSubscriptionPayload
  meetupAccount(where: MeetupAccountSubscriptionWhereInput): MeetupAccountSubscriptionPayload
  name(where: NameSubscriptionWhereInput): NameSubscriptionPayload
  adminAccount(where: AdminAccountSubscriptionWhereInput): AdminAccountSubscriptionPayload
  meetupGroup(where: MeetupGroupSubscriptionWhereInput): MeetupGroupSubscriptionPayload
  meetupPool(where: MeetupPoolSubscriptionWhereInput): MeetupPoolSubscriptionPayload
  meeting(where: MeetingSubscriptionWhereInput): MeetingSubscriptionPayload
  attendance(where: AttendanceSubscriptionWhereInput): AttendanceSubscriptionPayload
  timeslot(where: TimeslotSubscriptionWhereInput): TimeslotSubscriptionPayload
}

type Timeslot implements Node {
  id: ID!
  dayOfWeek: DayOfWeek!
  hour: Int!
  minute: Int!
}

"""A connection to a list of items."""
type TimeslotConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TimeslotEdge]!
  aggregate: AggregateTimeslot!
}

input TimeslotCreateInput {
  dayOfWeek: DayOfWeek!
  hour: Int!
  minute: Int!
}

input TimeslotCreateManyInput {
  create: [TimeslotCreateInput!]
  connect: [TimeslotWhereUniqueInput!]
}

"""An edge in a connection."""
type TimeslotEdge {
  """The item at the end of the edge."""
  node: Timeslot!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TimeslotOrderByInput {
  id_ASC
  id_DESC
  dayOfWeek_ASC
  dayOfWeek_DESC
  hour_ASC
  hour_DESC
  minute_ASC
  minute_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TimeslotPreviousValues {
  id: ID!
  dayOfWeek: DayOfWeek!
  hour: Int!
  minute: Int!
}

type TimeslotSubscriptionPayload {
  mutation: MutationType!
  node: Timeslot
  updatedFields: [String!]
  previousValues: TimeslotPreviousValues
}

input TimeslotSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TimeslotSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimeslotSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimeslotSubscriptionWhereInput!]

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
  node: TimeslotWhereInput
}

input TimeslotUpdateDataInput {
  dayOfWeek: DayOfWeek
  hour: Int
  minute: Int
}

input TimeslotUpdateInput {
  dayOfWeek: DayOfWeek
  hour: Int
  minute: Int
}

input TimeslotUpdateManyInput {
  create: [TimeslotCreateInput!]
  connect: [TimeslotWhereUniqueInput!]
  disconnect: [TimeslotWhereUniqueInput!]
  delete: [TimeslotWhereUniqueInput!]
  update: [TimeslotUpdateWithWhereUniqueNestedInput!]
  upsert: [TimeslotUpsertWithWhereUniqueNestedInput!]
}

input TimeslotUpdateWithWhereUniqueNestedInput {
  where: TimeslotWhereUniqueInput!
  data: TimeslotUpdateDataInput!
}

input TimeslotUpsertWithWhereUniqueNestedInput {
  where: TimeslotWhereUniqueInput!
  update: TimeslotUpdateDataInput!
  create: TimeslotCreateInput!
}

input TimeslotWhereInput {
  """Logical AND on all given filters."""
  AND: [TimeslotWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimeslotWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimeslotWhereInput!]
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
  dayOfWeek: DayOfWeek

  """All values that are not equal to given value."""
  dayOfWeek_not: DayOfWeek

  """All values that are contained in given list."""
  dayOfWeek_in: [DayOfWeek!]

  """All values that are not contained in given list."""
  dayOfWeek_not_in: [DayOfWeek!]
  hour: Int

  """All values that are not equal to given value."""
  hour_not: Int

  """All values that are contained in given list."""
  hour_in: [Int!]

  """All values that are not contained in given list."""
  hour_not_in: [Int!]

  """All values less than the given value."""
  hour_lt: Int

  """All values less than or equal the given value."""
  hour_lte: Int

  """All values greater than the given value."""
  hour_gt: Int

  """All values greater than or equal the given value."""
  hour_gte: Int
  minute: Int

  """All values that are not equal to given value."""
  minute_not: Int

  """All values that are contained in given list."""
  minute_in: [Int!]

  """All values that are not contained in given list."""
  minute_not_in: [Int!]

  """All values less than the given value."""
  minute_lt: Int

  """All values less than or equal the given value."""
  minute_lte: Int

  """All values greater than the given value."""
  minute_gt: Int

  """All values greater than or equal the given value."""
  minute_gte: Int
}

input TimeslotWhereUniqueInput {
  id: ID
}

type UnverifiedMeetupAccount implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  meetupGroup(where: MeetupGroupWhereInput): MeetupGroup!
  onlineProfileUrl: String
}

"""A connection to a list of items."""
type UnverifiedMeetupAccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UnverifiedMeetupAccountEdge]!
  aggregate: AggregateUnverifiedMeetupAccount!
}

input UnverifiedMeetupAccountCreateInput {
  onlineProfileUrl: String
  user: UserCreateOneInput!
  meetupGroup: MeetupGroupCreateOneInput!
}

"""An edge in a connection."""
type UnverifiedMeetupAccountEdge {
  """The item at the end of the edge."""
  node: UnverifiedMeetupAccount!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UnverifiedMeetupAccountOrderByInput {
  id_ASC
  id_DESC
  onlineProfileUrl_ASC
  onlineProfileUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UnverifiedMeetupAccountPreviousValues {
  id: ID!
  onlineProfileUrl: String
}

type UnverifiedMeetupAccountSubscriptionPayload {
  mutation: MutationType!
  node: UnverifiedMeetupAccount
  updatedFields: [String!]
  previousValues: UnverifiedMeetupAccountPreviousValues
}

input UnverifiedMeetupAccountSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UnverifiedMeetupAccountSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UnverifiedMeetupAccountSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UnverifiedMeetupAccountSubscriptionWhereInput!]

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
  node: UnverifiedMeetupAccountWhereInput
}

input UnverifiedMeetupAccountUpdateInput {
  onlineProfileUrl: String
  user: UserUpdateOneInput
  meetupGroup: MeetupGroupUpdateOneInput
}

input UnverifiedMeetupAccountWhereInput {
  """Logical AND on all given filters."""
  AND: [UnverifiedMeetupAccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [UnverifiedMeetupAccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UnverifiedMeetupAccountWhereInput!]
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
  onlineProfileUrl: String

  """All values that are not equal to given value."""
  onlineProfileUrl_not: String

  """All values that are contained in given list."""
  onlineProfileUrl_in: [String!]

  """All values that are not contained in given list."""
  onlineProfileUrl_not_in: [String!]

  """All values less than the given value."""
  onlineProfileUrl_lt: String

  """All values less than or equal the given value."""
  onlineProfileUrl_lte: String

  """All values greater than the given value."""
  onlineProfileUrl_gt: String

  """All values greater than or equal the given value."""
  onlineProfileUrl_gte: String

  """All values containing the given string."""
  onlineProfileUrl_contains: String

  """All values not containing the given string."""
  onlineProfileUrl_not_contains: String

  """All values starting with the given string."""
  onlineProfileUrl_starts_with: String

  """All values not starting with the given string."""
  onlineProfileUrl_not_starts_with: String

  """All values ending with the given string."""
  onlineProfileUrl_ends_with: String

  """All values not ending with the given string."""
  onlineProfileUrl_not_ends_with: String
  user: UserWhereInput
  meetupGroup: MeetupGroupWhereInput
}

input UnverifiedMeetupAccountWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  emailConfirmationToken: String
  meetupAccounts(where: MeetupAccountWhereInput, orderBy: MeetupAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MeetupAccount!]
  adminAccounts(where: AdminAccountWhereInput, orderBy: AdminAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AdminAccount!]
  isEmailConfirmed: Boolean
  isForTesting: Boolean!
  isSuperAdmin: Boolean
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  emailConfirmationToken: String
  isEmailConfirmed: Boolean
  isForTesting: Boolean!
  isSuperAdmin: Boolean
  meetupAccounts: MeetupAccountCreateManyWithoutUserInput
  adminAccounts: AdminAccountCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutAdminAccountsInput {
  create: UserCreateWithoutAdminAccountsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMeetupAccountsInput {
  create: UserCreateWithoutMeetupAccountsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAdminAccountsInput {
  email: String!
  password: String!
  emailConfirmationToken: String
  isEmailConfirmed: Boolean
  isForTesting: Boolean!
  isSuperAdmin: Boolean
  meetupAccounts: MeetupAccountCreateManyWithoutUserInput
}

input UserCreateWithoutMeetupAccountsInput {
  email: String!
  password: String!
  emailConfirmationToken: String
  isEmailConfirmed: Boolean
  isForTesting: Boolean!
  isSuperAdmin: Boolean
  adminAccounts: AdminAccountCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  emailConfirmationToken_ASC
  emailConfirmationToken_DESC
  isEmailConfirmed_ASC
  isEmailConfirmed_DESC
  isForTesting_ASC
  isForTesting_DESC
  isSuperAdmin_ASC
  isSuperAdmin_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  emailConfirmationToken: String
  isEmailConfirmed: Boolean
  isForTesting: Boolean!
  isSuperAdmin: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

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
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  emailConfirmationToken: String
  isEmailConfirmed: Boolean
  isForTesting: Boolean
  isSuperAdmin: Boolean
  meetupAccounts: MeetupAccountUpdateManyWithoutUserInput
  adminAccounts: AdminAccountUpdateManyWithoutUserInput
}

input UserUpdateInput {
  email: String
  password: String
  emailConfirmationToken: String
  isEmailConfirmed: Boolean
  isForTesting: Boolean
  isSuperAdmin: Boolean
  meetupAccounts: MeetupAccountUpdateManyWithoutUserInput
  adminAccounts: AdminAccountUpdateManyWithoutUserInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutAdminAccountsInput {
  create: UserCreateWithoutAdminAccountsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutAdminAccountsDataInput
  upsert: UserUpsertWithoutAdminAccountsInput
}

input UserUpdateOneWithoutMeetupAccountsInput {
  create: UserCreateWithoutMeetupAccountsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutMeetupAccountsDataInput
  upsert: UserUpsertWithoutMeetupAccountsInput
}

input UserUpdateWithoutAdminAccountsDataInput {
  email: String
  password: String
  emailConfirmationToken: String
  isEmailConfirmed: Boolean
  isForTesting: Boolean
  isSuperAdmin: Boolean
  meetupAccounts: MeetupAccountUpdateManyWithoutUserInput
}

input UserUpdateWithoutMeetupAccountsDataInput {
  email: String
  password: String
  emailConfirmationToken: String
  isEmailConfirmed: Boolean
  isForTesting: Boolean
  isSuperAdmin: Boolean
  adminAccounts: AdminAccountUpdateManyWithoutUserInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutAdminAccountsInput {
  update: UserUpdateWithoutAdminAccountsDataInput!
  create: UserCreateWithoutAdminAccountsInput!
}

input UserUpsertWithoutMeetupAccountsInput {
  update: UserUpdateWithoutMeetupAccountsDataInput!
  create: UserCreateWithoutMeetupAccountsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
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
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  emailConfirmationToken: String

  """All values that are not equal to given value."""
  emailConfirmationToken_not: String

  """All values that are contained in given list."""
  emailConfirmationToken_in: [String!]

  """All values that are not contained in given list."""
  emailConfirmationToken_not_in: [String!]

  """All values less than the given value."""
  emailConfirmationToken_lt: String

  """All values less than or equal the given value."""
  emailConfirmationToken_lte: String

  """All values greater than the given value."""
  emailConfirmationToken_gt: String

  """All values greater than or equal the given value."""
  emailConfirmationToken_gte: String

  """All values containing the given string."""
  emailConfirmationToken_contains: String

  """All values not containing the given string."""
  emailConfirmationToken_not_contains: String

  """All values starting with the given string."""
  emailConfirmationToken_starts_with: String

  """All values not starting with the given string."""
  emailConfirmationToken_not_starts_with: String

  """All values ending with the given string."""
  emailConfirmationToken_ends_with: String

  """All values not ending with the given string."""
  emailConfirmationToken_not_ends_with: String
  isEmailConfirmed: Boolean

  """All values that are not equal to given value."""
  isEmailConfirmed_not: Boolean
  isForTesting: Boolean

  """All values that are not equal to given value."""
  isForTesting_not: Boolean
  isSuperAdmin: Boolean

  """All values that are not equal to given value."""
  isSuperAdmin_not: Boolean
  meetupAccounts_every: MeetupAccountWhereInput
  meetupAccounts_some: MeetupAccountWhereInput
  meetupAccounts_none: MeetupAccountWhereInput
  adminAccounts_every: AdminAccountWhereInput
  adminAccounts_some: AdminAccountWhereInput
  adminAccounts_none: AdminAccountWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UnverifiedMeetupAccountOrderByInput =   'id_ASC' |
  'id_DESC' |
  'onlineProfileUrl_ASC' |
  'onlineProfileUrl_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MeetupAccountOrderByInput =   'id_ASC' |
  'id_DESC' |
  'onlineProfileUrl_ASC' |
  'onlineProfileUrl_DESC' |
  'bio_ASC' |
  'bio_DESC' |
  'approved_ASC' |
  'approved_DESC' |
  'disabled_ASC' |
  'disabled_DESC' |
  'banned_ASC' |
  'banned_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OnlineProfileUrlType =   'LINKEDIN'

export type AttendanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'state_ASC' |
  'state_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DayOfWeek =   'SUN' |
  'MON' |
  'TUE' |
  'WED' |
  'THU' |
  'FRI' |
  'SAT'

export type AttendanceState =   'SCHEDULED' |
  'RESCHEDULED' |
  'CONFIRMED' |
  'CANCELLED' |
  'ATTENDED'

export type AdminAccountOrderByInput =   'id_ASC' |
  'id_DESC' |
  'canAddAdmins_ASC' |
  'canAddAdmins_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'emailConfirmationToken_ASC' |
  'emailConfirmationToken_DESC' |
  'isEmailConfirmed_ASC' |
  'isEmailConfirmed_DESC' |
  'isForTesting_ASC' |
  'isForTesting_DESC' |
  'isSuperAdmin_ASC' |
  'isSuperAdmin_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TimeslotOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dayOfWeek_ASC' |
  'dayOfWeek_DESC' |
  'hour_ASC' |
  'hour_DESC' |
  'minute_ASC' |
  'minute_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MeetupPoolOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dateTime_ASC' |
  'dateTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MeetupGroupOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'active_ASC' |
  'active_DESC' |
  'minUsersToActivate_ASC' |
  'minUsersToActivate_DESC' |
  'isForTesting_ASC' |
  'isForTesting_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MeetingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dateTime_ASC' |
  'dateTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NameOrderByInput =   'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
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
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  emailConfirmationToken?: String
  emailConfirmationToken_not?: String
  emailConfirmationToken_in?: String[] | String
  emailConfirmationToken_not_in?: String[] | String
  emailConfirmationToken_lt?: String
  emailConfirmationToken_lte?: String
  emailConfirmationToken_gt?: String
  emailConfirmationToken_gte?: String
  emailConfirmationToken_contains?: String
  emailConfirmationToken_not_contains?: String
  emailConfirmationToken_starts_with?: String
  emailConfirmationToken_not_starts_with?: String
  emailConfirmationToken_ends_with?: String
  emailConfirmationToken_not_ends_with?: String
  isEmailConfirmed?: Boolean
  isEmailConfirmed_not?: Boolean
  isForTesting?: Boolean
  isForTesting_not?: Boolean
  isSuperAdmin?: Boolean
  isSuperAdmin_not?: Boolean
  meetupAccounts_every?: MeetupAccountWhereInput
  meetupAccounts_some?: MeetupAccountWhereInput
  meetupAccounts_none?: MeetupAccountWhereInput
  adminAccounts_every?: AdminAccountWhereInput
  adminAccounts_some?: AdminAccountWhereInput
  adminAccounts_none?: AdminAccountWhereInput
}

export interface MeetupAccountCreateWithoutUserInput {
  onlineProfileUrl?: String
  bio?: String
  approved?: Boolean
  disabled?: Boolean
  banned?: Boolean
  name?: NameCreateOneInput
  meetupGroup: MeetupGroupCreateOneWithoutMembersInput
  timelotPreferences?: TimeslotCreateManyInput
}

export interface AdminAccountUpdateWithWhereUniqueWithoutUserInput {
  where: AdminAccountWhereUniqueInput
  data: AdminAccountUpdateWithoutUserDataInput
}

export interface NameCreateOneInput {
  create?: NameCreateInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  emailConfirmationToken?: String
  isEmailConfirmed?: Boolean
  isForTesting?: Boolean
  isSuperAdmin?: Boolean
  meetupAccounts?: MeetupAccountUpdateManyWithoutUserInput
  adminAccounts?: AdminAccountUpdateManyWithoutUserInput
}

export interface NameCreateInput {
  firstName: String
  lastName: String
}

export interface AttendanceSubscriptionWhereInput {
  AND?: AttendanceSubscriptionWhereInput[] | AttendanceSubscriptionWhereInput
  OR?: AttendanceSubscriptionWhereInput[] | AttendanceSubscriptionWhereInput
  NOT?: AttendanceSubscriptionWhereInput[] | AttendanceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AttendanceWhereInput
}

export interface MeetupGroupCreateOneWithoutMembersInput {
  create?: MeetupGroupCreateWithoutMembersInput
  connect?: MeetupGroupWhereUniqueInput
}

export interface MeetupPoolSubscriptionWhereInput {
  AND?: MeetupPoolSubscriptionWhereInput[] | MeetupPoolSubscriptionWhereInput
  OR?: MeetupPoolSubscriptionWhereInput[] | MeetupPoolSubscriptionWhereInput
  NOT?: MeetupPoolSubscriptionWhereInput[] | MeetupPoolSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MeetupPoolWhereInput
}

export interface MeetupGroupCreateWithoutMembersInput {
  name: String
  active?: Boolean
  minUsersToActivate: Int
  isForTesting: Boolean
  onlineProfileUrlTypes?: MeetupGroupCreateonlineProfileUrlTypesInput
  admins?: AdminAccountCreateManyWithoutGroupInput
  timeslotOptions?: TimeslotCreateManyInput
  pools?: MeetupPoolCreateManyInput
}

export interface AdminAccountSubscriptionWhereInput {
  AND?: AdminAccountSubscriptionWhereInput[] | AdminAccountSubscriptionWhereInput
  OR?: AdminAccountSubscriptionWhereInput[] | AdminAccountSubscriptionWhereInput
  NOT?: AdminAccountSubscriptionWhereInput[] | AdminAccountSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AdminAccountWhereInput
}

export interface MeetupGroupCreateonlineProfileUrlTypesInput {
  set?: OnlineProfileUrlType[] | OnlineProfileUrlType
}

export interface NameSubscriptionWhereInput {
  AND?: NameSubscriptionWhereInput[] | NameSubscriptionWhereInput
  OR?: NameSubscriptionWhereInput[] | NameSubscriptionWhereInput
  NOT?: NameSubscriptionWhereInput[] | NameSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NameWhereInput
}

export interface AdminAccountCreateManyWithoutGroupInput {
  create?: AdminAccountCreateWithoutGroupInput[] | AdminAccountCreateWithoutGroupInput
  connect?: AdminAccountWhereUniqueInput[] | AdminAccountWhereUniqueInput
}

export interface UnverifiedMeetupAccountWhereInput {
  AND?: UnverifiedMeetupAccountWhereInput[] | UnverifiedMeetupAccountWhereInput
  OR?: UnverifiedMeetupAccountWhereInput[] | UnverifiedMeetupAccountWhereInput
  NOT?: UnverifiedMeetupAccountWhereInput[] | UnverifiedMeetupAccountWhereInput
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
  onlineProfileUrl?: String
  onlineProfileUrl_not?: String
  onlineProfileUrl_in?: String[] | String
  onlineProfileUrl_not_in?: String[] | String
  onlineProfileUrl_lt?: String
  onlineProfileUrl_lte?: String
  onlineProfileUrl_gt?: String
  onlineProfileUrl_gte?: String
  onlineProfileUrl_contains?: String
  onlineProfileUrl_not_contains?: String
  onlineProfileUrl_starts_with?: String
  onlineProfileUrl_not_starts_with?: String
  onlineProfileUrl_ends_with?: String
  onlineProfileUrl_not_ends_with?: String
  user?: UserWhereInput
  meetupGroup?: MeetupGroupWhereInput
}

export interface AdminAccountCreateWithoutGroupInput {
  canAddAdmins?: Boolean
  user: UserCreateOneWithoutAdminAccountsInput
}

export interface MeetupAccountSubscriptionWhereInput {
  AND?: MeetupAccountSubscriptionWhereInput[] | MeetupAccountSubscriptionWhereInput
  OR?: MeetupAccountSubscriptionWhereInput[] | MeetupAccountSubscriptionWhereInput
  NOT?: MeetupAccountSubscriptionWhereInput[] | MeetupAccountSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MeetupAccountWhereInput
}

export interface UserCreateOneWithoutAdminAccountsInput {
  create?: UserCreateWithoutAdminAccountsInput
  connect?: UserWhereUniqueInput
}

export interface MeetupGroupWhereInput {
  AND?: MeetupGroupWhereInput[] | MeetupGroupWhereInput
  OR?: MeetupGroupWhereInput[] | MeetupGroupWhereInput
  NOT?: MeetupGroupWhereInput[] | MeetupGroupWhereInput
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
  active?: Boolean
  active_not?: Boolean
  minUsersToActivate?: Int
  minUsersToActivate_not?: Int
  minUsersToActivate_in?: Int[] | Int
  minUsersToActivate_not_in?: Int[] | Int
  minUsersToActivate_lt?: Int
  minUsersToActivate_lte?: Int
  minUsersToActivate_gt?: Int
  minUsersToActivate_gte?: Int
  isForTesting?: Boolean
  isForTesting_not?: Boolean
  admins_every?: AdminAccountWhereInput
  admins_some?: AdminAccountWhereInput
  admins_none?: AdminAccountWhereInput
  members_every?: MeetupAccountWhereInput
  members_some?: MeetupAccountWhereInput
  members_none?: MeetupAccountWhereInput
  timeslotOptions_every?: TimeslotWhereInput
  timeslotOptions_some?: TimeslotWhereInput
  timeslotOptions_none?: TimeslotWhereInput
  pools_every?: MeetupPoolWhereInput
  pools_some?: MeetupPoolWhereInput
  pools_none?: MeetupPoolWhereInput
}

export interface UserCreateWithoutAdminAccountsInput {
  email: String
  password: String
  emailConfirmationToken?: String
  isEmailConfirmed?: Boolean
  isForTesting: Boolean
  isSuperAdmin?: Boolean
  meetupAccounts?: MeetupAccountCreateManyWithoutUserInput
}

export interface AttendanceWhereInput {
  AND?: AttendanceWhereInput[] | AttendanceWhereInput
  OR?: AttendanceWhereInput[] | AttendanceWhereInput
  NOT?: AttendanceWhereInput[] | AttendanceWhereInput
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
  state?: AttendanceState
  state_not?: AttendanceState
  state_in?: AttendanceState[] | AttendanceState
  state_not_in?: AttendanceState[] | AttendanceState
  member?: MeetupAccountWhereInput
}

export interface TimeslotCreateManyInput {
  create?: TimeslotCreateInput[] | TimeslotCreateInput
  connect?: TimeslotWhereUniqueInput[] | TimeslotWhereUniqueInput
}

export interface MeetupAccountWhereInput {
  AND?: MeetupAccountWhereInput[] | MeetupAccountWhereInput
  OR?: MeetupAccountWhereInput[] | MeetupAccountWhereInput
  NOT?: MeetupAccountWhereInput[] | MeetupAccountWhereInput
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
  onlineProfileUrl?: String
  onlineProfileUrl_not?: String
  onlineProfileUrl_in?: String[] | String
  onlineProfileUrl_not_in?: String[] | String
  onlineProfileUrl_lt?: String
  onlineProfileUrl_lte?: String
  onlineProfileUrl_gt?: String
  onlineProfileUrl_gte?: String
  onlineProfileUrl_contains?: String
  onlineProfileUrl_not_contains?: String
  onlineProfileUrl_starts_with?: String
  onlineProfileUrl_not_starts_with?: String
  onlineProfileUrl_ends_with?: String
  onlineProfileUrl_not_ends_with?: String
  bio?: String
  bio_not?: String
  bio_in?: String[] | String
  bio_not_in?: String[] | String
  bio_lt?: String
  bio_lte?: String
  bio_gt?: String
  bio_gte?: String
  bio_contains?: String
  bio_not_contains?: String
  bio_starts_with?: String
  bio_not_starts_with?: String
  bio_ends_with?: String
  bio_not_ends_with?: String
  approved?: Boolean
  approved_not?: Boolean
  disabled?: Boolean
  disabled_not?: Boolean
  banned?: Boolean
  banned_not?: Boolean
  user?: UserWhereInput
  name?: NameWhereInput
  meetupGroup?: MeetupGroupWhereInput
  timelotPreferences_every?: TimeslotWhereInput
  timelotPreferences_some?: TimeslotWhereInput
  timelotPreferences_none?: TimeslotWhereInput
}

export interface TimeslotCreateInput {
  dayOfWeek: DayOfWeek
  hour: Int
  minute: Int
}

export interface NameUpdateInput {
  firstName?: String
  lastName?: String
}

export interface MeetupPoolCreateManyInput {
  create?: MeetupPoolCreateInput[] | MeetupPoolCreateInput
  connect?: MeetupPoolWhereUniqueInput[] | MeetupPoolWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface MeetupPoolCreateInput {
  dateTime: DateTime
  members?: MeetupAccountCreateManyInput
}

export interface MeetupAccountWhereUniqueInput {
  id?: ID_Input
}

export interface MeetupAccountCreateManyInput {
  create?: MeetupAccountCreateInput[] | MeetupAccountCreateInput
  connect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
}

export interface MeetupGroupWhereUniqueInput {
  id?: ID_Input
}

export interface MeetupAccountCreateInput {
  onlineProfileUrl?: String
  bio?: String
  approved?: Boolean
  disabled?: Boolean
  banned?: Boolean
  user: UserCreateOneWithoutMeetupAccountsInput
  name?: NameCreateOneInput
  meetupGroup: MeetupGroupCreateOneWithoutMembersInput
  timelotPreferences?: TimeslotCreateManyInput
}

export interface MeetingWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutMeetupAccountsInput {
  create?: UserCreateWithoutMeetupAccountsInput
  connect?: UserWhereUniqueInput
}

export interface TimeslotWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutMeetupAccountsInput {
  email: String
  password: String
  emailConfirmationToken?: String
  isEmailConfirmed?: Boolean
  isForTesting: Boolean
  isSuperAdmin?: Boolean
  adminAccounts?: AdminAccountCreateManyWithoutUserInput
}

export interface AttendanceUpsertWithWhereUniqueNestedInput {
  where: AttendanceWhereUniqueInput
  update: AttendanceUpdateDataInput
  create: AttendanceCreateInput
}

export interface AdminAccountCreateManyWithoutUserInput {
  create?: AdminAccountCreateWithoutUserInput[] | AdminAccountCreateWithoutUserInput
  connect?: AdminAccountWhereUniqueInput[] | AdminAccountWhereUniqueInput
}

export interface MeetupAccountUpdateOneInput {
  create?: MeetupAccountCreateInput
  connect?: MeetupAccountWhereUniqueInput
  delete?: Boolean
  update?: MeetupAccountUpdateDataInput
  upsert?: MeetupAccountUpsertNestedInput
}

export interface AdminAccountCreateWithoutUserInput {
  canAddAdmins?: Boolean
  group: MeetupGroupCreateOneWithoutAdminsInput
}

export interface AttendanceUpdateWithWhereUniqueNestedInput {
  where: AttendanceWhereUniqueInput
  data: AttendanceUpdateDataInput
}

export interface MeetupGroupCreateOneWithoutAdminsInput {
  create?: MeetupGroupCreateWithoutAdminsInput
  connect?: MeetupGroupWhereUniqueInput
}

export interface MeetingUpdateInput {
  dateTime?: DateTime
  attendances?: AttendanceUpdateManyInput
}

export interface MeetupGroupCreateWithoutAdminsInput {
  name: String
  active?: Boolean
  minUsersToActivate: Int
  isForTesting: Boolean
  onlineProfileUrlTypes?: MeetupGroupCreateonlineProfileUrlTypesInput
  members?: MeetupAccountCreateManyWithoutMeetupGroupInput
  timeslotOptions?: TimeslotCreateManyInput
  pools?: MeetupPoolCreateManyInput
}

export interface MeetupGroupUpdateInput {
  name?: String
  active?: Boolean
  minUsersToActivate?: Int
  isForTesting?: Boolean
  onlineProfileUrlTypes?: MeetupGroupUpdateonlineProfileUrlTypesInput
  admins?: AdminAccountUpdateManyWithoutGroupInput
  members?: MeetupAccountUpdateManyWithoutMeetupGroupInput
  timeslotOptions?: TimeslotUpdateManyInput
  pools?: MeetupPoolUpdateManyInput
}

export interface MeetupAccountCreateManyWithoutMeetupGroupInput {
  create?: MeetupAccountCreateWithoutMeetupGroupInput[] | MeetupAccountCreateWithoutMeetupGroupInput
  connect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
}

export interface MeetupAccountUpdateInput {
  onlineProfileUrl?: String
  bio?: String
  approved?: Boolean
  disabled?: Boolean
  banned?: Boolean
  user?: UserUpdateOneWithoutMeetupAccountsInput
  name?: NameUpdateOneInput
  meetupGroup?: MeetupGroupUpdateOneWithoutMembersInput
  timelotPreferences?: TimeslotUpdateManyInput
}

export interface MeetupAccountCreateWithoutMeetupGroupInput {
  onlineProfileUrl?: String
  bio?: String
  approved?: Boolean
  disabled?: Boolean
  banned?: Boolean
  user: UserCreateOneWithoutMeetupAccountsInput
  name?: NameCreateOneInput
  timelotPreferences?: TimeslotCreateManyInput
}

export interface MeetupGroupUpdateDataInput {
  name?: String
  active?: Boolean
  minUsersToActivate?: Int
  isForTesting?: Boolean
  onlineProfileUrlTypes?: MeetupGroupUpdateonlineProfileUrlTypesInput
  admins?: AdminAccountUpdateManyWithoutGroupInput
  members?: MeetupAccountUpdateManyWithoutMeetupGroupInput
  timeslotOptions?: TimeslotUpdateManyInput
  pools?: MeetupPoolUpdateManyInput
}

export interface UnverifiedMeetupAccountCreateInput {
  onlineProfileUrl?: String
  user: UserCreateOneInput
  meetupGroup: MeetupGroupCreateOneInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface MeetupGroupUpdateOneWithoutAdminsInput {
  create?: MeetupGroupCreateWithoutAdminsInput
  connect?: MeetupGroupWhereUniqueInput
  delete?: Boolean
  update?: MeetupGroupUpdateWithoutAdminsDataInput
  upsert?: MeetupGroupUpsertWithoutAdminsInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface MeetupGroupCreateOneInput {
  create?: MeetupGroupCreateInput
  connect?: MeetupGroupWhereUniqueInput
}

export interface MeetupAccountUpsertWithWhereUniqueWithoutUserInput {
  where: MeetupAccountWhereUniqueInput
  update: MeetupAccountUpdateWithoutUserDataInput
  create: MeetupAccountCreateWithoutUserInput
}

export interface MeetupGroupCreateInput {
  name: String
  active?: Boolean
  minUsersToActivate: Int
  isForTesting: Boolean
  onlineProfileUrlTypes?: MeetupGroupCreateonlineProfileUrlTypesInput
  admins?: AdminAccountCreateManyWithoutGroupInput
  members?: MeetupAccountCreateManyWithoutMeetupGroupInput
  timeslotOptions?: TimeslotCreateManyInput
  pools?: MeetupPoolCreateManyInput
}

export interface MeetupPoolUpsertWithWhereUniqueNestedInput {
  where: MeetupPoolWhereUniqueInput
  update: MeetupPoolUpdateDataInput
  create: MeetupPoolCreateInput
}

export interface AdminAccountCreateInput {
  canAddAdmins?: Boolean
  user: UserCreateOneWithoutAdminAccountsInput
  group: MeetupGroupCreateOneWithoutAdminsInput
}

export interface UserUpsertWithoutMeetupAccountsInput {
  update: UserUpdateWithoutMeetupAccountsDataInput
  create: UserCreateWithoutMeetupAccountsInput
}

export interface MeetingCreateInput {
  dateTime: DateTime
  attendances?: AttendanceCreateManyInput
}

export interface MeetupGroupUpsertWithoutAdminsInput {
  update: MeetupGroupUpdateWithoutAdminsDataInput
  create: MeetupGroupCreateWithoutAdminsInput
}

export interface AttendanceCreateManyInput {
  create?: AttendanceCreateInput[] | AttendanceCreateInput
  connect?: AttendanceWhereUniqueInput[] | AttendanceWhereUniqueInput
}

export interface MeetupAccountUpdateWithoutMeetupGroupDataInput {
  onlineProfileUrl?: String
  bio?: String
  approved?: Boolean
  disabled?: Boolean
  banned?: Boolean
  user?: UserUpdateOneWithoutMeetupAccountsInput
  name?: NameUpdateOneInput
  timelotPreferences?: TimeslotUpdateManyInput
}

export interface AttendanceCreateInput {
  state: AttendanceState
  member: MeetupAccountCreateOneInput
}

export interface MeetupAccountUpdateManyWithoutMeetupGroupInput {
  create?: MeetupAccountCreateWithoutMeetupGroupInput[] | MeetupAccountCreateWithoutMeetupGroupInput
  connect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  disconnect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  delete?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  update?: MeetupAccountUpdateWithWhereUniqueWithoutMeetupGroupInput[] | MeetupAccountUpdateWithWhereUniqueWithoutMeetupGroupInput
  upsert?: MeetupAccountUpsertWithWhereUniqueWithoutMeetupGroupInput[] | MeetupAccountUpsertWithWhereUniqueWithoutMeetupGroupInput
}

export interface MeetupAccountCreateOneInput {
  create?: MeetupAccountCreateInput
  connect?: MeetupAccountWhereUniqueInput
}

export interface UserCreateInput {
  email: String
  password: String
  emailConfirmationToken?: String
  isEmailConfirmed?: Boolean
  isForTesting: Boolean
  isSuperAdmin?: Boolean
  meetupAccounts?: MeetupAccountCreateManyWithoutUserInput
  adminAccounts?: AdminAccountCreateManyWithoutUserInput
}

export interface AdminAccountUpdateWithoutUserDataInput {
  canAddAdmins?: Boolean
  group?: MeetupGroupUpdateOneWithoutAdminsInput
}

export interface TimeslotSubscriptionWhereInput {
  AND?: TimeslotSubscriptionWhereInput[] | TimeslotSubscriptionWhereInput
  OR?: TimeslotSubscriptionWhereInput[] | TimeslotSubscriptionWhereInput
  NOT?: TimeslotSubscriptionWhereInput[] | TimeslotSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TimeslotWhereInput
}

export interface MeetupAccountUpdateManyWithoutUserInput {
  create?: MeetupAccountCreateWithoutUserInput[] | MeetupAccountCreateWithoutUserInput
  connect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  disconnect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  delete?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  update?: MeetupAccountUpdateWithWhereUniqueWithoutUserInput[] | MeetupAccountUpdateWithWhereUniqueWithoutUserInput
  upsert?: MeetupAccountUpsertWithWhereUniqueWithoutUserInput[] | MeetupAccountUpsertWithWhereUniqueWithoutUserInput
}

export interface MeetupGroupSubscriptionWhereInput {
  AND?: MeetupGroupSubscriptionWhereInput[] | MeetupGroupSubscriptionWhereInput
  OR?: MeetupGroupSubscriptionWhereInput[] | MeetupGroupSubscriptionWhereInput
  NOT?: MeetupGroupSubscriptionWhereInput[] | MeetupGroupSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MeetupGroupWhereInput
}

export interface MeetupAccountUpdateWithWhereUniqueWithoutUserInput {
  where: MeetupAccountWhereUniqueInput
  data: MeetupAccountUpdateWithoutUserDataInput
}

export interface TimeslotWhereInput {
  AND?: TimeslotWhereInput[] | TimeslotWhereInput
  OR?: TimeslotWhereInput[] | TimeslotWhereInput
  NOT?: TimeslotWhereInput[] | TimeslotWhereInput
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
  dayOfWeek?: DayOfWeek
  dayOfWeek_not?: DayOfWeek
  dayOfWeek_in?: DayOfWeek[] | DayOfWeek
  dayOfWeek_not_in?: DayOfWeek[] | DayOfWeek
  hour?: Int
  hour_not?: Int
  hour_in?: Int[] | Int
  hour_not_in?: Int[] | Int
  hour_lt?: Int
  hour_lte?: Int
  hour_gt?: Int
  hour_gte?: Int
  minute?: Int
  minute_not?: Int
  minute_in?: Int[] | Int
  minute_not_in?: Int[] | Int
  minute_lt?: Int
  minute_lte?: Int
  minute_gt?: Int
  minute_gte?: Int
}

export interface MeetupAccountUpdateWithoutUserDataInput {
  onlineProfileUrl?: String
  bio?: String
  approved?: Boolean
  disabled?: Boolean
  banned?: Boolean
  name?: NameUpdateOneInput
  meetupGroup?: MeetupGroupUpdateOneWithoutMembersInput
  timelotPreferences?: TimeslotUpdateManyInput
}

export interface UnverifiedMeetupAccountSubscriptionWhereInput {
  AND?: UnverifiedMeetupAccountSubscriptionWhereInput[] | UnverifiedMeetupAccountSubscriptionWhereInput
  OR?: UnverifiedMeetupAccountSubscriptionWhereInput[] | UnverifiedMeetupAccountSubscriptionWhereInput
  NOT?: UnverifiedMeetupAccountSubscriptionWhereInput[] | UnverifiedMeetupAccountSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UnverifiedMeetupAccountWhereInput
}

export interface NameUpdateOneInput {
  create?: NameCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: NameUpdateDataInput
  upsert?: NameUpsertNestedInput
}

export interface NameWhereInput {
  AND?: NameWhereInput[] | NameWhereInput
  OR?: NameWhereInput[] | NameWhereInput
  NOT?: NameWhereInput[] | NameWhereInput
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
}

export interface NameUpdateDataInput {
  firstName?: String
  lastName?: String
}

export interface TimeslotUpdateInput {
  dayOfWeek?: DayOfWeek
  hour?: Int
  minute?: Int
}

export interface NameUpsertNestedInput {
  update: NameUpdateDataInput
  create: NameCreateInput
}

export interface AdminAccountWhereUniqueInput {
  id?: ID_Input
}

export interface MeetupGroupUpdateOneWithoutMembersInput {
  create?: MeetupGroupCreateWithoutMembersInput
  connect?: MeetupGroupWhereUniqueInput
  delete?: Boolean
  update?: MeetupGroupUpdateWithoutMembersDataInput
  upsert?: MeetupGroupUpsertWithoutMembersInput
}

export interface AttendanceWhereUniqueInput {
  id?: ID_Input
}

export interface MeetupGroupUpdateWithoutMembersDataInput {
  name?: String
  active?: Boolean
  minUsersToActivate?: Int
  isForTesting?: Boolean
  onlineProfileUrlTypes?: MeetupGroupUpdateonlineProfileUrlTypesInput
  admins?: AdminAccountUpdateManyWithoutGroupInput
  timeslotOptions?: TimeslotUpdateManyInput
  pools?: MeetupPoolUpdateManyInput
}

export interface MeetupAccountUpsertNestedInput {
  update: MeetupAccountUpdateDataInput
  create: MeetupAccountCreateInput
}

export interface MeetupGroupUpdateonlineProfileUrlTypesInput {
  set?: OnlineProfileUrlType[] | OnlineProfileUrlType
}

export interface AttendanceUpdateManyInput {
  create?: AttendanceCreateInput[] | AttendanceCreateInput
  connect?: AttendanceWhereUniqueInput[] | AttendanceWhereUniqueInput
  disconnect?: AttendanceWhereUniqueInput[] | AttendanceWhereUniqueInput
  delete?: AttendanceWhereUniqueInput[] | AttendanceWhereUniqueInput
  update?: AttendanceUpdateWithWhereUniqueNestedInput[] | AttendanceUpdateWithWhereUniqueNestedInput
  upsert?: AttendanceUpsertWithWhereUniqueNestedInput[] | AttendanceUpsertWithWhereUniqueNestedInput
}

export interface AdminAccountUpdateManyWithoutGroupInput {
  create?: AdminAccountCreateWithoutGroupInput[] | AdminAccountCreateWithoutGroupInput
  connect?: AdminAccountWhereUniqueInput[] | AdminAccountWhereUniqueInput
  disconnect?: AdminAccountWhereUniqueInput[] | AdminAccountWhereUniqueInput
  delete?: AdminAccountWhereUniqueInput[] | AdminAccountWhereUniqueInput
  update?: AdminAccountUpdateWithWhereUniqueWithoutGroupInput[] | AdminAccountUpdateWithWhereUniqueWithoutGroupInput
  upsert?: AdminAccountUpsertWithWhereUniqueWithoutGroupInput[] | AdminAccountUpsertWithWhereUniqueWithoutGroupInput
}

export interface AdminAccountUpdateInput {
  canAddAdmins?: Boolean
  user?: UserUpdateOneWithoutAdminAccountsInput
  group?: MeetupGroupUpdateOneWithoutAdminsInput
}

export interface AdminAccountUpdateWithWhereUniqueWithoutGroupInput {
  where: AdminAccountWhereUniqueInput
  data: AdminAccountUpdateWithoutGroupDataInput
}

export interface MeetupGroupUpdateOneInput {
  create?: MeetupGroupCreateInput
  connect?: MeetupGroupWhereUniqueInput
  delete?: Boolean
  update?: MeetupGroupUpdateDataInput
  upsert?: MeetupGroupUpsertNestedInput
}

export interface AdminAccountUpdateWithoutGroupDataInput {
  canAddAdmins?: Boolean
  user?: UserUpdateOneWithoutAdminAccountsInput
}

export interface UnverifiedMeetupAccountUpdateInput {
  onlineProfileUrl?: String
  user?: UserUpdateOneInput
  meetupGroup?: MeetupGroupUpdateOneInput
}

export interface UserUpdateOneWithoutAdminAccountsInput {
  create?: UserCreateWithoutAdminAccountsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutAdminAccountsDataInput
  upsert?: UserUpsertWithoutAdminAccountsInput
}

export interface MeetupAccountUpsertWithWhereUniqueNestedInput {
  where: MeetupAccountWhereUniqueInput
  update: MeetupAccountUpdateDataInput
  create: MeetupAccountCreateInput
}

export interface UserUpdateWithoutAdminAccountsDataInput {
  email?: String
  password?: String
  emailConfirmationToken?: String
  isEmailConfirmed?: Boolean
  isForTesting?: Boolean
  isSuperAdmin?: Boolean
  meetupAccounts?: MeetupAccountUpdateManyWithoutUserInput
}

export interface MeetupAccountUpsertWithWhereUniqueWithoutMeetupGroupInput {
  where: MeetupAccountWhereUniqueInput
  update: MeetupAccountUpdateWithoutMeetupGroupDataInput
  create: MeetupAccountCreateWithoutMeetupGroupInput
}

export interface UserUpsertWithoutAdminAccountsInput {
  update: UserUpdateWithoutAdminAccountsDataInput
  create: UserCreateWithoutAdminAccountsInput
}

export interface MeetupGroupUpdateWithoutAdminsDataInput {
  name?: String
  active?: Boolean
  minUsersToActivate?: Int
  isForTesting?: Boolean
  onlineProfileUrlTypes?: MeetupGroupUpdateonlineProfileUrlTypesInput
  members?: MeetupAccountUpdateManyWithoutMeetupGroupInput
  timeslotOptions?: TimeslotUpdateManyInput
  pools?: MeetupPoolUpdateManyInput
}

export interface AdminAccountUpsertWithWhereUniqueWithoutGroupInput {
  where: AdminAccountWhereUniqueInput
  update: AdminAccountUpdateWithoutGroupDataInput
  create: AdminAccountCreateWithoutGroupInput
}

export interface MeetingSubscriptionWhereInput {
  AND?: MeetingSubscriptionWhereInput[] | MeetingSubscriptionWhereInput
  OR?: MeetingSubscriptionWhereInput[] | MeetingSubscriptionWhereInput
  NOT?: MeetingSubscriptionWhereInput[] | MeetingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MeetingWhereInput
}

export interface TimeslotUpdateManyInput {
  create?: TimeslotCreateInput[] | TimeslotCreateInput
  connect?: TimeslotWhereUniqueInput[] | TimeslotWhereUniqueInput
  disconnect?: TimeslotWhereUniqueInput[] | TimeslotWhereUniqueInput
  delete?: TimeslotWhereUniqueInput[] | TimeslotWhereUniqueInput
  update?: TimeslotUpdateWithWhereUniqueNestedInput[] | TimeslotUpdateWithWhereUniqueNestedInput
  upsert?: TimeslotUpsertWithWhereUniqueNestedInput[] | TimeslotUpsertWithWhereUniqueNestedInput
}

export interface AdminAccountWhereInput {
  AND?: AdminAccountWhereInput[] | AdminAccountWhereInput
  OR?: AdminAccountWhereInput[] | AdminAccountWhereInput
  NOT?: AdminAccountWhereInput[] | AdminAccountWhereInput
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
  canAddAdmins?: Boolean
  canAddAdmins_not?: Boolean
  user?: UserWhereInput
  group?: MeetupGroupWhereInput
}

export interface TimeslotUpdateWithWhereUniqueNestedInput {
  where: TimeslotWhereUniqueInput
  data: TimeslotUpdateDataInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface TimeslotUpdateDataInput {
  dayOfWeek?: DayOfWeek
  hour?: Int
  minute?: Int
}

export interface MeetupPoolWhereUniqueInput {
  id?: ID_Input
}

export interface TimeslotUpsertWithWhereUniqueNestedInput {
  where: TimeslotWhereUniqueInput
  update: TimeslotUpdateDataInput
  create: TimeslotCreateInput
}

export interface AttendanceUpdateDataInput {
  state?: AttendanceState
  member?: MeetupAccountUpdateOneInput
}

export interface MeetupPoolUpdateManyInput {
  create?: MeetupPoolCreateInput[] | MeetupPoolCreateInput
  connect?: MeetupPoolWhereUniqueInput[] | MeetupPoolWhereUniqueInput
  disconnect?: MeetupPoolWhereUniqueInput[] | MeetupPoolWhereUniqueInput
  delete?: MeetupPoolWhereUniqueInput[] | MeetupPoolWhereUniqueInput
  update?: MeetupPoolUpdateWithWhereUniqueNestedInput[] | MeetupPoolUpdateWithWhereUniqueNestedInput
  upsert?: MeetupPoolUpsertWithWhereUniqueNestedInput[] | MeetupPoolUpsertWithWhereUniqueNestedInput
}

export interface MeetupGroupUpsertNestedInput {
  update: MeetupGroupUpdateDataInput
  create: MeetupGroupCreateInput
}

export interface MeetupPoolUpdateWithWhereUniqueNestedInput {
  where: MeetupPoolWhereUniqueInput
  data: MeetupPoolUpdateDataInput
}

export interface MeetupGroupUpsertWithoutMembersInput {
  update: MeetupGroupUpdateWithoutMembersDataInput
  create: MeetupGroupCreateWithoutMembersInput
}

export interface MeetupPoolUpdateDataInput {
  dateTime?: DateTime
  members?: MeetupAccountUpdateManyInput
}

export interface MeetupAccountUpdateWithWhereUniqueWithoutMeetupGroupInput {
  where: MeetupAccountWhereUniqueInput
  data: MeetupAccountUpdateWithoutMeetupGroupDataInput
}

export interface MeetupAccountUpdateManyInput {
  create?: MeetupAccountCreateInput[] | MeetupAccountCreateInput
  connect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  disconnect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  delete?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
  update?: MeetupAccountUpdateWithWhereUniqueNestedInput[] | MeetupAccountUpdateWithWhereUniqueNestedInput
  upsert?: MeetupAccountUpsertWithWhereUniqueNestedInput[] | MeetupAccountUpsertWithWhereUniqueNestedInput
}

export interface MeetupPoolWhereInput {
  AND?: MeetupPoolWhereInput[] | MeetupPoolWhereInput
  OR?: MeetupPoolWhereInput[] | MeetupPoolWhereInput
  NOT?: MeetupPoolWhereInput[] | MeetupPoolWhereInput
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
  members_every?: MeetupAccountWhereInput
  members_some?: MeetupAccountWhereInput
  members_none?: MeetupAccountWhereInput
}

export interface MeetupAccountUpdateWithWhereUniqueNestedInput {
  where: MeetupAccountWhereUniqueInput
  data: MeetupAccountUpdateDataInput
}

export interface UnverifiedMeetupAccountWhereUniqueInput {
  id?: ID_Input
}

export interface MeetupPoolUpdateInput {
  dateTime?: DateTime
  members?: MeetupAccountUpdateManyInput
}

export interface AdminAccountUpdateManyWithoutUserInput {
  create?: AdminAccountCreateWithoutUserInput[] | AdminAccountCreateWithoutUserInput
  connect?: AdminAccountWhereUniqueInput[] | AdminAccountWhereUniqueInput
  disconnect?: AdminAccountWhereUniqueInput[] | AdminAccountWhereUniqueInput
  delete?: AdminAccountWhereUniqueInput[] | AdminAccountWhereUniqueInput
  update?: AdminAccountUpdateWithWhereUniqueWithoutUserInput[] | AdminAccountUpdateWithWhereUniqueWithoutUserInput
  upsert?: AdminAccountUpsertWithWhereUniqueWithoutUserInput[] | AdminAccountUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpdateWithoutMeetupAccountsDataInput {
  email?: String
  password?: String
  emailConfirmationToken?: String
  isEmailConfirmed?: Boolean
  isForTesting?: Boolean
  isSuperAdmin?: Boolean
  adminAccounts?: AdminAccountUpdateManyWithoutUserInput
}

export interface UserUpdateOneWithoutMeetupAccountsInput {
  create?: UserCreateWithoutMeetupAccountsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutMeetupAccountsDataInput
  upsert?: UserUpsertWithoutMeetupAccountsInput
}

export interface MeetupAccountUpdateDataInput {
  onlineProfileUrl?: String
  bio?: String
  approved?: Boolean
  disabled?: Boolean
  banned?: Boolean
  user?: UserUpdateOneWithoutMeetupAccountsInput
  name?: NameUpdateOneInput
  meetupGroup?: MeetupGroupUpdateOneWithoutMembersInput
  timelotPreferences?: TimeslotUpdateManyInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  emailConfirmationToken?: String
  isEmailConfirmed?: Boolean
  isForTesting?: Boolean
  isSuperAdmin?: Boolean
  meetupAccounts?: MeetupAccountUpdateManyWithoutUserInput
  adminAccounts?: AdminAccountUpdateManyWithoutUserInput
}

export interface AttendanceUpdateInput {
  state?: AttendanceState
  member?: MeetupAccountUpdateOneInput
}

export interface MeetingWhereInput {
  AND?: MeetingWhereInput[] | MeetingWhereInput
  OR?: MeetingWhereInput[] | MeetingWhereInput
  NOT?: MeetingWhereInput[] | MeetingWhereInput
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
  attendances_every?: AttendanceWhereInput
  attendances_some?: AttendanceWhereInput
  attendances_none?: AttendanceWhereInput
}

export interface MeetupAccountCreateManyWithoutUserInput {
  create?: MeetupAccountCreateWithoutUserInput[] | MeetupAccountCreateWithoutUserInput
  connect?: MeetupAccountWhereUniqueInput[] | MeetupAccountWhereUniqueInput
}

export interface AdminAccountUpsertWithWhereUniqueWithoutUserInput {
  where: AdminAccountWhereUniqueInput
  update: AdminAccountUpdateWithoutUserDataInput
  create: AdminAccountCreateWithoutUserInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface BatchPayload {
  count: Long
}

export interface TimeslotPreviousValues {
  id: ID_Output
  dayOfWeek: DayOfWeek
  hour: Int
  minute: Int
}

export interface MeetupAccount extends Node {
  id: ID_Output
  user: User
  name?: Name
  onlineProfileUrl?: String
  bio?: String
  meetupGroup: MeetupGroup
  approved: Boolean
  disabled: Boolean
  banned: Boolean
  timelotPreferences?: Timeslot[]
}

export interface AggregateTimeslot {
  count: Int
}

export interface TimeslotSubscriptionPayload {
  mutation: MutationType
  node?: Timeslot
  updatedFields?: String[]
  previousValues?: TimeslotPreviousValues
}

export interface MeetupGroup extends Node {
  id: ID_Output
  name: String
  admins?: AdminAccount[]
  members?: MeetupAccount[]
  active: Boolean
  minUsersToActivate: Int
  timeslotOptions?: Timeslot[]
  pools?: MeetupPool[]
  onlineProfileUrlTypes?: OnlineProfileUrlType[]
  isForTesting: Boolean
}

/*
 * An edge in a connection.

 */
export interface TimeslotEdge {
  node: Timeslot
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface TimeslotConnection {
  pageInfo: PageInfo
  edges: TimeslotEdge[]
  aggregate: AggregateTimeslot
}

export interface AggregateAttendance {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface AttendanceConnection {
  pageInfo: PageInfo
  edges: AttendanceEdge[]
  aggregate: AggregateAttendance
}

export interface Meeting extends Node {
  id: ID_Output
  attendances?: Attendance[]
  dateTime: DateTime
}

/*
 * An edge in a connection.

 */
export interface MeetingEdge {
  node: Meeting
  cursor: String
}

export interface Name {
  firstName: String
  lastName: String
}

export interface AggregateMeetupPool {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface MeetupPoolConnection {
  pageInfo: PageInfo
  edges: MeetupPoolEdge[]
  aggregate: AggregateMeetupPool
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  emailConfirmationToken?: String
  isEmailConfirmed?: Boolean
  isForTesting: Boolean
  isSuperAdmin?: Boolean
}

/*
 * An edge in a connection.

 */
export interface MeetupGroupEdge {
  node: MeetupGroup
  cursor: String
}

export interface AttendancePreviousValues {
  id: ID_Output
  state: AttendanceState
}

export interface AggregateAdminAccount {
  count: Int
}

export interface UnverifiedMeetupAccountSubscriptionPayload {
  mutation: MutationType
  node?: UnverifiedMeetupAccount
  updatedFields?: String[]
  previousValues?: UnverifiedMeetupAccountPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AdminAccountConnection {
  pageInfo: PageInfo
  edges: AdminAccountEdge[]
  aggregate: AggregateAdminAccount
}

export interface UnverifiedMeetupAccountPreviousValues {
  id: ID_Output
  onlineProfileUrl?: String
}

/*
 * An edge in a connection.

 */
export interface NameEdge {
  node: Name
  cursor: String
}

export interface UnverifiedMeetupAccount extends Node {
  id: ID_Output
  user: User
  meetupGroup: MeetupGroup
  onlineProfileUrl?: String
}

export interface AggregateMeetupAccount {
  count: Int
}

export interface MeetupAccountSubscriptionPayload {
  mutation: MutationType
  node?: MeetupAccount
  updatedFields?: String[]
  previousValues?: MeetupAccountPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface MeetupAccountConnection {
  pageInfo: PageInfo
  edges: MeetupAccountEdge[]
  aggregate: AggregateMeetupAccount
}

export interface MeetupAccountPreviousValues {
  id: ID_Output
  onlineProfileUrl?: String
  bio?: String
  approved: Boolean
  disabled: Boolean
  banned: Boolean
}

/*
 * An edge in a connection.

 */
export interface UnverifiedMeetupAccountEdge {
  node: UnverifiedMeetupAccount
  cursor: String
}

export interface MeetupPool extends Node {
  id: ID_Output
  members?: MeetupAccount[]
  dateTime: DateTime
}

export interface AggregateUser {
  count: Int
}

export interface NameSubscriptionPayload {
  mutation: MutationType
  node?: Name
  updatedFields?: String[]
  previousValues?: NamePreviousValues
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

export interface NamePreviousValues {
  firstName: String
  lastName: String
}

export interface Attendance extends Node {
  id: ID_Output
  member: MeetupAccount
  state: AttendanceState
}

export interface Timeslot extends Node {
  id: ID_Output
  dayOfWeek: DayOfWeek
  hour: Int
  minute: Int
}

export interface AggregateMeeting {
  count: Int
}

export interface AdminAccountSubscriptionPayload {
  mutation: MutationType
  node?: AdminAccount
  updatedFields?: String[]
  previousValues?: AdminAccountPreviousValues
}

/*
 * An edge in a connection.

 */
export interface MeetupPoolEdge {
  node: MeetupPool
  cursor: String
}

export interface AdminAccountPreviousValues {
  id: ID_Output
  canAddAdmins: Boolean
}

/*
 * A connection to a list of items.

 */
export interface MeetupGroupConnection {
  pageInfo: PageInfo
  edges: MeetupGroupEdge[]
  aggregate: AggregateMeetupGroup
}

export interface AttendanceSubscriptionPayload {
  mutation: MutationType
  node?: Attendance
  updatedFields?: String[]
  previousValues?: AttendancePreviousValues
}

export interface AggregateName {
  count: Int
}

export interface MeetupGroupSubscriptionPayload {
  mutation: MutationType
  node?: MeetupGroup
  updatedFields?: String[]
  previousValues?: MeetupGroupPreviousValues
}

/*
 * An edge in a connection.

 */
export interface MeetupAccountEdge {
  node: MeetupAccount
  cursor: String
}

export interface MeetupGroupPreviousValues {
  id: ID_Output
  name: String
  active: Boolean
  minUsersToActivate: Int
  onlineProfileUrlTypes?: OnlineProfileUrlType[]
  isForTesting: Boolean
}

/*
 * A connection to a list of items.

 */
export interface UnverifiedMeetupAccountConnection {
  pageInfo: PageInfo
  edges: UnverifiedMeetupAccountEdge[]
  aggregate: AggregateUnverifiedMeetupAccount
}

export interface AdminAccount extends Node {
  id: ID_Output
  user: User
  group: MeetupGroup
  canAddAdmins: Boolean
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface MeetupPoolSubscriptionPayload {
  mutation: MutationType
  node?: MeetupPool
  updatedFields?: String[]
  previousValues?: MeetupPoolPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface MeetingConnection {
  pageInfo: PageInfo
  edges: MeetingEdge[]
  aggregate: AggregateMeeting
}

/*
 * An edge in a connection.

 */
export interface AdminAccountEdge {
  node: AdminAccount
  cursor: String
}

export interface MeetingPreviousValues {
  id: ID_Output
  dateTime: DateTime
}

export interface MeetingSubscriptionPayload {
  mutation: MutationType
  node?: Meeting
  updatedFields?: String[]
  previousValues?: MeetingPreviousValues
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  emailConfirmationToken?: String
  meetupAccounts?: MeetupAccount[]
  adminAccounts?: AdminAccount[]
  isEmailConfirmed?: Boolean
  isForTesting: Boolean
  isSuperAdmin?: Boolean
}

export interface MeetupPoolPreviousValues {
  id: ID_Output
  dateTime: DateTime
}

/*
 * A connection to a list of items.

 */
export interface NameConnection {
  pageInfo: PageInfo
  edges: NameEdge[]
  aggregate: AggregateName
}

export interface AggregateMeetupGroup {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface AttendanceEdge {
  node: Attendance
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUnverifiedMeetupAccount {
  count: Int
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export type DateTime = Date | string