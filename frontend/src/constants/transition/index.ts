export const DURATION_FADE_IN = 300;

export const DEFAULT_STYLE_FADE_IN = {
  transition: `opacity ${DURATION_FADE_IN}ms ease`,
  opacity: 0,
};

export const TRANS_STYLES_FADE_IN: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};