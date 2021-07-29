import { PAGE_DATA_CONFIG } from "engine/constants";

export const calcSortFn = () => {
  const _data = window[PAGE_DATA_CONFIG];
  const _components = _data.components;
  const _sorts = _components.map((v) => v.sort);
  _sorts.sort((a, b) => a - b);
  const _lastSort = _sorts[_sorts.length - 1];
  return _lastSort + 1;
};
