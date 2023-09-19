import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

export interface IButton {
  variant?: "primary" | "middle" | "secondary" | "textMain" | "textSecondary";
  name?: string;
  onClick: () => void;
  disabled?: boolean;
  isOnLoad?: boolean;
  isActive?: boolean;
}

export const Button: React.FC<IButton> = (props) => {
  const {
    variant = "primary",
    name,
    disabled,
    isOnLoad,
    isActive,
    onClick,
  } = props;

  // const handleClick = () => {
  //   if (!disabled) onClick();
  // };

  console.log(name, isActive)

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.button, {
        [styles[`button--${variant}`]]: variant,
        [styles[`button--${variant}_active`]]: isActive,
        [styles.button_disabled]: disabled,
      })}
    >
      {isOnLoad && <div className={styles.loading} />}
      <div
        className={classNames(styles.button__name, styles[`button--${variant}__name`], {
          [styles.button__name_invisible]: isOnLoad,
        })}
      >
        {name}
      </div>
    </button>
  );
};
