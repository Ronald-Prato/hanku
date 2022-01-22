import { typedAction } from "../helpers";

const _setHeaderTab = (index: number) => {
  return typedAction("common/SET_HEADER_TAB", index);
};

export { _setHeaderTab };
