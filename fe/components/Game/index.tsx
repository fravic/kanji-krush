import produce from "immer";
import { useEffect, useState } from "react";

import { EXPIRIES_FOR_LOSS } from "config";
import { GQLSubject } from "be/schema/graphqlTypes";
import SubjectsCanvas from "fe/components/SubjectsCanvas";
import Header from "fe/components/Header";
import { KanaInputField } from "fe/components/KanaInputField";
import { createSubject, Subject } from "fe/lib/subject";
import { useGameLoop } from "fe/lib/useGameLoop";

enum GameState {
  NOT_STARTED,
  STARTED,
  LOST,
  WON
}

type Props = {
  initialSubjects: GQLSubject[];
};

export const Game = ({ initialSubjects }: Props) => {
  const [gameState, setGameState] = useState(GameState.NOT_STARTED);
  const [kanaInputValue, setKanaInputValue] = useState("");
  const [subjects, setSubjects] = useState(new Set<Subject>());
  useEffect(
    () => {
      setSubjects(new Set(initialSubjects.map(s => createSubject(s))));
      setGameState(GameState.STARTED);
    },
    [initialSubjects]
  );
  useGameLoop(checkEndGameConditions(subjects, gameState, setGameState), 100);
  return (
    <>
      {GameState[gameState]}
      <Header />
      <SubjectsCanvas subjects={subjects} />
      <KanaInputField
        onChange={handleKanaInputChange(
          subjects,
          setSubjects,
          setKanaInputValue
        )}
        value={kanaInputValue}
      />
    </>
  );
};

function handleKanaInputChange(
  subjects: Set<Subject>,
  setSubjects: React.Dispatch<React.SetStateAction<Set<Subject>>>,
  setKanaInputValue: React.Dispatch<React.SetStateAction<string>>
) {
  return kanaInputValue => {
    setKanaInputValue(kanaInputValue);
    setSubjects(
      produce(subjects, draft => {
        draft.forEach(s => {
          if (!s.completed && s.subject.readings.indexOf(kanaInputValue) >= 0) {
            console.log("Matched kana!", kanaInputValue);
            s.completed = true;
            setKanaInputValue("");
          }
        });
      })
    );
  };
}

function checkEndGameConditions(
  subjects: Set<Subject>,
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>
) {
  return () => {
    if (gameState !== GameState.STARTED) {
      return;
    }
    const now = new Date().getTime();
    const subArr = Array.from(subjects);

    const numComplete = subArr.filter(s => s.completed).length;
    if (numComplete === subjects.size) {
      setGameState(GameState.WON);
      return;
    }

    const numExpired = subArr.filter(s => now > s.expiryTime).length;
    if (numExpired >= EXPIRIES_FOR_LOSS) {
      setGameState(GameState.LOST);
    }
  };
}
