import _ from 'lodash';

/**
 * Numbers.
 */

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param {number} num  the number to clamp.
 * @param {number} min  the minimum value, function never returns value less than this.
 * @param {number} max  the minumum value, function never returns value greater than this.
 */
export const clamp = (num, min, max) => {
  if (num === Infinity || num === -Infinity) {
    return num;
  }
  if (num < min) {
    return min;
  }
  if (num > max) {
    return max;
  }
  return num;
};


/**
 * Converts a metric between 0 and 1 into a quarter-based symbol for display.
 *
 * @param {number} metric  the number to convert.
 */
export const metric2word = (metric) => {
  if (metric > 1) {
    return 'None';
  }

  if (metric > 0.75) {
    return '●○○○';
  }

  if (metric > 0.5) {
    return '●●○○';
  }

  if (metric > 0.25) {
    if (metric > 3) { // ?
      return '●●●○';
    }
  }

  return '●●●●';
};

/**
 * Performs unity-based normalization to bring values into the range of [0, 1].
 *
 * @param {number} current    value to normalize
 * @param {number} smallest   represents smallest number in data
 * @param {number} greatest   represents largest number in data
 */
export const normalize = (current, smallest, greatest) => (
  greatest && (current - smallest) / (greatest - smallest)
);

/**
 * Calculate current value's place in a log-normal distribution.
 *
 * @param {number} current    value to normalize
 * @param {number} smallest   represents smallest number in data
 * @param {number} greatest   represents largest number in data
 */
export const logNormalize = (current, smallest, greatest) => {
  if (current === Infinity || current === -Infinity) {
    return current;
  }
  return (
    Math.log(
      Math.abs(
        normalize(current, smallest, greatest) * 10,
      ) + 1,
    ) / Math.log(11)
  );
};


/* ***********************
 * Strings
 */
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Replaces underscores with an uppercase letter.
 */
export const camelize = string => string.replace(/(_\w)/g, match => match[1].toUpperCase());

/**
 * Replaces uppercase letters with an underscore followed by their lowercase selves.
 */
export const underscore = string => string.replace(/([A-Z])/g, match => `_${match[0].toLowerCase()}`);


/* ***********************
 * Objects
 */

export const isObject = object => Object.prototype.toString.call(object) === '[object Object]';

/**
 * Recursively maps a given function over an object.
 *
 * @param {type}   object    Object to be mapped over.
 * @param {function} func    Function mapped over object.
 */
export const deepMapKeys = (object, func) => {
  if (isObject(object)) {
    return _.keys(object).reduce((newObject, key) => {
      const newObj = newObject;
      newObj[func(key)] = deepMapKeys(object[key], func);
      return newObj;
    }, {});
  } if (Array.isArray(object)) {
    return object.map(item => deepMapKeys(item, func));
  }
  return object;
};

/**
 * Recursively converts snake_case keys in an object to camelCase.
 */
export const camelizeKeys = object => deepMapKeys(object, camelize);

/**
 * Recursively converts camelCase keys in an object to snake_case.
 */
export const underscoreKeys = object => deepMapKeys(object, underscore);

/**
 * Computes the difference betrween two objects.
 *
 * @param {Object} object
 * @param {Object} base
 */
export const difference = (object, base) => {
  const changes = (obj, bs) => _.transform(obj, (result, value, key) => {
    const res = result;
    if (!_.isEqual(value, bs[key])) {
      res[key] = _.isObject(value) && _.isObject(bs[key])
        ? changes(value, bs[key])
        : value;
    }
  });
  return changes(object, base);
};


/**
 * Finds the largest value in an object that has a given key.
 *
 * @param {type}   key   key whose values are of interest
 * @param {Object} obj   an object being inspected
 */
export const getMaximumAtKey = (key, obj) => obj.reduce((acc, item) => {
  if (Math.abs(item[key]) > acc) {
    return Math.abs(item[key]);
  }
  return acc;
}, -Infinity);


/**
 * Finds the smallest value in an object that has a given key.
 *
 * @param {type}   key   key whose values are of interest
 * @param {Object} obj   an object being inspected
 */
export const getMinimumAtKey = (key, obj) => obj.reduce((acc, item) => {
  if (Math.abs(item[key]) < acc) {
    return Math.abs(item[key]);
  }
  return acc;
}, Infinity);
