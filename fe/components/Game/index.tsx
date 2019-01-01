import produce from "immer";
import { useEffect, useState } from "react";

import { EXPIRIES_FOR_LOSS } from "config";
import { GQLSubject } from "be/schema/graphqlTypes";
import {
  CorrectAnswerAnimation,
  CorrectAnswer
} from "fe/components/CorrectAnswerAnimation";
import { GameStateAnimation } from "fe/components/GameStateAnimation";
import { SubjectsDisplay } from "fe/components/SubjectsDisplay";
import Header from "fe/components/Header";
import { KanaInputField } from "fe/components/KanaInputField";
import { concatCss } from "fe/lib/concatCss";
import { GameState } from "fe/lib/game";
import {
  createSubject,
  setSubjectStartAndExpiryTimes,
  Subject
} from "fe/lib/subject";
import { useGameLoop } from "fe/lib/useGameLoop";

import css from "./styles.scss";

type Props = {
  initialSubjects: GQLSubject[];
};

export const Game: React.SFC<Props> = ({ initialSubjects }) => {
  const [gameState, setGameState] = useState(GameState.NOT_STARTED);
  const [kanaInputValue, setKanaInputValue] = useState("");
  const [kanaInputHasBeenFocused, setKanaInputHasBeenFocused] = useState(false);
  const [subjects, setSubjects] = useState(new Set<Subject>());
  const [correctAnswer, setCorrectAnswer] = useState<CorrectAnswer | null>(
    null
  );
  useEffect(
    () => {
      setSubjects(new Set(initialSubjects.map((s, i) => createSubject(s, i))));
      if (gameState === GameState.NOT_STARTED && kanaInputHasBeenFocused) {
        startGame(gameState, setGameState, subjects, setSubjects);
      }
    },
    [initialSubjects]
  );
  useGameLoop(checkEndGameConditions(subjects, gameState, setGameState), 100);
  return (
    <div
      className={concatCss(
        css["game"],
        css[`game-state-${GameState[gameState].toLowerCase()}`]
      )}
    >
      <Header />
      <SubjectsDisplay subjects={subjects} />
      <div className={css["input-container"]}>
        <KanaInputField
          onChange={handleKanaInputChange(
            subjects,
            setSubjects,
            setKanaInputValue,
            setCorrectAnswer
          )}
          onFocus={() => {
            setKanaInputHasBeenFocused(true);
            if (gameState === GameState.NOT_STARTED && subjects.size > 0) {
              startGame(gameState, setGameState, subjects, setSubjects);
            }
          }}
          value={kanaInputValue}
        />
        {correctAnswer ? (
          <CorrectAnswerAnimation
            key={correctAnswer.reading}
            correctAnswer={correctAnswer}
          />
        ) : null}
      </div>
      <GameStateAnimation gameState={gameState} subjects={subjects} />
    </div>
  );
};

function startGame(
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>,
  subjects: Set<Subject>,
  setSubjects: React.Dispatch<React.SetStateAction<Set<Subject>>>
) {
  if (gameState !== GameState.NOT_STARTED) {
    return;
  }
  setSubjects(
    new Set(Array.from(subjects).map(s => setSubjectStartAndExpiryTimes(s)))
  );
  setGameState(GameState.STARTED);
}

function handleKanaInputChange(
  subjects: Set<Subject>,
  setSubjects: React.Dispatch<React.SetStateAction<Set<Subject>>>,
  setKanaInputValue: React.Dispatch<React.SetStateAction<string>>,
  setCorrectAnswer: React.Dispatch<React.SetStateAction<CorrectAnswer>>
) {
  return kanaInputValue => {
    setKanaInputValue(kanaInputValue);
    subjects.forEach(s => {
      const t = new Date().getTime();
      if (
        !s.completed &&
        t <= s.expiryTime &&
        s.subject.readings.indexOf(kanaInputValue) >= 0
      ) {
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

    // Did the user lose?
    const numExpired = subArr.filter(s => now > s.expiryTime && !s.completed)
      .length;
    if (numExpired >= EXPIRIES_FOR_LOSS) {
      setGameState(GameState.LOST);
      return;
    }

    const numComplete = subArr.filter(s => s.completed).length;
    if (
      numComplete === subjects.size ||
      numComplete + numExpired === subjects.size
    ) {
      // TODO: Show a lesser win state if some subjects were missed
      setGameState(GameState.WON);
    }
  };
}
