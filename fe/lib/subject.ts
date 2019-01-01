import { GQLSubject } from "be/schema/graphqlTypes";
import {
  SUBJECT_MIN_LIFETIME,
  SUBJECT_MAX_LIFETIME,
  SUBJECT_MIN_START_TIME,
  SUBJECT_MAX_START_TIME
} from "config";
import produce from "immer";

// Contains client-side data about a Subject
export type Subject = {
  completed: boolean;
  subject: GQLSubject;
  startTime: number;
  expiryTime: number;
  lanePosition: number;
};

export function createSubject(gqlSubject: GQLSubject, lanePosition: number) {
  // Need to set subject timings separately after subject creation
  return {
    completed: false,
    subject: gqlSubject,
    startTime: 0,
    expiryTime: 0,
    lanePosition
  };
}

export function setSubjectStartAndExpiryTimes(subject: Subject) {
  const t = new Date().getTime();
  const randDuration = randIntBetween(
    SUBJECT_MIN_LIFETIME,
    SUBJECT_MAX_LIFETIME
  );
  const startTime =
    t + randIntBetween(SUBJECT_MIN_START_TIME, SUBJECT_MAX_START_TIME);
  const expiryTime = startTime + randDuration;
  return produce(subject, () => {
    subject.startTime = startTime;
    subject.expiryTime = expiryTime;
  });
}

function randIntBetween(n1: number, n2: number) {
  return Math.round(Math.random() * (n2 - n1) + n1);
}
