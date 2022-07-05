import { camelize } from "../util/string";
import { events, isReadOnly } from "./sortableEvents";
import { isHtmlAttribute } from "../util/tags";

function project(entries) {
  return entries.reduce((res, [key, value]) => {
    res[key] = value;
    return res;
  }, {});
}

function getComponentAttributes({ $attrs, componentData = {} }) {
  const attributes = project(
    // eslint-disable-next-line no-unused-vars
    Object.entries($attrs).filter(([key, _]) => isHtmlAttribute(key))
  );
  return {
    ...attributes,
    ...componentData,
  };
}

function createSortableOption({ $attrs, callBackBuilder }) {
  const options = project(getValidSortableEntries($attrs));
  Object.entries(callBackBuilder).forEach(([eventType, eventBuilder]) => {
    events[eventType].forEach((event) => {
      options[`on${event}`] = eventBuilder(event);
    });
  });
  const draggable = `[data-draggable]${options.draggable || ""}`;
  return {
    ...options,
    draggable,
  };
}

function getValidSortableEntries(value) {
  return (
    Object.entries(value)
      // eslint-disable-next-line no-unused-vars
      .filter(([key, _]) => !isHtmlAttribute(key))
      .map(([key, value]) => [camelize(key), value])
      // eslint-disable-next-line no-unused-vars
      .filter(([key, _]) => !isReadOnly(key))
  );
}

export {
  getComponentAttributes,
  createSortableOption,
  getValidSortableEntries,
};
