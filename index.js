'use strict';
const toString = Object.prototype.toString;
const getObjectType = arr => toString.call(arr).slice(8, -1);
const isObjectOfType = type => arr => getObjectType(arr) === type;

const typedArrayTypes = new Set([
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
]);

// Legacy APIs
const isLooseTypedArray = arr => {
  return typedArrayTypes.has(getObjectType(arr));
};

const isStrictTypedArray = arr => {
  return (
    arr instanceof Int8Array ||
    arr instanceof Int16Array ||
    arr instanceof Int32Array ||
    arr instanceof Uint8Array ||
    arr instanceof Uint8ClampedArray ||
    arr instanceof Uint16Array ||
    arr instanceof Uint32Array ||
    arr instanceof Float32Array ||
    arr instanceof Float64Array
  );
};

const is = arr => {
  if (isStrictTypedArray(arr) || isLooseTypedArray(arr)) {
    return true;
  } else {
    return false;
  }
};

is.loose = isLooseTypedArray;
is.strict = isStrictTypedArray;
is.int8Array = isObjectOfType('Int8Array');
is.uint8Array = isObjectOfType('Uint8Array');
is.uint8ClampedArray = isObjectOfType('Uint8ClampedArray');
is.int16Array = isObjectOfType('Int16Array');
is.uint16Array = isObjectOfType('Uint16Array');
is.int32Array = isObjectOfType('Int32Array');
is.uint32Array = isObjectOfType('Uint32Array');
is.float32Array = isObjectOfType('Float32Array');
is.float64Array = isObjectOfType('Float64Array');

module.exports = is;
