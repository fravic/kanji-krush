/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuery {
  game?: GQLGame;
}

export interface GQLGame {
  subjects?: Array<GQLSubject>;
}

export interface GQLSubject {
  id: string;
  characters: string;
  meanings?: Array<string>;
  readings?: Array<string>;
}

export interface GQLMutation {
  login: GQLAuthPayload;
}

export interface GQLAuthPayload {
  user: GQLUser;
  token: string;
}

export interface GQLUser extends GQLNode {
  id: string;
}

export interface GQLNode {
  id: string;
}

/** Use this to resolve interface type Node */
export type GQLPossibleNodeTypeNames = 'User';

export interface GQLNodeNameMap {
  Node: GQLNode;
  User: GQLUser;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Query?: GQLQueryTypeResolver;
  Game?: GQLGameTypeResolver;
  Subject?: GQLSubjectTypeResolver;
  Mutation?: GQLMutationTypeResolver;
  AuthPayload?: GQLAuthPayloadTypeResolver;
  User?: GQLUserTypeResolver;
  Node?: {
    __resolveType: GQLNodeTypeResolver
  };
  
}
export interface GQLQueryTypeResolver<TParent = any> {
  game?: QueryToGameResolver<TParent>;
}

export interface QueryToGameArgs {
  id?: string;
}
export interface QueryToGameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGameArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLGameTypeResolver<TParent = any> {
  subjects?: GameToSubjectsResolver<TParent>;
}

export interface GameToSubjectsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLSubjectTypeResolver<TParent = any> {
  id?: SubjectToIdResolver<TParent>;
  characters?: SubjectToCharactersResolver<TParent>;
  meanings?: SubjectToMeaningsResolver<TParent>;
  readings?: SubjectToReadingsResolver<TParent>;
}

export interface SubjectToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SubjectToCharactersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SubjectToMeaningsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SubjectToReadingsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMutationTypeResolver<TParent = any> {
  login?: MutationToLoginResolver<TParent>;
}

export interface MutationToLoginArgs {
  wanikaniApiKey: string;
}
export interface MutationToLoginResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToLoginArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLAuthPayloadTypeResolver<TParent = any> {
  user?: AuthPayloadToUserResolver<TParent>;
  token?: AuthPayloadToTokenResolver<TParent>;
}

export interface AuthPayloadToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AuthPayloadToTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserTypeResolver<TParent = any> {
  id?: UserToIdResolver<TParent>;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLNodeTypeResolver<TParent = any> {
  (parent: TParent, context: any, info: GraphQLResolveInfo): 'User';
}