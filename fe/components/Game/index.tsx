import produce from "immer";
import { useEffect, useState } from "react";

import { EXPIRIES_FOR_LOSS } from "config";
import { GQLSubject } from "be/schema/graphqlTypes";
import {
  CorrectAnswerAnimation,
  CorrectAnswer
} from "fe/components/CorrectAnswerAnimation";
import SubjectsCanvas from "fe/components/SubjectsCanvas";
import Header from "fe/components/Header";
import { KanaInputField } from "fe/components/KanaInputField";
import { createSubject, Subject } from "fe/lib/subject";
import { useGameLoop } from "fe/lib/useGameLoop";

import css from "./styles.scss";

enum GameState {
  NOT_STARTED,
  STARTED,
  LOST,
  WON
}

type Props = {
  initialSubjects: GQLSubject[];
};

export const Game: React.SFC<Props> = ({ initialSubjects }) => {
  const [gameState, setGameState] = useState(GameState.NOT_STARTED);
  const [kanaInputValue, setKanaInputValue] = useState("");
  const [subjects, setSubjects] = useState(new Set<Subject>());
  const [correctAnswer, setCorrectAnswer] = useState<CorrectAnswer | null>(
    null
  );
  useEffect(
    () => {
      setSubjects(new Set(initialSubjects.map(s => createSubject(s))));
      setGameState(GameState.STARTED);
    },
    [initialSubjects]
  );
  useGameLoop(checkEndGameConditions(subjects, gameState, setGameState), 100);
  return (
    <div className={css["game"]}>
      {GameState[gameState]}
      <Header />
      <SubjectsCanvas subjects={subjects} />
      <div className={css["input-container"]}>
        <KanaInputField
          onChange={handleKanaInputChange(
            subjects,
            setSubjects,
            setKanaInputValue,
            setCorrectAnswer
          )}
          value={kanaInputValue}
        />
        {correctAnswer ? (
          <CorrectAnswerAnimation
            key={correctAnswer.reading}
            correctAnswer={correctAnswer}
          />
        ) : null}
      </div>
    </div>
  );
};

function handleKanaInputChange(
  subjects: Set<Subject>,
  setSubjects: React.Dispatch<React.SetStateAction<Set<Subject>>>,
  setKanaInputValue: React.Dispatch<React.SetStateAction<string>>,
  setCorrectAnswer: React.Dispatch<React.SetStateAction<CorrectAnswer>>
) {
  return kanaInputValue => {
    setKanaInputValue(kanaInputValue);
    subjects.forEach(s => {
      if (!s.completed && s.subject.readings.indexOf(kanaInputValue) >= 0) {
        setKanaInputValue("");
        setSubjects(
          produce(draft => {
            draft.delete(s);
            draft.add({
              ...s,
              completed: true
            });
          })
        );
        setCorrectAnswer({
          reading: kanaInputValue,
          meanings: s.subject.meanings
        });
      }
    });
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
