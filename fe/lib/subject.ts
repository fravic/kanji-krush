import { GQLSubject } from "be/schema/graphqlTypes";
import { SUBJECT_MIN_LIFETIME, SUBJECT_MAX_LIFETIME } from "config";

// Contains client-side data about a Subject
export type Subject = {
  completed: boolean;
  subject: GQLSubject;
  expiryTime: number;
};

export function createSubject(gqlSubject: GQLSubject) {
  const randDuration = Math.round(
    Math.random() * (SUBJECT_MAX_LIFETIME - SUBJECT_MIN_LIFETIME) +
      SUBJECT_MIN_LIFETIME
  );
  const expiryTime = new Date().getTime() + randDuration;
  return {
    completed: false,
    subject: gqlSubject,
    expiryTime
  };
}
