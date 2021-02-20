/* @flow */

export type ModalState = {
  transparent: boolean,
  isVisible: boolean,
  animated: boolean,
  route: string | void,
  text: string | void,
};

export type ModalActions =
  | {type: 'modal/SHOW_MODAL'}
  | {type: 'modal/RESET_MODAL'};

type Location = {
  pathname: string,
  search: string,
  hash: string,
};

export type RouterState = {
  location: Location,
};
