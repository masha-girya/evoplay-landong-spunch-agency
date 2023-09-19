import { useCallback } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IInput {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  isError?: boolean;
  type?: string;
}

export const Input: React.FC<IInput> = (props) => {
  const { value, placeholder, onChange, isError, type = "text" } = props;

  const handleChange = useCallback((event: any) => {
    onChange(event.target.value);
  }, []);

  return (
    <>
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
    </>
  );
};
