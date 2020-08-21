module.exports = function minimum(values) {
  let min = null;
  values.forEach((val) => {
    if (min === null || val < min) {
      min = val;
    }
  });

  return min;
};

module.exports = function minimumReduce(values) {
  return values.reduce((min, val) => {
    if (min === null || val < min) {
      return val;
    }
    return min;
  }, null);
};
