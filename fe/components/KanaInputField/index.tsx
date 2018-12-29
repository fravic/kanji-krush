import { useEffect } from "react";

import { toHiragana } from "wanakana";

import styles from "./styles.scss";

type Props = {
  onChange: (value: string) => void;
  value: string;
};

/**
 * KanaInputField
 * Controlled input for inputting hiragana. Focused automatically and when user clicks anywhere.
 */
export const KanaInputField: React.SFC<Props> = ({ onChange, value }) => {
  let inputRef: HTMLInputElement | null = null;
  useEffect(() => {
    function documentClickHandler(e: MouseEvent) {
      if (inputRef) {
        inputRef.focus();
      }
    }
    document.addEventListener("click", documentClickHandler);
    return () => {
      document.removeEventListener("click", documentClickHandler);
    };
  }, []);
  return (
    <input
      autoFocus
      className={styles["kana-input-field"]}
      onChange={e =>
        onChange(toHiragana(e.currentTarget.value, { IMEMode: true }))
      }
      ref={ref => {
        if (ref) {
          inputRef = ref;
        }
      }}
      value={value}
    />
  );
};
