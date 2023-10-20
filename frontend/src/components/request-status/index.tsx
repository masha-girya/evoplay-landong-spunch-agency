import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import {
  DURATION_FADE_IN,
  DEFAULT_STYLE_FADE_IN,
  TRANS_STYLES_FADE_IN,
} from "src/constants/transition";
import { REQUEST_STATUS } from "src/constants";
import { REQ_STATUS } from "src/services/api-types";
import styles from "./index.module.scss";


interface IRequestStatus {
  status: REQ_STATUS;
  setStatus: (status: REQ_STATUS) => void;
}

export const RequestStatus: React.FC<IRequestStatus> = (props) => {
  const refStatus = useRef<null | any>(null);
  const { status, setStatus } = props;
  const [statusText, setStatusText] = useState(REQUEST_STATUS.success);

  useEffect(() => {
    if (status !== REQ_STATUS.none) {
      setStatusText(REQUEST_STATUS[status]);
    }
  }, [status]);

  useEffect(() => {
    if (status !== REQ_STATUS.lackData) {
      const timeout = setTimeout(() => setStatus(REQ_STATUS.none), 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [status]);

  return (
    <Transition
      unmountOnExit
      nodeRef={refStatus}
      in={status !== REQ_STATUS.none}
      timeout={DURATION_FADE_IN}
    >
      {(state) => (
        <p
          ref={refStatus}
          className={classNames(styles.request, {
            [styles.request__error]: status === REQ_STATUS.failed || status === REQ_STATUS.lackData,
            [styles.request__success]: status === REQ_STATUS.success,
          })}
          style={{
            ...DEFAULT_STYLE_FADE_IN,
            ...TRANS_STYLES_FADE_IN[state],
          }}
        >
          {statusText}
        </p>
      )}
    </Transition>
  );
};
