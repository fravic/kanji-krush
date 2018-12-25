import uuid = require("uuid");

import { GQLMutationTypeResolver } from "../../schema/graphqlTypes";
import { Context } from "../../types";

export const Mutation: GQLMutationTypeResolver = {
  login: async (_, args, ctx: Context, info) => {
    // For now, just set the wanikani api token in a cookie
    ctx.req.res.cookie("wanikaniApiKey", args.wanikaniApiKey, {
      // Expire api key one year from now
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    });
    return {
      token: args.wanikaniApiKey,
      user: {
        id: uuid()
      }
    };
  }
};
