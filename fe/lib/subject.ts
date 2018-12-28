import { GQLSubject } from "be/schema/graphqlTypes";

const MIN_LIFETIME = 1000 * 12;
const MAX_LIFETIME = 1000 * 20;

// Contains client-side data about a Subject
export type Subject = {
  completed: boolean;
  subject: GQLSubject;
  expiryTime: number;
};

export function createSubject(gqlSubject: GQLSubject) {
  const randDuration = Math.round(
    Math.random() * (MAX_LIFETIME - MIN_LIFETIME) + MIN_LIFETIME
  );
  const expiryTime = new Date().getTime() + randDuration;
  return {
    completed: false,
    subject: gqlSubject,
    expiryTime
  };
}
