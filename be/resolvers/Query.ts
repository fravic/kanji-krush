import { fetchSubjects } from "../lib/wanikani";
import {
  GQLGame,
  GQLQueryTypeResolver,
  GQLSubject
} from "../schema/graphqlTypes";
import { Context } from "../types";

const NUM_SUBJECTS_PER_GAME = 8;

export const Query: GQLQueryTypeResolver = {
  game: async (_, args, ctx: Context, info): Promise<GQLGame> => {
    const subjects = await fetchSubjects();

    // Choose some random subjects for now
    const chosenSubjectIds = [];
    const subjectIds = Object.keys(subjects);
    const numSubjects = subjectIds.length;
    while (chosenSubjectIds.length < NUM_SUBJECTS_PER_GAME) {
      const randIdx = Math.round(Math.random() * numSubjects);
      const subjectId = subjectIds[randIdx];
      if (chosenSubjectIds.indexOf(subjectId) < 0) {
        chosenSubjectIds.push(subjectId);
      }
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
