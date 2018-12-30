import Text from "fe/components/Text";

import css from "./styles.scss";

export type CorrectAnswer = {
  reading: string;
  meanings: string[];
};

type Props = {
  correctAnswer: CorrectAnswer;
};

export const CorrectAnswerAnimation: React.SFC<Props> = ({
  correctAnswer: ans
}) => {
  return (
    <div className={css["correct-answer-animation"]}>
      <Text className={css["reading"]} type="body">
        {ans.reading}
      </Text>
      <Text className={css["meanings"]} type="body">
        {ans.meanings.slice(0, 3).join(", ")}
      </Text>
    </div>
  );
};
