export type CorrectAnswer = {
  reading: string;
  meanings: string[];
};

type Props = {
  correctAnswers: CorrectAnswer[];
};

export const CorrectAnswerAnimation: React.SFC<Props> = ({
  correctAnswers
}) => {
  return (
    <div>
      {correctAnswers.map(ans => (
        <div key={ans.reading}>
          {ans.reading}: {ans.meanings.slice(0, 3).join(", ")}
        </div>
      ))}
    </div>
  );
};
