// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  const result = [];
  matrix
    .map((item, index) => {
      if (index % 2 !== 0) {
        item.reverse();
      }
      return [...item];
    })
    .forEach((element) => result.push(...element));
  return result;
};
