import { fetchSubjects, fetchStartedAssignments } from "../lib/wanikani";
import {
  GQLGame,
  GQLQueryTypeResolver,
  GQLSubject
} from "../schema/graphqlTypes";
import { Context } from "../types";

const NUM_SUBJECTS_PER_GAME = 8;

export const Query: GQLQueryTypeResolver = {
  game: async (_, args, ctx: Context, info): Promise<GQLGame> => {
    const wanikaniApiKey = ctx.req.cookies.wanikaniApiKey;
    console.log("Fetching game with api key", wanikaniApiKey);
    if (!wanikaniApiKey) {
      // Can't start a game without a user-provided api key
      return { subjects: [] };
    }

    const subjects = await fetchSubjects();
    const assignments = await fetchStartedAssignments(
      ctx.req.cookies.wanikaniApiKey
    );
    const startedSubjectIds = new Set(assignments.map(a => a.data.subject_id));

    // Choose some random subjects from the ones the user has unlocked
    const chosenSubjectIds = [];
    const subjectIds = new Set(
      Object.keys(subjects).filter(
        x =>
          startedSubjectIds.has(parseInt(x, 10)) && !!subjects[parseInt(x, 10)]
      )
    );
    while (
      chosenSubjectIds.length < NUM_SUBJECTS_PER_GAME &&
      subjectIds.size > 0
    ) {
      const randIdx = Math.floor(Math.random() * subjectIds.size);
      const subjectId = Array.from(subjectIds)[randIdx];
      subjectIds.delete(subjectId);
      chosenSubjectIds.push(subjectId);
    }

    const chosenSubjects: GQLSubject[] = chosenSubjectIds.map(subjId => ({
      characters: subjects[subjId].data.characters,
      id: subjId,
      meanings: subjects[subjId].data.meanings.map(m => m.meaning),
      readings: subjects[subjId].data.readings.map(r => r.reading)
    }));

    return {
      subjects: chosenSubjects
    };
  }
};
