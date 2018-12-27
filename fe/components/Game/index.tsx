import produce from "immer";
import { useEffect, useState } from "react";

import { GQLSubject } from "be/schema/graphqlTypes";
import SubjectsCanvas from "fe/components/SubjectsCanvas";
import Header from "fe/components/Header";
import { KanaInputField } from "fe/components/KanaInputField";
import { defaultSubjectFromGQLSubject, Subject } from "fe/lib/subject";

type Props = {
  initialSubjects: GQLSubject[];
};

export const Game = ({ initialSubjects }: Props) => {
  const [kanaInputValue, setKanaInputValue] = useState("");
  const [subjects, setSubjects] = useState(new Set<Subject>());
  useEffect(
    () => {
      setSubjects(
        new Set(initialSubjects.map(s => defaultSubjectFromGQLSubject(s)))
      );
    },
    [initialSubjects]
  );
  return (
    <>
      <Header />
      <SubjectsCanvas subjects={subjects} />
      <KanaInputField
        onChange={val =>
          handleKanaInputChange(val, subjects, setSubjects, setKanaInputValue)
        }
        value={kanaInputValue}
      />
    </>
  );
};

function handleKanaInputChange(
  kanaInputValue: string,
  subjects: Set<Subject>,
  setSubjects: React.Dispatch<React.SetStateAction<Set<Subject>>>,
  setKanaInputValue: React.Dispatch<React.SetStateAction<string>>
) {
  setKanaInputValue(kanaInputValue);
  if (kanaInputValue.length) {
    setSubjects(
      produce(subjects, draft => {
        draft.forEach(s => {
          if (s.subject.readings.indexOf(kanaInputValue) >= 0) {
            console.log("Matched kana!", kanaInputValue);
            s.completed = true;
            setKanaInputValue("");
          }
        });
      })
    );
  }
}
