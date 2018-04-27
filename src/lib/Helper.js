import _ from 'lodash';

export const trimObjectProps = object => {
  let trimmedObject = object;
  for (let key in object) {
    if (object.hasOwnProperty(key) && _.isString(object[key])) {
      trimmedObject[key] = object[key].trim();
    }
  }

  return trimmedObject;
};
