import { Subject } from "fe/lib/subject";
import { Text } from "fe/components/Text";

import css from "./styles.scss";
import { concatCss } from "fe/lib/concatCss";

type Props = {
  subjects: Set<Subject>;
};

export const EndGameSubjectsTable = ({ subjects }: Props) => {
  const subjArr = Array.from(subjects).sort((a, b) => {
    return a.completed
      ? -1
      : a.subject.characters < b.subject.characters
      ? -1
      : 1;
  });
  return (
    <table className={css["table"]}>
      <tbody>
        {subjArr.map(s => (
          <tr
            className={concatCss(
              css["row"],
              s.completed ? css["complete"] : css["incomplete"]
            )}
          >
            <td>
              <Text type="body" className={css["characters"]}>
                {s.subject.characters}
              </Text>
            </td>
            <td>
              <Text type="body" className={css["readings"]}>
                {s.subject.readings[0]}
              </Text>
            </td>
            <td>
              <Text type="body" className={css["meanings"]}>
                {s.subject.meanings[0]}
              </Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
