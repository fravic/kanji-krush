import "isomorphic-fetch";

import { Assignment, Subject } from "./types";

type SubjectMap = { [id: number]: Subject };

let subjectsLastLoadedAt = 0;
const subjectsById: SubjectMap = {};

/**
 * fetchSubjects
 * Fetches a list of all vocabulary subects from Wanikani. Caches this list in memory for the lifetime of the app.
 * Note that the results of this query are reused across ALL users.
 */
export async function fetchSubjects(): Promise<SubjectMap> {
  // TODO: Expire the cache after some time
  if (subjectsLastLoadedAt) {
    return subjectsById;
  }
  await doFetchSubjects(
    process.env.WANIKANI_API_ENDPOINT + "subjects?types=vocabulary"
  );
  console.log(
    `Loaded ${Object.keys(subjectsById).length} subjects from Wanikani`
  );
  subjectsLastLoadedAt = new Date().getTime();
  return subjectsById;
}

async function doFetchSubjects(url: string) {
  console.log("Fetching subjects from", url);
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.WANIKANI_GENERIC_API_KEY}`
    }
  });

  const data = await res.json();
  data.data.forEach(subject => {
    subjectsById[subject.id] = subject;
  });

  const nextPage = data.pages.next_url;
  if (nextPage) {
    await doFetchSubjects(nextPage);
  }
}

/**
 * fetchStartedAssignments
 * Fetches the vocabulary assignments that have been started by the current Wanikani user.
 */
export async function fetchStartedAssignments(
  wanikaniApiKey: string
): Promise<Assignment[]> {
  const res = await fetch(
    process.env.WANIKANI_API_ENDPOINT +
      "assignments?subject_types=vocabulary&started=true",
    {
      headers: {
        // For now, allow users to play with the generic Wanikani API key
        Authorization: `Bearer ${wanikaniApiKey || process.env.WANIKANI_GENERIC_API_KEY}`
      }
    }
  );

  // TODO: Handle Wanikani pagination.
  const data = await res.json();
  return data.data;
}
