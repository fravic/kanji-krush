import { GQLSubject } from "be/schema/graphqlTypes";

// Contains client-side data about a Subject
export type Subject = {
  completed: boolean;
  subject: GQLSubject;
  timeDuration: number;
  timeStartedAt: number;
};

export function defaultSubjectFromGQLSubject(gqlSubject: GQLSubject) {
  return {
    completed: false,
    subject: gqlSubject,

    // TODO
    timeDuration: 0,
    timeStartedAt: 0
  };
}
