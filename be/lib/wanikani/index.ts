import 'isomorphic-fetch';

import { Subject } from './types';

type SubjectMap = {[id: number]: Subject};

let subjectsLastLoadedAt = 0;
const subjectsById: SubjectMap = {};

/**
 * fetchSubjects
 * Fetches a list of all subects from Wanikani. Caches this list in memory for the lifetime of the app.
 */
export async function fetchSubjects(): Promise<SubjectMap> {
  // TODO: Expire the cache after some time
  if (subjectsLastLoadedAt) {
    return subjectsById;
  }

  const res = await fetch(process.env.WANIKANI_API_ENDPOINT + 'subjects?types=vocabulary', {
    headers: {
      Authorization: `Bearer ${process.env.WANIKANI_GENERIC_API_KEY}`,
    },
  });
  const data = await res.json();

  // TODO: Handle Wanikani pagination.

  data.data.forEach(subject => {
    subjectsById[subject.id] = subject;
  });
  subjectsLastLoadedAt = (new Date()).getTime();
  return subjectsById;
}
