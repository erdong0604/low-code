/*
 * @Description:拖拽组件的一些方法
 * @Author: chenM
 * @Date: 2021-07-20 16:30:49
 */
import { PAGE_DATA_CONFIG, SUB_ENGINE_NAME } from "engine/constants";
export const draggableComEnd = (...reset) => {
  transferIndex(...reset);
};

const transferIndex = (oldIndex, newIndex) => {
  const oldComponents = window[PAGE_DATA_CONFIG].components;
  const components = [...oldComponents];
  if (oldIndex > newIndex) {
    oldComponents[oldIndex].sort = oldComponents[newIndex].sort + 0.1;
    components.splice(newIndex, 0, components[oldIndex]);
    components.splice(oldIndex + 1, 1);
  } else {
    oldComponents[oldIndex].sort = oldComponents[newIndex].sort - 0.1;
    components.splice(newIndex + 1, 0, components[oldIndex]);
    components.splice(oldIndex, 1);
  }
  window[SUB_ENGINE_NAME].reloadInit();
};
