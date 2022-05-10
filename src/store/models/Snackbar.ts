export interface Snackbar {
  id?: string;
  title?: string;
  body?: string;
  type: SnackbarType;
  actionId?: string;
}

export enum SnackbarType {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  INFO = 'INFO',
}
