import { toHiragana } from "wanakana";

import styles from "./styles.scss";

type Props = {
  onChange: (value: string) => void;
  value: string;
};

/**
 * KanaInputField
 * Controlled input for inputting hiragana
 */
export const KanaInputField = ({ onChange, value }: Props) => {
  return (
    <input
      autoFocus
      className={styles["kana-input-field"]}
      onChange={e =>
        onChange(toHiragana(e.currentTarget.value, { IMEMode: true }))
      }
      value={value}
    />
  );
};
