import { GQLSubject } from "be/schema/graphqlTypes";
import {
  SUBJECT_MIN_LIFETIME,
  SUBJECT_MAX_LIFETIME,
  SUBJECT_MIN_START_TIME,
  SUBJECT_MAX_START_TIME
} from "config";

// Contains client-side data about a Subject
export type Subject = {
  completed: boolean;
  subject: GQLSubject;
  startTime: number;
  expiryTime: number;
  lanePosition: number;
};

export function createSubject(gqlSubject: GQLSubject, lanePosition: number) {
  const t = new Date().getTime();
  const randDuration = randIntBetween(
    SUBJECT_MIN_LIFETIME,
    SUBJECT_MAX_LIFETIME
  );
  const startTime =
    t + randIntBetween(SUBJECT_MIN_START_TIME, SUBJECT_MAX_START_TIME);
  const expiryTime = startTime + randDuration;
  return {
    completed: false,
    subject: gqlSubject,
    startTime,
    expiryTime,
    lanePosition
  };
}

function randIntBetween(n1: number, n2: number) {
  return Math.round(Math.random() * (n2 - n1) + n1);
}
