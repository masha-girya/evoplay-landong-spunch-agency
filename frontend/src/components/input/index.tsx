import { useCallback, useRef } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { Transition } from "react-transition-group";
import {
  DURATION_FADE_IN,
  DEFAULT_STYLE_FADE_IN,
  TRANS_STYLES_FADE_IN,
} from "src/constants/transition";

interface IInput {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  errorText?: string;
  type?: string;
}

export const Input: React.FC<IInput> = (props) => {
  const { value, placeholder, onChange, errorText, type = "text" } = props;
  const transRef = useRef<null | any>(null);

  const handleChange = useCallback((event: any) => {
    onChange(event.target.value);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        {type === "text" && (
          <input
            name={placeholder}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            className={styles.input}
          />
        )}
      </div>
      <Transition
          unmountOnExit
          in={errorText !== undefined && errorText.length > 0}
          timeout={DURATION_FADE_IN}
          nodeRef={transRef}
        >
          {(state) => (
            <p
              ref={transRef}
              className={styles.error}
              style={{
                ...DEFAULT_STYLE_FADE_IN,
                ...TRANS_STYLES_FADE_IN[state],
              }}
            >
              {errorText}
            </p>
          )}
        </Transition>
    </div>
  );
};
