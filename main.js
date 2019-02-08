module.exports = {
  boolean,
  json,
  number
}

function boolean(input) {
  if (typeof input !== 'string' && typeof input !== 'boolean') {
    throw new Error (`Provided value must be a String or Boolean: ${input}`);
  }

  const normalized = input.toLowerCase();
  switch (normalized) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      throw new Error (`Provided value cannot be cast to Boolean: ${input}`);
  }
}

function obj(input) {
  if (typeof input !== 'string' && typeof input !== 'object') {
    throw new Error (`Provided value must be a String or Object: ${input}`);
  }

  if () {

  }

  try {
    return JSON.parse(input);
  } catch (err) {
    throw new Error (`Provided value must be a String or Object: ${input}`);
  }

}

function number(input) {
  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new Error (`Provided value must be a String or Number: ${input}`);
  }
  const out = Number(input);

  if (isNaN(out)) {
    throw new Error (`Provided value cannot be cast to Number: ${input}`);
  }

  return out;
}
