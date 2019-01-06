import { Text } from "fe/components/Text";
import { concatCss } from "fe/lib/concatCss";
import { GameState } from "fe/lib/game";
import { Subject } from "fe/lib/subject";

import { EndGameSubjectsTable } from "./EndGameSubjectsTable";
import css from "./styles.scss";

type Props = {
  gameState: GameState;
  subjects: Set<Subject>;
};

export const GameStateAnimation = ({ gameState, subjects }: Props) => {
  const copy = copyForGameState(
    gameState,
    Array.from(subjects).filter(s => s.completed).length,
    subjects.size
  );
  if (!copy) {
    return null;
  }
  return (
    <div
      className={concatCss(
        css["game-state-animation"],
        css[`game-state-${GameState[gameState].toLowerCase()}`]
      )}
      key={gameState}
    >
      <Text className={css["title"]} type="h1">
        {copy.title}
      </Text>
      {copy.subtitle ? (
        <Text className={css["subtitle"]} type="body">
          {copy.subtitle}
        </Text>
      ) : null}
      {gameState === GameState.WON || gameState === GameState.LOST ? (
        <div className={css["table-container"]}>
          <EndGameSubjectsTable subjects={subjects} />
        </div>
      ) : null}
    </div>
  );
};

function copyForGameState(
  state: GameState,
  subjectsCompleted: number,
  subjectCount: number
): { title: string; subtitle?: string } | null {
  switch (state) {
    case GameState.NOT_STARTED: {
      return {
        title: "Save Tokyo!",
        subtitle: "Click to start"
      };
    }
    case GameState.STARTED: {
      return {
        title: "Type!",
        subtitle: "Vocabulary readings"
      };
    }
    case GameState.LOST: {
      return {
        title: "Oops!",
        subtitle: "We'll need time to rebuild..."
      };
    }
    case GameState.WON: {
      if (subjectsCompleted === subjectCount) {
        return {
          title: "Our Hero!"
        };
      }
      return {
        title: "Saved!"
      };
    }
    default:
      return null;
  }
}
